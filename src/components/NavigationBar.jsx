import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavigationBar() {
  const [active, setActive] = useState("Begin");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Begin", path: "begin" },
    { label: "Portfolio", path: "portfolio" },
    { label: "What I Do", path: "what-i-do" },
    { label: "Who Am I", path: "who-am-i" },
    { label: "Let's Connect", path: "lets-connect" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.path,
        element: document.getElementById(item.path),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        const activeItem = menuItems.find(
          (item) => item.path === currentSection.id,
        );
        if (activeItem) setActive(activeItem.label);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item) => {
    setActive(item.label);
    setOpen(false);

    const element = document.getElementById(item.path);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.location.hash = `#/${item.path}`;
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#041C32",
          boxShadow: "none",
          px: { xs: 2, md: 5 },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "space-between", md: "center" },
          }}
        >
      

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
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
                    fontSize: { md: "16px", lg: "20px" },
                    color: "#fff",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  {item.label}
                </Typography>

                <Box
                  className="underline"
                  sx={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#00AEEF",
                    transform:
                      active === item.label ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#041C32",
            height: "100%",
            pt: 2,
            px: 2,
          }}
        >
          {/* Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              // mb: 2,
            }}
          >
            <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => handleClick(item)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: active === item.label ? "#00AEEF" : "white",
                      fontFamily: "Nunito Sans",
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
