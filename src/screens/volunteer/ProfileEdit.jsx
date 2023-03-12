import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const VolunteerProfileEdit = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values); //all the values are coming here
  };

  return (
    <Box m="20px">
      <Header
        title="UPDATE PROFILE"
        subtitle="Update your Profile for better connectivity"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
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
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fName}
                name="fName"
                error={!!touched.fName && !!errors.fName}
                helperText={touched.fName && errors.fName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lName}
                name="lName"
                error={!!touched.lName && !!errors.lName}
                helperText={touched.lName && errors.lName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Zip Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode}
                name="zipCode"
                error={!!touched.zipCode && !!errors.zipCode}
                helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: "span 2", mt: "20px", paddingBottom: "20px" }}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  gridColumn: "span 2",
                  mt: "20px",
                  paddingBottom: "20px",
                }}
              >
                <Typography ml="5px">Upload Pic</Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="file"
                  label=""
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.profilePic}
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
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Update Profile
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const pinCodeRegExp = /^[1-9][0-9]{5}$/;

const checkoutSchema = yup.object().shape({
  fName: yup.string().required("required"),

  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required")
    .required("required")
    .min(10, "Phone number is not valid")
    .max(10, "Phone number is not valid"),
  address: yup.string().required("required"),
  zipCode: yup
    .string()
    .matches(pinCodeRegExp, "Pincode is not valid")
    .required("required"),
  profilePic: yup.string().required("required"),
});
const initialValues = {
  fName: "",
  lName: "",

  email: "",
  contact: "",
  address: "",
  zipCode: "",
  profilePic: "",
};

export default VolunteerProfileEdit;
