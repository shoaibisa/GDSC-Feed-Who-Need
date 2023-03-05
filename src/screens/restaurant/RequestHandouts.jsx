import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const RequestHandouts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values); //all the values are coming here
  };

  return (
    <Box m="20px">
      <Header
        title="Create Handouts"
        subtitle="Charity is the best way to help people in need"
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
                label="About Food"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.food}
                name="food"
                error={!!touched.food && !!errors.food}
                helperText={touched.food && errors.food}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date of Expiry"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 2", mt: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Number of people it can be served"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.noOfPeople}
                name="noOfPeople"
                error={!!touched.noOfPeople && !!errors.noOfPeople}
                helperText={touched.noOfPeople && errors.noOfPeople}
                sx={{ gridColumn: "span 2", mt: "20px", paddingBottom: "20px" }}
              />

              {/* radio */}
              <Typography variant="h5" sx={{ color: colors.grey[100] }}>
                Packaging Type
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background: colors.grey[800],

                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="packagingType"
                    value={values.packagingType}
                    sx={{ color: colors.blueAccent[100] }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      sx={{ color: colors.grey[100] }}
                      label="Biodegradable"
                      value="biodegradable"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      sx={{ color: colors.grey[100] }}
                      label=" Non-Biodegradable"
                      value="nonbiodegradable"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Request Handouts
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  food: yup.string().required("required"),

  noOfPeople: yup.number().required("required"),
});
const initialValues = {
  food: "",
  packagingType: "",
  date: "",
  noOfPeople: "",
};

export default RequestHandouts;
