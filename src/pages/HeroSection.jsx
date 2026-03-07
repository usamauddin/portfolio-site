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
          maxWidth: "80%",
          display: "flex",
          // flexDirection: 'column',
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#041C32",
          padding: { xs: "40px 20px", md: "80px 100px" },
          // border: '1px solid white',
          flexWrap: "wrap",
          // margin: 0,
          // padding: 0,
        }}
      >
        {/* Left Content */}
        <Box sx={{ color: "#fff", maxWidth: "50%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: "28px", md: "50px", xl: "70px" },
              fontFamily: "Raleway",
            }}
          >
            Hey, I'm Usama Uddin
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#00AEEF",
              fontSize: { xs: "20px", md: "40px" },
              mb: 2,
              fontFamily: "Livvic",
            }}
          >
            Backend Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              color: "#A9B4C2",
              mb: 3,
              fontFamily: "nunito sans",
              //   fontFamily: "Livvic",
              fontWeight: 400,
              fontSize: "1.2em",
            }}
          >
            Architecting and optimizing high-performance backend systems that
            scale seamlessly. Proficient in modern server-side technologies,
            delivering secure, efficient, and future-ready solutions that power
            exceptional digital experiences.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": { boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF" },
                padding: 2,
              }}
              onClick={() =>
                window.open("https://github.com/usamauddin", "_blank")
              }
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": {
                  boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF",
                },
                padding: 2,
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/usama-uddin/",
                  "_blank",
                )
              }
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": { boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF" },
                padding: 2,
              }}
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=usamahafeez948@gmail.com",
                  "_blank",
                )
              }
            >
              <Email fontSize="large" />
            </IconButton>
          </Stack>
        </Box>

        {/* Right Profile Image */}
        <Box
          sx={{
            width: { xs: "220px", md: "400px" },
            height: { xs: "220px", md: "400px" },
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #00AEEF",
            mt: { xs: 4, md: 0 },
            boxShadow: "0 0 30px rgba(0,174,239,0.6)",
          }}
        >
          <img
            src="https://res.cloudinary.com/dqhylmpvk/image/upload/v1755020383/DSC02586_y2lp7j.jpg"
            alt="Usama Uddin"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
