import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import NavgivationBar from "../components/NavigationBar";

export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "1400px",
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#041C32",
          padding: { xs: "40px 20px", sm: "60px 40px", md: "80px 60px" },
          gap: { xs: 6, md: 4 },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            color: "#fff",
            width: { xs: "100%", md: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: "30px", sm: "36px", md: "48px", xl: "64px" },
              fontFamily: "Raleway",
              lineHeight: 1.2,
            }}
          >
            Hey, I'm Usama Uddin
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#00AEEF",
              fontSize: { xs: "20px", sm: "26px", md: "34px" },
              mb: 2,
              fontFamily: "Livvic",
            }}
          >
            Backend Engineer
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.7,
              color: "#A9B4C2",
              mb: 4,
              fontFamily: "Nunito Sans",
              // fontWeight: 200,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.3em" },
              // fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem", lg: "1.1em" },
              // fontSize: { xs: "15px", sm: "16px", md: "18px" },
              maxWidth: { xs: "100%", md: "90%" },
              marginX: { xs: "auto", md: 0 },
            }}
          >
            Architecting and optimizing high-performance backend systems that
            scale seamlessly. Proficient in modern server-side technologies,
            delivering secure, efficient, and future-ready solutions that power
            exceptional digital experiences.
          </Typography>

          {/* Social Icons */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": {
                  boxShadow: "0 0 8px #00AEEF, 0 0 20px #00AEEF",
                },
                padding: { xs: 1.2, md: 1.5 },
              }}
              onClick={() =>
                window.open("https://github.com/usamauddin", "_blank")
              }
            >
              <GitHub sx={{ fontSize: { xs: 24, md: 30 } }} />
            </IconButton>

            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": {
                  boxShadow: "0 0 8px #00AEEF, 0 0 20px #00AEEF",
                },
                padding: { xs: 1.2, md: 1.5 },
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/usama-uddin/",
                  "_blank"
                )
              }
            >
              <LinkedIn sx={{ fontSize: { xs: 24, md: 30 } }} />
            </IconButton>

            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": {
                  boxShadow: "0 0 8px #00AEEF, 0 0 20px #00AEEF",
                },
                padding: { xs: 1.2, md: 1.5 },
              }}
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=usamahafeez948@gmail.com",
                  "_blank"
                )
              }
            >
              <Email sx={{ fontSize: { xs: 24, md: 30 } }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Right Profile Image */}
        <Box
          sx={{
            width: { xs: 200, sm: 260, md: 340, lg: 400 },
            height: { xs: 200, sm: 260, md: 340, lg: 400 },
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #00AEEF",
            boxShadow: "0 0 30px rgba(0,174,239,0.6)",
            flexShrink: 0,
          }}
        >
          <img
            src="https://res.cloudinary.com/dqhylmpvk/image/upload/v1755020383/DSC02586_y2lp7j.jpg"
            alt="Usama Uddin"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </>
  );
} 