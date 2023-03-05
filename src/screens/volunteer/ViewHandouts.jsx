import { Box, Button, Typography, TextField, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { qoutesForHandouts } from "../../data/qoutes";
import { useHistory, useParams } from "react-router-dom";
import * as yup from "yup";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { Formik } from "formik";

import useMediaQuery from "@mui/material/useMediaQuery";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
const VolunteerViewHandouts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [isAccepted, setIsState] = useState(true);
  const handoutId = useParams().id;
  const randomQoute =
    qoutesForHandouts[Math.floor(Math.random() * qoutesForHandouts.length)];
  const [hover, setHover] = useState(-1);

  const handleFormSubmit = (values) => {
    console.log(values); //all the values are coming here
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle={randomQoute} />
      </Box>
      <Box backgroundColor={colors.greenAccent[800]} m="0 30px" padding="10px">
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Handout ID: {handoutId}
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Restaurant Name : Park Central
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Restaurant Owner Name : Mahi Akhtar
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Restaurant Contact : 9072354567
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Food : cake and cookies
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Expiry : 12/12/2021
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Package Type : biodegradable
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Zip Address : 90139
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Address : ahmadabad
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          No of People : 7
        </Typography>
      </Box>
      {isAccepted ? (
        <Box m="20px">
          {/* confirmation form  */}
          <Typography variant="h4" sx={{ color: colors.grey[100] }}>
            Enter Confirmation Data
          </Typography>
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
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Review"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.review}
                    name="review"
                    error={!!touched.review && !!errors.review}
                    helperText={touched.review && errors.review}
                    sx={{ gridColumn: "span 4" }}
                  />

                  {/* image upload */}
                  <TextField
                    fullWidth
                    variant="filled"
                    type="file"
                    label=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.image}
                    name="image"
                    error={!!touched.image && !!errors.image}
                    helperText={touched.image && errors.image}
                    sx={{ gridColumn: "span 2" }}
                  />
                  {/* choose rating */}

                  <Rating
                    name="rating"
                    value={values.rating}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={handleChange}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {values.rating !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : values.rating]}
                    </Box>
                  )}
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Confirm Handout
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h4" sx={{ color: colors.grey[100] }}>
            Status : pending
          </Typography>
        </Box>
      )}
    </Box>
  );
};
const checkoutSchema = yup.object().shape({
  review: yup.string().required("Review is required"),
});
const initialValues = {
  review: "",
  image: "",
  rating: 0,
};
export default VolunteerViewHandouts;
