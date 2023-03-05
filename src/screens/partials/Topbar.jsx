import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
const Topbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search bar */}
      <Box display="flex" borderRadius="3px" onClick={handleHomeClick}>
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" /> */}
        {/* <IconButton type="button" sx={{ p: 1 }} onClick={handleHomeClick}>
          <HomeIcon />
          {/* <SearchOutlined /> */}
        {/* </IconButton>  */}
        <img
          alt="user"
          width="200px"
          height="60px"
          src={`../../images/FeedWhoNeed.png`}
          style={{
            cursor: "pointer",
            borderRadius: "50%",
          }}
        />
      </Box>
      {/* Icon */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
          {/* <LightModeOutlined /> */}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Topbar;
