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
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
const initialValues = {
  name: "",
  email: "",
  address: "",
  pincode: "",
  phone: "",
  password:"",
  c_password:""
};
let pincodeRegex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  pincode: yup
    .string()
    .matches(pincodeRegex, "Pincode number is not valid!")
    .required("Pincode is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
});

const UserProfileEdit = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box m="20px">
      <Header
        title="Volunteer"
        subtitle="You are registering as a food distributor."
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
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
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
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Typography variant="h4">Don't have an account? <Link color="secondary" to={'/signup'}>Sign Up</Link></Typography>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button variant="contained" color="secondary" type="submit">
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default UserProfileEdit;
