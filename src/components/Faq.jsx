import { Container, Box} from '@mui/material'
import React from 'react'
import Header from './Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq() {
  return (
    <Container width='100%' height='100%' display="flex"  justifyContent="center"
    alignItem='center' sx={{mt:3}}  >

       <Header
       sx={{mt:5}}
         title="Have some Questions?"
         subtitle="Here are answers to some of your questions! "
       />
        <Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>My data will be secured ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Don't worry, we never share user credentials with any of the organizations / restaurants.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are rewards for delivering food parcels?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On each delivery you will earn 10 Points. If you collect 100 points in your wallet, you can reedem it for 15$ Amazon Vouncher.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What will be voluenteer duties ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Voluenteer  have to pick the food from restaurant, fill the food packaging details, deliver the food to nearest needy people & share their experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>

        {/* <Box display="flex"  justifyContent="start"
    alignItem='center' sx={{mt:3}} flexDirection='column'>
         <Header
       sx={{mt:5}}
         title="Still have some doubts?"
         subtitle="Fill this form to get your Questions answered! "
       />
       <button style={{width:"150px",backgroundColor:"turquoise",color:"black",padding:"10px",fontSize:"22px",fontWeight:"bold"}}>Contact Us</button>
        </Box> */}
    </Container>
  )
}

export default Faq