import { Box, Container } from '@mui/material'
import React from 'react'
import Header from '../Header'

function ForgetPassword() {
  return (
    <Container width='100%' height='100%' display="flex"  justifyContent="center"
    alignItem='center' sx={{mt:3}}  >
     
       <Header
       sx={{mt:5}}
         title="Forgot Password?"
         subtitle="Enter your registered email and get a Reset Password Link on your mail! "
       />
           {/* <form onSubmit={handleFormSubmit}> */}
             <Box display="flex" justifyContent="center" alignItem="center" sx={{mb:3}}>
               <input type="email" width={'100%'} placeholder='Enter your mail' style={{backgroundColor:"transparent",color:"grey"}}/>
             </Box>
           {/* </form> */}
         {/* )} */}
 
    </Container>
  )
}

export default ForgetPassword