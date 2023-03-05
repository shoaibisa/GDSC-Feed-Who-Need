import { Box, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Header from "../../components/Header";
import { qoutesForHandouts } from "../../data/qoutes";
import { useNavigate } from "react-router-dom";

const HandoutSelected = () => {
  const navigate = useNavigate();
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

  const columns = [
    { field: "id", headerName: "Handout ID" },

    {
      field: "food",
      headerName: "Food",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "restaurant", headerName: "Resataurant" },
    { field: "noOfPeople", headerName: "People can eat" },
    { field: "expiry", headerName: "Expiry" },

    {
      field: "packageType",
      headerName: "Package Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      headerName: "Action",
      field: "action",
      width: 200,
      flex: 1,
      cellClassName: "action-column--cell",
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant="contained"
              color="info"
              onClick={() => {
                navigate(`/volunteer/handout/${params.id}`);
              }}
            >
              View
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Handouts Selected" subtitle={randomQoute} />
      <Box
        m="40px 0 0 0"
        height="70vh"
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
        <DataGrid checkboxSelection rows={mydata} columns={columns} />
      </Box>
    </Box>
  );
};
export default HandoutSelected;
