import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
const initialValues = {
  name: "",
  email: "",
  address: "",
  pincode: "",
  phone: "",
};
const pincodeRegExp = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  pincode: yup
    .string()
    .matches(pincodeRegExp, "Pincode number is not valid!")
    .required("Pincode is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
});

const FormMaker = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="CREATE Profile" subtitle="Create your own profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleFormSubmit}>
            <Box display="grid" gap="30px"></Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default FormMaker;
