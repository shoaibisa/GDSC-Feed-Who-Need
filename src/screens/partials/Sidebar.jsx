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
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HelpOutlineIcone from "@mui/icons-material/HelpOutline";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); //selecting colors
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const ItemsMenu = ({ title, icon, selected, setSelected, path }) => {
    return (
      <MenuItem
        icon={icon}
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
      >
        <Typography>{title}</Typography>
        <Link to={path} />
      </MenuItem>
    );
  };
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
                  src={`../../images/r1.avif`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
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
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <ItemsMenu
              title="Dashboard"
              icon={<HomeOutlinedIcone />}
              selected={selected}
              setSelected={setSelected}
              path="/dashboard"
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Personal
            </Typography>
            <ItemsMenu
              title="User Profile Edit"
              icon={<ManageAccountsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              path="/profile"
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Handouts
            </Typography>
            <ItemsMenu
              title="Handouts Offered"
              icon={<FoodBankOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              path="/handouts"
            />
            <ItemsMenu
              title="Request Handouts"
              icon={<RestaurantMenuIcon />}
              selected={selected}
              setSelected={setSelected}
              path="/request"
            />

            <ItemsMenu
              title="Packaging"
              icon={<LocalShippingOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              path="/packaging"
            />
            <ItemsMenu
              title="Help"
              icon={<HelpOutlineIcone />}
              selected={selected}
              setSelected={setSelected}
              path="/packaging"
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar;
