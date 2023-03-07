import { Box, Button, Container } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
const SigninAsk = () => {
const navigate = useNavigate();
  return (
   <Container width='100%' height='100%' display="flex"  justifyContent="center"
   alignItem='center' sx={{mt:3}} >
     <Box m="10px auto" display="flex"
    flexDirection='column'
    textAlign='center'
    width='80%'
    height="70%"
    justifyContent="center"
    alignItem='center'>
    
      <Header
      sx={{mt:5}}
        title="You have registered As:"
        subtitle="Select the appreopriate option as per your Role:- "
      />
          {/* <form onSubmit={handleFormSubmit}> */}
            <Box display="flex" justifyContent="center" alignItem="center" sx={{mb:3}}>
              <Button variant="contained" color="secondary" sx={{mr:2,fontWeight:"bold"}} onClick={()=>navigate("/restaurant/login")}>
                Restaurant
              </Button>
              <Button variant="contained" color="secondary" sx={{fontWeight:"bold"}} onClick={()=>navigate("/volunteer/login")}>
                Volunteer
              </Button>
            </Box>
          {/* </form> */}
        {/* )} */}
    </Box>
   </Container>
  );
};
export default SigninAsk;
