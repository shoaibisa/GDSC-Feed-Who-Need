import { useContext, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const initialValues = {
	name: '',
	ownerName: '',
	email: '',
	contact: '',
	address: '',
	zipCode: '',
};
const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const pinCodeRegExp = /^[1-9][0-9]{5}$/;

const checkoutSchema = yup.object().shape({
	name: yup.string().required('required'),
	ownerName: yup.string().required('required'),
	email: yup.string().email('invalid email').required('required'),
	contact: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('required')
		.min(10, 'Phone number is not valid')
		.max(10, 'Phone number is not valid'),
	zipCode: yup
		.string()
		.matches(pinCodeRegExp, 'Pincode is not valid')
		.required('required'),
	address: yup.string().required('required'),
	profilePic: yup.string().required('required'),
});
const RestaurantProfileEdit = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const [data, setData] = useState(initialValues);
	const { name, ownerName, email, contact, address, zipCode } = data;
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(null);
	const id = useContext(AuthContext);

	useEffect(() => {
		id && getSingleUser();
	}, [id]);

	const getSingleUser = async () => {
		const docRef = doc(db, 'restaurant', id.currentUser.uid);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			setData({ ...docSnap.data() });
			console.log('Document data:', docSnap.data());
		}
	};

	useEffect(() => {
		const uploadFile = () => {
			const name = new Date().getTime() + file.name;
			const storageRef = ref(storage, file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(progress);
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused');
							break;
						case 'running':
							console.log('Upload is running');
							break;
					}
				},
				(error) => {
					// Handle unsuccessful uploads
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						console.log('File available at', downloadURL);
						setData((prev) => ({ ...prev, img: downloadURL }));
					});
				}
			);
		};
		file && uploadFile();
	}, [file]);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (values) => {
		console.log(values); //all the values are coming here
		values.preventDefault();
		await updateDoc(doc(db, 'restaurant', id.currentUser.uid), {
			...data,
			timeStamp: serverTimestamp(),
		});
	};

	return (
		<Box m="20px">
			<Header
				title="UPDATE PROFILE"
				subtitle="Update your Profile for better connectivity"
			/>

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={setData}
				validationSchema={checkoutSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleFormSubmit}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							sx={{
								'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
							}}
						>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Restaurant Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={name}
								name="name"
								error={!!touched.name && !!errors.name}
								helperText={touched.name && errors.name}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Owner Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={ownerName}
								name="ownerName"
								error={!!touched.ownerName && !!errors.ownerName}
								helperText={touched.ownerName && errors.ownerName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Email"
								onBlur={handleBlur}
								onChange={handleChange}
								value={email}
								name="email"
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Contact Number"
								onBlur={handleBlur}
								onChange={handleChange}
								value={contact}
								name="contact"
								error={!!touched.contact && !!errors.contact}
								helperText={touched.contact && errors.contact}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Zip Code"
								onBlur={handleBlur}
								onChange={handleChange}
								value={zipCode}
								name="zipCode"
								error={!!touched.zipCode && !!errors.zipCode}
								helperText={touched.zipCode && errors.zipCode}
								sx={{ gridColumn: 'span 2', mt: '20px', paddingBottom: '20px' }}
							/>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								sx={{
									gridColumn: 'span 2',
									mt: '20px',
									paddingBottom: '20px',
								}}
							>
								<Typography ml="5px">Upload Profile</Typography>
								<TextField
									fullWidth
									variant="filled"
									type="file"
									label=""
									onBlur={handleBlur}
									onChange={(e) => setFile(e.target.files[0])}
									name="profilePic"
									error={!!touched.profilePic && !!errors.profilePic}
									helperText={touched.profilePic && errors.profilePic}
								/>
							</Box>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Full Address"
								onBlur={handleBlur}
								onChange={handleChange}
								value={address}
								name="address"
								error={!!touched.address && !!errors.address}
								helperText={touched.address && errors.address}
								sx={{ gridColumn: 'span 4' }}
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="end"
							mt="20px"
						>
							<Button
								type="submit"
								color="secondary"
								variant="contained"
							>
								Update Profile
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default RestaurantProfileEdit;
