import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./screens/partials/Sidebar.jsx";
import Topbar from "./screens/partials/Topbar.jsx";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LandingPage from "./screens/LandingPage.jsx";
import UserDashboardVol from "./screens/dashboard/indexVolunteer";
import UserProfileEdit from "./screens/forms/index.jsx";
import NotFoundPage from "./screens/miscellaneous/404";
import {
  Sign,
  SignIn,
  SignUpAsRestaurant,
  SignUpAsVolunteer,
} from "./screens/register";

import RestaurantProfileEdit from "./screens/restaurant/RestaurantProfileEdit";
import { useLocation } from "react-router-dom";
import SidebarRestaurant from "./screens/restaurant/SideBar.jsx";
import RestaurantDashboard from "./screens/restaurant/Dashboard.jsx";
import RequestHandouts from "./screens/restaurant/RequestHandouts.jsx";
import Handouts from "./screens/restaurant/Handouts.jsx";

function App() {
  let location = useLocation();
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          {/* if resturant routes */}
          {location.pathname === "/restaurant/dashboard" ||
          location.pathname === "/restaurant/profile" ||
          location.pathname === "/restaurant/request-handouts" ||
          location.pathname === "/restaurant/handouts" ||
          location.pathname === "/volunteer/dashboard" ? (
            <SidebarRestaurant />
          ) : (
            ""
          )}
          {/* if volunteer routes */}
          {location.pathname === "/volunteer/dashboard" ? <Sidebar /> : ""}
          <main className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/restaurant/dashboard"
                element={<RestaurantDashboard />}
              />
              <Route
                path="/volunteer/dashboard"
                element={<UserDashboardVol />}
              />
              <Route path="/signup" element={<Sign />} />

              <Route
                path="/restaurant/signUpAsRestaurant"
                element={<SignUpAsRestaurant />}
              />
              <Route
                path="/volunteer/signUpAsVolunteer"
                element={<SignUpAsVolunteer />}
              />
              <Route path="/restaurant/login" element={<SignIn />} />
              <Route path="/volunteer/login" element={<SignIn />} />
              <Route path="/profile" element={<UserProfileEdit />} />
              {/* <Route path="/p" element={<UserProfileEdit />} /> */}

              {/* Restaurant routes */}
              <Route
                path="/restaurant/profile"
                element={<RestaurantProfileEdit />}
              />
              <Route
                path="/restaurant/request-handouts"
                element={<RequestHandouts />}
              />
              <Route path="/restaurant/handouts" element={<Handouts />} />
              {/* 404 route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
