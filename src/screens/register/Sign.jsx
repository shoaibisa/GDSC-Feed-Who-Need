import { Box, Button, Container } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
const Sign = () => {
const navigate = useNavigate();
  return (
   <Container width='100%' height='100%' display="flex"  justifyContent="center"
   alignItem='center'>
     <Box m="10px auto" display="flex"
    flexDirection='column'
    textAlign='center'
    width='80%'
    height="70%"
    justifyContent="center"
    alignItem='center'>
      <Box display="flex" sx={{mt:4}}  justifyContent="center"
   alignItem='center'>
      <img src='/sign.png' width='30%'  />
      </Box>
      <Header
      sx={{mt:5}}
        title="Registering As:"
        subtitle="Select the appreopriate option as per your Role:- "
      />
          {/* <form onSubmit={handleFormSubmit}> */}
            <Box display="flex" justifyContent="center" alignItem="center">
              <Button variant="contained" color="secondary" type="submit" sx={{mr:2}} onClick={()=>navigate("/restaurant/signUpAsRestaurant")}>
                Restaurant
              </Button>
              <Button variant="contained" color="secondary" type="submit" onClick={()=>navigate("/volunteer/signUpAsVolunteer")}>
                Volunteer
              </Button>
            </Box>
          {/* </form> */}
        {/* )} */}
    </Box>
   </Container>
  );
};
export default Sign;
