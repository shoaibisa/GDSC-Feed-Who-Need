import { Box, Button, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { qoutesForHandouts } from "../../data/qoutes";
import { useHistory, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import './style.css';
const RestaurantViewHandouts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handoutId = useParams().id;

  const randomQoute =
    qoutesForHandouts[Math.floor(Math.random() * qoutesForHandouts.length)];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Volunteer Details" subtitle={randomQoute} />
      </Box>
      <Box
      className='resHangView'
        backgroundColor={colors.greenAccent[800]}
        m="0 auto"
        padding="10px"
        borderRadius="10px"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
      >
        <Typography variant="h4" sx={{ color: colors.grey[100],textAlign:"center",textDecoration:"underline"  }}>
          Handout ID: {handoutId}
        </Typography>
       <Box sx={{display:"flex",justifyContent:"space-evenly"}} className="resHangViewData">
       <Avatar
          alt="Remy Sharp"
          src="/images/p1.jpeg"
          sx={{ width: 200, height: 200 }}
        />
        <Box display="flex" justifyContent="center" alignItems="start" flexDirection="column">
        <Typography variant="h4" sx={{ color: colors.grey[100]}}>
          Volunteer Name : <strong>Shaj Akhtar</strong>
        </Typography>

        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Contact : 9072354567
        </Typography>

        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Zip Address : 90139
        </Typography>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          Address : ahmadabad
        </Typography>
        <Box textAlign="center" sx={{ml:3}}>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </Stack>
        </Box>

        </Box>
       
       </Box>


        <Typography variant="h4" sx={{ color: colors.grey[100],textAlign:"right",mt:4 }}>
          <i>Status : accepted</i>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.greenAccent[800],
            color: colors.grey[100],
            margin: "10px",
          }}
          color="success"
        >
          Accept
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.redAccent[700],
            color: colors.grey[100],
            margin: "10px",
          }}
          color="error"
        >
          Reject
        </Button>
      </Box>
    </Box>
  );
};
export default RestaurantViewHandouts;
