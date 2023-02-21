import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
// import { mockTransactions } from "../../data/mockData.js";

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StatBox from "../../components/dashboard/StatBox";
import { tokens } from "../../theme";
const UserDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to user panel" />
        {/* <Button color='white'>Download</Button> */}
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'
        flexDirection='column'
         >
          <StatBox 
          icon={<RestaurantMenuIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>}
          title="No. of Handouts" 
          subtitle="No. of times you served"
          progress='0.23'
          increase='+5%'
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'
        flexDirection='column' flexWrap='wrap' height='auto'
         >
          <StatBox 
          title="No. of Handouts" 
          subtitle="No. of times you served"
          progress='0.23'
          increase='+5%'
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'
        flexDirection='column'
         >
          <StatBox 
          title="No. of Handouts" 
          subtitle="No. of times you served"
          progress='0.23'
          increase='+5%'
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'
        flexDirection='column'
         >
          <StatBox 
          title="No. of Handouts" 
          subtitle="No. of times you served"
          progress='0.75'
          increase='+5%'
          />
        </Box>

      </Box>
    </Box>
  );
};

export default UserDashboard;
