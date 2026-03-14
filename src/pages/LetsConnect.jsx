import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box
      sx={{
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#041C32",
        mt: { xs: 6, md: 10 },
        px: { xs: 3, md: 4 },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "36px", md: "46px" },
          fontWeight: 700,
          mb: 2,
          color: "white",
          fontFamily: "Raleway",
          textAlign: "center",
        }}
      >
        Let's Build Something Together
      </Typography>

      {/* Description */}
      <Typography
        sx={{
           fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.3em" },
          // fontSize: { xs: "14px", sm: "15px", md: "17px" },
          color: "hsl(215 20.2% 65.1%)",
          fontFamily: "Nunito Sans",
          textAlign: "center",
          maxWidth: "700px",
          lineHeight: 1.7,
          mb: { xs: 4, md: 5 },
          fontWeight: 400
        }}
      >
        Let’s discuss how I can simplify your backend challenges with clean,
        efficient, and future-proof solutions.
      </Typography>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        mb={{ xs: 6, md: 8 }}
      >
        <IconButton
          sx={{
            border: "2px solid #00AEEF",
            color: "#00AEEF",
            padding: { xs: 1.2, md: 1.6 },
            "&:hover": {
              boxShadow: "0 0 8px #00AEEF, 0 0 20px #00AEEF",
            },
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
            padding: { xs: 1.2, md: 1.6 },
            "&:hover": {
              boxShadow: "0 0 8px #00AEEF, 0 0 20px #00AEEF",
            },
          }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/usama-uddin/", "_blank")
          }
        >
          <LinkedIn sx={{ fontSize: { xs: 24, md: 30 } }} />
        </IconButton>

        <IconButton
          sx={{
            border: "2px solid #00AEEF",
            color: "#00AEEF",
            padding: { xs: 1.2, md: 1.6 },
            "&:hover": {
              boxShadow: "0 0 8px #00AEEF, 0 0 20px #00AEEF",
            },
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
  );
}