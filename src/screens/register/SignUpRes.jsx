import { useState, useContext } from 'react';
import styles from './signUp.module.css';
// import axios from "axios";
// import logo from "../../images/techFEST '23.webp";
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebase';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

// import AuthContext from "../../auth/authContext";
// import Loader from '../Loader/Loader.js';

const SignUpRes = () => {
	// const authContext = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [password, setPassword] = useState('');
	const [c_password, setC_Password] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorsMade, setErrorsMade] = useState();
	const [fieldErr, setFieldErr] = useState(null);
	const [mailErr, setMailErr] = useState(null);
	const [passwordErr, setPasswordErr] = useState(null);
	const navigate = useNavigate();

	const PostData = async (e) => {
		e.preventDefault();
		if (email.trim().length === 0 || password.trim().length === 0) {
			setFieldErr('Field should not be empty');
			setTimeout(() => {
				setFieldErr(null);
			}, 3000);
			return;
		}
		if (!email.trim().includes('@')) {
			setMailErr('Invalid mail!');
			setTimeout(() => {
				setMailErr(null);
			}, 3000);
			return;
		}
		const user = {
			email: email,
			password: password,
		};
		setIsLoading(true);
		// userLoginHandle(user);

		const db = getFirestore(app);
		await addDoc(collection(db, 'restaurant'), {
			name: name,
			email: email,
			address: address,
			pinCode: pinCode,
			phone: phone,
		});
	};

	return (
		<>
			{/* {isLoading && <Loader />} */}
			<div className={styles.signin__content}>
				<div className={styles.signin__page}>
					{errorsMade && <p style={{ color: 'red' }}>{errorsMade}</p>}
					<form
						method="post"
						onSubmit="return myFormValidation()"
						className={styles.signin__inputFields}
						action=""
					>
						<h1 className={styles.signin__title}>Welcome!</h1>
						<p className={styles.signin__text}>
							<i>Thank You for joining us for a GOOD CAUSE!</i>
						</p>
						{fieldErr && <p style={{ color: 'red' }}>{fieldErr}</p>}
						{password && <p style={{ color: 'red' }}>{passwordErr}</p>}
						<label
							htmlFor="name"
							className={styles.signin__label}
						>
							Name of your Restaurant
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Food distributor"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							autoComplete="off"
						/>
						<label
							htmlFor="email"
							className={styles.signin__label}
						>
							{mailErr && <p style={{ color: 'red' }}>{mailErr}</p>}
							E-mail
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							autoComplete="off"
						/>
						<label
							htmlFor="phone"
							className={styles.signin__label}
						>
							Contact Number
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Enter your Phone number"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
							autoComplete="off"
						/>
						<label
							htmlFor="address"
							className={styles.signin__label}
						>
							Address
						</label>
						<input
							placeholder="Enter your address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							name="address"
						/>
						<label
							htmlFor="pinCode"
							className={styles.signin__label}
						>
							Pin-Code
						</label>
						<input
							placeholder="Enter your pin-code"
							value={pinCode}
							onChange={(e) => setPinCode(e.target.value)}
							name="pinCode"
						/>
						<label
							htmlFor="password"
							className={styles.signin__label}
						>
							Password
						</label>
						<input
							placeholder="Enter your Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							required
							autoComplete="off"
						/>
						<label
							htmlFor="password"
							className={styles.signin__label}
						>
							Confirm Password
						</label>
						<input
							placeholder="Enter your Password"
							value={c_password}
							onChange={(e) => setC_Password(e.target.value)}
							type="password"
							required
							autoComplete="off"
						/>
						<div className={styles.signin__div}>
							<button
								className={styles.signin__button}
								value="signIn"
								type="button"
								onClick={PostData}
								disabled={isLoading}
							>
								Sign Up
							</button>
							{/* <Link to="/forgot-password">Forgot Password?</Link> */}
						</div>
						{/* </div> */}
					</form>
					<p className={styles.signin__text}>
						Don't have an account?
						<Link to={'/restaurant/login'}>
							<span className={styles.signin__link}>Sign In</span>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};
export default SignUpRes;
