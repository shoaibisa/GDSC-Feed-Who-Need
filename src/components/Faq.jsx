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
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>

        <Box display="flex"  justifyContent="start"
    alignItem='center' sx={{mt:3}} flexDirection='column'>
         <Header
       sx={{mt:5}}
         title="Still have some doubts?"
         subtitle="Fill this form to get your Questions answered! "
       />
       <button style={{width:"150px",backgroundColor:"turquoise",color:"black",padding:"10px",fontSize:"22px",fontWeight:"bold"}}>Contact Us</button>
        </Box>
    </Container>
  )
}

export default Faq