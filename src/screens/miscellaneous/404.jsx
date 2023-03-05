import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
const NotFoundPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "& .not-found": {
          color: colors.grey[100],
        },
        "& .not-found-text": {
          color: colors.grey[100],
        },
        "& .not-found-button": {
          color: colors.grey[100],
          backgroundColor: colors.primary[400],
          "&:hover": {
            backgroundColor: colors.primary[500],
          },
        },
      }}
    >
      <Typography variant="h1" className="not-found">
        404
      </Typography>
      <Typography variant="h4" className="not-found-text">
        Page not found
      </Typography>
      <Button
        variant="contained"
        className="not-found-button"
        component={Link}
        to="/"
        startIcon={<ArrowBack />}
      >
        Go back
      </Button>
    </Box>
  );
};
export default NotFoundPage;
