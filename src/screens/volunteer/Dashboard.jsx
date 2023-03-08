import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { DataGrid } from "@mui/x-data-grid";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import PendingActionsIcon from "@mui/icons-material/PendingActions";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import { qoutesForHandouts } from "../../data/qoutes";
import StatBox from "../../components/dashboard/StatBox";
import Slider from "@mui/material/Slider";
import NearbyHang from './NearbyHang';
import './Style.css';
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 37,
    label: "37",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },

];
const VolunteerDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const randomQoute =
    qoutesForHandouts[Math.floor(Math.random() * qoutesForHandouts.length)];

  //data coming from firebase here
  const mydata = [
    {
      id: 1,
      status: "accepted",
      food: "cake and cookies",
      expiry: "12/12/2021",
      packageType: "biodegradable",
      restaurant: "Park Central",
      zipaddress: "90139",
      address: "ahmadabad",
      noOfPeople: 7,
    },
    {
      id: 2,
      status: "accepted",
      food: "cake and rice",
      expiry: "12/12/2021",
      packageType: "nonbiodegradable",
      restaurant: "Big Cafe",
      zipaddress: "80139",
      address: "sangrur",
      noOfPeople: 1,
    },
    {
      id: 3,
      status: "pending",
      food: "cake and biryani",
      expiry: "12/12/2021",
      restaurant: "All Pizz",
      packageType: "nonbiodegradable",
      zipaddress: "90139",
      address: "new delhi",
      noOfPeople: 12,
    },
    {
      id: 4,
      status: "pending",
      food: "salad and biryani",
      expiry: "12/12/2021",
      restaurant: "Park Central",
      packageType: "nonbiodegradable",
      zipaddress: "10100",
      address: "longowal",
      noOfPeople: 10,
    },
  ];

  //for nearby
  
  const columns = [
    { field: "id", headerName: "Handout ID" },

    {
      field: "food",
      headerName: "Food",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "restaurant", headerName: "Restaurant" },
    { field: "noOfPeople", headerName: "People can eat" },

    { field: "expiry", headerName: "Expiry" },
    { field: "address", headerName: "People can eat" },
    {
      field: "packageType",
      headerName: "Package Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      headerName: "Action",
      field: "action",

      flex: 1,
      cellClassName: "action-column--cell",
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                console.log("hi", params.id);
              }}
            >
              Accept
            </Button>
          </div>
        );
      },
    },
  ];
  //for all handouts
  const columns1 = [
    { field: "id", headerName: "Handout ID" },

    {
      field: "food",
      headerName: "Food",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "restaurant", headerName: "Restaurant" },
    { field: "noOfPeople", headerName: "People can eat" },

    { field: "expiry", headerName: "Expiry" },
    { field: "address", headerName: "Address" },
    { field: "zipaddress", headerName: "Zip Code" },
    {
      field: "packageType",
      headerName: "Package Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      headerName: "Action",
      field: "action",

      flex: 1,
      cellClassName: "action-column--cell",
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                console.log("hi", params.id);
              }}
            >
              Accept
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <Header title="DASHBOARD" subtitle={randomQoute} />
      </Box>

      {/* GRID & CHARTS */}
      <Box
      height='auto'
        display="flex"
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'
        className='dashboardCards'
      >
        {/* ROW 1 */}
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225" //value
            subtitle="Handouts Offered"
            progress="0.50"
            increase="+21%"
            icon={
              <VolunteerActivismIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Handouts Added"
            progress="0.30"
            increase="+5%"
            icon={
              <DinnerDiningIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ width: 260 }} p="0 25px" m="26px 0">
            <Slider
              aria-label="Restricted values"
              defaultValue={20}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
            />
            <Typography
              variant="h5"
              sx={{ color: colors.greenAccent[500] }}
              fontStyle="italic"
            >
              Your Reward Level
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box m="20px">
        <Box  className='hangout'>
        <Header title="Handouts Nearby Your Area" subtitle="" />
        </Box>
        <Box
          m="40px 0"
          height="auto"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <NearbyHang itemdata={itemData}/>
          {/* <DataGrid checkboxSelection rows={mydata} columns={columns} /> */}
        </Box>
      </Box>

      <Box m="20px" sx={{mb:15}} >
        <Box className='hangout'>
        <Header title="All Current Handouts" subtitle="" style={{textAlign:"center"}}/>
        </Box>
        <Box
          m="40px 0"
          height="auto"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
           <NearbyHang itemdata={itemData}/>
          {/* <DataGrid checkboxSelection rows={mydata} columns={columns1} /> */}
        </Box>
      </Box>
    </Box>
  );
};
export default VolunteerDashboard;
