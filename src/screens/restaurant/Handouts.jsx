import { Box, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Header from "../../components/Header";

const Handouts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const qoutesForHandouts = [
    "The best way to find yourself is to lose yourself in the service of others.",
    "Give like you have never given before, and you will receive like you have never received before.",
    "Donate like your life depends on it, because it does.",
    "Give to the needy, and you will be blessed.",
    "The meaning of life is to find your gift. The purpose of life is to give it away.",
  ];
  const randomQoute =
    qoutesForHandouts[Math.floor(Math.random() * qoutesForHandouts.length)];

  //data coming from firebase here
  const mydata = [
    {
      id: 1,
      status: "accepted",
      food: "cake and cookies",
      expiry: "12/12/2021",
      packageType: "nonbiodegradable",
      noOfPeople: 7,
    },
    {
      id: 2,
      status: "accepted",
      food: "cake and rice",
      expiry: "12/12/2021",
      packageType: "nonbiodegradable",
      noOfPeople: 1,
    },
    {
      id: 3,
      status: "pending",
      food: "cake and biryani",
      expiry: "12/12/2021",
      packageType: "biodegradable",
      noOfPeople: 12,
    },
    {
      id: 4,
      status: "pending",
      food: "salad and biryani",
      expiry: "12/12/2021",
      packageType: "nonbiodegradable",
      noOfPeople: 10,
    },
  ];

  const columns = [
    { field: "id", headerName: "Handout ID" },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        return params.row.status === "pending" ? (
          <div>
            <p color="warning">
              <PendingActionsIcon /> Pending{" "}
            </p>
          </div>
        ) : (
          <div>
            <p>
              <CheckCircleOutlineIcon /> Accepted{" "}
            </p>
          </div>
        );
      },
    },
    {
      field: "food",
      headerName: "Food",
      flex: 1,
      cellClassName: "name-column--cell",
    },
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
        return params.row.status === "pending" ? (
          <div>
            <Button variant="contained" color="warning" onClick={() => {}}>
              Abort
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {}}
              sx={{ ml: "10px" }}
            >
              Re Request
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="contained" color="info" onClick={() => {}}>
              View
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Handouts Offered" subtitle={randomQoute} />
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
export default Handouts;
