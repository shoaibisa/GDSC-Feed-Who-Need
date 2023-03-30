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
import "./Style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import GoogleMapReact from "google-map-react";

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
        <Header title="Handout" subtitle={randomQoute} />
      </Box>
      <Box
        className="volViewHang"
        backgroundColor={colors.greenAccent[800]}
        m="0 auto"
        padding="10px"
        borderRadius="10px"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              color: colors.grey[100],
              width:"100%",
              fontSize:"18px"
            }}
            className="volViewHangHead"
          >
            <table className="volHangoutTable" style={{
              width:"70%",
              margin:"0 auto",
              padding:"10px"
            }}>
              <thead style={{textAlign:"center",fontSize:"20px"}}>Hangouts Details</thead>
             <tbody>
             <tr>
                <th>Hangout id</th>
                <td>{handoutId}</td>
              </tr>
              <tr>
                <th>Restaurant Name:</th>
                <td>Park Central</td>
              </tr>
              <tr>
                <th> Restaurant Owner Name</th>
                <td>Mahi Akhtar</td>
              </tr>
              <tr>
                <th>Restaurant Contact</th>
                <td>9072354567</td>
              </tr>
              <tr>
                <th>Food</th>
                <td>cake and cookies</td>
              </tr>
              <tr>
                <th>Expiry</th>
                <td>12/12/2021</td>
              </tr>
              <tr>
                <th>Package Type</th>
                <td>biodegradable</td>
              </tr>
              <tr>
                <th>Zip Address</th>
                <td>0139</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>ahmadabad</td>
              </tr> 
              <tr>
                <th>No of People</th>
                <td>7</td>
              </tr>          
             </tbody>
            </table>
            {/* <Typography variant="h4" sx={{ display: "inline" }}>
              Handout ID :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Restaurant Name :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Restaurant Owner Name :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Restaurant Contact :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Food :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Expiry :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Package Type :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Zip Address :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              Address :
            </Typography>
            <Typography variant="h4" sx={{ display: "inline" }}>
              No of People :
            </Typography> */}
          </Box>
{/* 
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              paddingRight: "5rem",
              textAlign: "left",
            }}
            className="volViewHangData"
          >
            <strong> {handoutId}</strong>
            <strong> Park Central</strong>
            <strong> Mahi Akhtar</strong>
            <strong>9072354567</strong>
            <strong> cake and cookies</strong>
            <strong> 12/12/2021</strong>
            <strong> biodegradable</strong>
            <strong> 0139</strong>
            <strong> ahmadabad</strong>
            <strong>7</strong>
          </Box> */}
          {/* Adding google Map */}
        </Box>

        {/* <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Handout ID: <strong> {handoutId}</strong>
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Restaurant Name : <strong>Park Central</strong>
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Restaurant Owner Name : <strong>Mahi Akhtar</strong>
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
        </Typography> */}
        <Box sx={{ pl:5 }}>
          {/* Waiting for gmap javascript api */}
          <Typography variant="h4" sx={{ color: colors.grey[100],textAlign:"center",p:1,textDecoration:"underline" }}>
            Restaurant Location :
          </Typography>

          <img
            src="/images/map.png"
            alt="map"
            style={{ width: "70%", height: "70%",margin:"10px auto 20px auto", }}
          />
        </Box>
      </Box>

      {isAccepted ? (
        <Box m="20px">
          {/* confirmation form  */}
          <Typography variant="h4" sx={{ color: colors.grey[100] }} m="20px">
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

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor={colors.greenAccent[600]}
                    padding="10px"
                    borderRadius="10px"
                    boxShadow="0px 0px 10px 0px rgba(0,0,0,0.75)"
                  >
                    <Typography component="legend" variant="h4">
                      Rating
                    </Typography>
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
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {values.rating !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : values.rating]}
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button
                    onClick={() => setIsState(false)}
                    color="warning"
                    variant="contained"
                    sx={{ mr: "20px" }}
                  >
                    Cancel Handout
                  </Button>

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
