import { Box, Container } from '@mui/material'
import React from 'react'
import Header from '../Header'

function ConfirmPassword() {
  return (
    <Container width='100%' height='100%' display="flex"  justifyContent="center"
    alignItem='center' sx={{mt:3}}  >
     
       <Header
       sx={{mt:5}}
         title="Reset Your Password?"
         subtitle="You can change your passwrord now! "
       />
           {/* <form onSubmit={handleFormSubmit}> */}
             <Box display="flex" justifyContent="center" alignItem="center" sx={{mb:3}} flexDirection='column'>
               <input type="text" width={'100%'} placeholder='Enter your Password' style={{backgroundColor:"transparent",color:"grey",marginBottom:"20px"}}/>
               <input type="text" width={'100%'} placeholder='Confirm your Password' style={{backgroundColor:"transparent",color:"grey"}}/>

             </Box>
           {/* </form> */}
         {/* )} */}
 
    </Container>
  )
}

export default ConfirmPassword