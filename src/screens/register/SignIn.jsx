import { Box, Button, TextField, Typography,FilledInput } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from 'react';
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
const initialValues = {
  email: "",
  password:"",
};

const SignIn = () => {
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
        title="Sign In"
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          handleBlur,
          touched,
          handleChange,
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
export default SignIn;
