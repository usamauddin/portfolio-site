import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [active, setActive] = useState("Let's Start");
  const menuItems = [
    { label: "Begin", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "What I Do", path: "/what-i-do" },
    { label: "Who Am I", path: "/who-am-i" },
    { label: "Let's Connect", path: "/lets-connect" },
  ];

  // console.log("active", active);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#041C32",
        boxShadow: "none",
        paddingX: 5,
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 4 }}>
        {menuItems.map((item) => (
          <Box
            key={item.label}
            sx={{
              position: "relative",
              cursor: "pointer",
              "&:hover .underline": {
                transform: "scaleX(1)",
              },
            }}
            onClick={() => setActive(item.label)}
          >
            <Typography
              component={Link}
              to={item.path}
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                color: "#fff",
                transition: "color 0.3s ease",
                fontFamily: "nunito sans",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Typography>

            {/* Underline */}
            <Box
              className="underline"
              sx={{
                position: "absolute",
                bottom: -4,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#00AEEF",
                borderRadius: 1,
                transform: active === item.label ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
}
