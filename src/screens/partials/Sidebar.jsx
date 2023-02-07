import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcone from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcone from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcone from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineIcone from "@mui/icons-material/PersonOutline";
import HelpOutlineIcone from "@mui/icons-material/HelpOutline";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); //selecting colors
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* logo and menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  RESTAURANT
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="user"
                  width="100px"
                  height="100px"
                  src="../../images/r1.avif"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box>
                {/* Restaurant Name */}
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0 " }}
                  color={colors.grey[100]}
                >
                  PARKS CENTRAL RESTAURANT
                </Typography>
                {/* Restaurant Address */}
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  p4, Main Street, Sangrur
                </Typography>
              </Box>
            </Box>
          )}
          {/* menu items */}
        </Menu>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar;
