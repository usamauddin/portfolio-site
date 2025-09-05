import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function NavigationBar() {
  const [active, setActive] = useState("Begin");
  const menuItems = [
    { label: "Begin", path: "begin" },
    { label: "Portfolio", path: "portfolio" },
    { label: "What I Do", path: "what-i-do" },
    { label: "Who Am I", path: "who-am-i" },
    { label: "Let's Connect", path: "lets-connect" },
  ];

  // Update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.path.substring(1), // Remove #
        element: document.getElementById(item.path.substring(1)),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const activeItem = menuItems.find(
          (item) => item.path === `#${currentSection.id}`
        );
        if (activeItem) {
          setActive(activeItem.label);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item) => {
    setActive(item.label);

    // Smooth scroll to section
    const element = document.getElementById(item.path.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Update URL hash without page reload
    window.history.pushState(null, null, item.path);
  };

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
            onClick={() => handleClick(item)}
          >
            <Typography
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
