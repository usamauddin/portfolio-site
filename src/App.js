import React from "react";
import { Box } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./pages/HeroSection";
import WhatIDo from "./pages/WhatIDo";
import WhoIAm from "./pages/WhoAmI";
import "./App.css";
import Contact from "./pages/LetsConnect";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavigationBar />
      <Box component="main" sx={{ flexGrow: 1, overflowY: "auto" }}>
        <div id="begin">
          <HeroSection />
        </div>
        <div id="what-i-do">
          <WhatIDo />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="who-am-i">
          <WhoIAm />
        </div>
        <div id="lets-connect">
          <Contact />
        </div>
      </Box>
    </Box>
  );
}
