import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./screens/partials/Sidebar.jsx";
import Topbar from "./screens/partials/Topbar.jsx";
import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LandingPage from "./screens/LandingPage.jsx";
import UserDashboard from "./screens/dashboard/index.jsx";
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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
