import { Box, Button, TextField, Typography,FilledInput } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from 'react';
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
import { app } from "../../firebase";
import { getFirestore ,addDoc, collection} from "firebase/firestore";
import { async } from "@firebase/util";


const initialValues = {
  name: "",
  email: "",
  address: "",
  pinCode: "",
  phone: "",
  password:"",
  c_password:""
};
let pinCodeRegex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  pinCode: yup
    .string()
    .matches(pinCodeRegex, "pinCode number is not valid!")
    .required("pinCode is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
});
const SignUpAsRestaurant = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address,setAddress] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = async(values) => {
    console.log(values);
    values.preventDefault();
    const db = getFirestore(app);
    await addDoc(collection(db, "restaurant"), {
      name: name,
      email: email,
      address: address,
      pinCode: pinCode,
      phone: phone
    })
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box m="20px">
      <Header
        title="Restaurant"
        subtitle="You are registering as a food supplier."
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          handleBlur,
          touched,
          handleChange,
          handleSubmit,
          errors,
        }) => (
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))" // 4 columns have 1 fraction of the available space
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, // 4 columns have 1 fraction of the available space
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="Name of your Restaurant"
                onBlur={handleBlur}
                onChange={(e)=>setName(e.target.value)}
                value={name}
                name="name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Email"
                onBlur={handleBlur}
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                name="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={(e)=>setPhone(e.target.value)}
                value={phone}
                name="phone"
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="pinCode"
                onBlur={handleBlur}
                onChange={(e)=>setPinCode(e.target.value)}
                value={pinCode}
                name="pinCode"
                error={touched.pinCode && Boolean(errors.pinCode)}
                helperText={touched.pinCode && errors.pinCode}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Address"
                onBlur={handleBlur}
                onChange={(e)=>setAddress(e.target.value)}
                value={address}
                name="address"
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              
              <FilledInput
              placeholder="Password"
              variant='filled'
              focused
              sx={{ gridColumn: "span 2" }}
              id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onBlur={handleBlur}
            name="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FilledInput
              variant='filled'
              focused
              sx={{ gridColumn: "span 2" }}
              id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onBlur={handleBlur}
            name="c_password"
            error={touched.c_password && Boolean(errors.c_password)}
            helperText={touched.c_password && errors.c_password}
            placeholder='Confirm Password'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Typography variant="h4">Already have account? <Link color="secondary" to={'/restaurant/login'}>Sign in</Link></Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button variant="contained" color="secondary" type="submit"onClick={handleFormSubmit} >
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default SignUpAsRestaurant;
