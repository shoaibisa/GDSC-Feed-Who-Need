import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Rating from "@mui/material/Rating";

const VolunteerHistory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
      imgUrl: "/images/ch1.jpg",
      contact: "9876543210",
      rating: 4,
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
      imgUrl: "/images/ch2.jpg",
      contact: "9876543210",
      rating: 3.5,
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
      contact: "9876543210",
      imgUrl: "/images/ch1.jpg",
      rating: 2.5,
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
      contact: "9876543210",
      noOfPeople: 10,
      imgUrl: "/images/ch2.jpg",
      rating: 4.5,
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
    { field: "restaurant", headerName: "Restaurant Name" },
    { field: "expiry", headerName: "Delivered at" },
    { field: "contact", headerName: "Contact" },

    { field: "noOfPeople", headerName: "People can eat" },
    {
      headerName: "Rating",
      field: "rating",
      flex: 1,
      cellClassName: "action-column--cell",
      renderCell: (params) => {
        return (
          <Rating
            name="read-only"
            precision={0.5}
            value={params.row.rating}
            readOnly
          />
        );
      },
    },
    {
      headerName: "Memory",
      field: "imgUrl",
      width: 150,
      height: 150,
      flex: 1,
      cellClassName: "action-column--cell",
      renderCell: (params) => {
        return (
          <img
            alt="memory"
            src={params.row.imgUrl}
            style={{ width: 50, height: 50, borderRadius: "10%" }}
          />
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="VOLUNTEER HISTORY" subtitle="Your Volunteer History" />
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
export default VolunteerHistory;
