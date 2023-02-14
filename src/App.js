import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./screens/partials/Sidebar.jsx";
import Topbar from "./screens/partials/Topbar.jsx";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LandingPage from "./screens/LandingPage.jsx";
import UserDashboard from "./screens/dashboard/index.jsx";
import SignUpRes from "./screens/register/SignUpRes";
import SignUpVol from "./screens/register/SignUpVol";
import SignIn from "./screens/register/SignIn";
import Sign from "./screens/register/Sign";
import UserProfileEdit from "./screens/forms/index.jsx";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Sidebar />
          <main className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/signup" element={<Sign />} />
              <Route path="/restaurant/signupres" element={<SignUpRes />} />
              <Route path="/volunteer/signupvol" element={<SignUpVol />} />
              <Route path="/restaurant/signin" element={<SignIn />} />
              <Route path="/volunteer/signin" element={<SignIn />} />
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
