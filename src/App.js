import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./screens/partials/Sidebar.jsx";
import Topbar from "./screens/partials/Topbar.jsx";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LandingPage from "./screens/LandingPage.jsx";
import UserDashboard from "./screens/dashboard/index.jsx";
import UserProfileEdit from "./screens/forms/index.jsx";
import { Sign,SignIn,SignUpAsRestaurant,SignUpAsVolunteer } from './screens/register';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          {(location.pathname==='/dashboard' || location.pathname==='/profile')?<Sidebar />:""}
          {/* <Sidebar /> */}
          <main className="content">
            <Topbar />

            <Routes>
             <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/signup" element={<Sign />} />
              
              <Route path="/restaurant/signUpAsRestaurant" element={<SignUpAsRestaurant />} />
              <Route path="/volunteer/signUpAsVolunteer" element={<SignUpAsVolunteer />} />
              <Route path="/restaurant/login" element={<SignIn />} />
              <Route path="/volunteer/login" element={<SignIn />} />
              <Route path="/profile" element={<UserProfileEdit />} />
              {/* <Route path="/p" element={<UserProfileEdit />} /> */}
            </Routes>
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
