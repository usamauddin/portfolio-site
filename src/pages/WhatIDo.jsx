
import { Box, Typography } from "@mui/material";
import React from "react";

export default function WhatIDo() {
  const images = [
    {
      url: "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000",
      label: "Nest JS",
    },
    {
      url: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
      label: "JavaScript",
    },
    {
      url: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
      label: "Express JS",
    },
    {
      url: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      label: "PostgreSQL",
    },
    {
      url: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      label: "MongoDB",
    },
    {
      url: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      label: "TypeScript",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1754993983/Node.js_tqfsia.svg",
      label: "Node JS ",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755020302/kafka_d1reat.svg",
      label: "Kafka",
    },
    {
      url: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
      label: "Docker",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1754994614/RabbitMQ_kw72wa.svg",
      label: "RabbitMQ",
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/6146/6146577.png",
      label: "Microservices",
    },
    {
      url: "https://img.icons8.com/?size=100&id=vArWbbq0EbTM&format=png&color=000000",
      label: "Stripe",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1754994766/Swagger_bxponq.svg",
      label: "Swagger",
    },
    {
      url: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
      label: "Redis",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755021353/dg_ubswlr.svg",
      label: "Digital Ocean",
    },
    {
      url: "https://cdn-ejdof.nitrocdn.com/KAWXnbTgyTtrLyynvzyJINvTLQEBJgEd/assets/images/optimized/rev-32bedbf/tezeract.ai/wp-content/uploads/2025/03/CICD.png",
      label: "CI CD Pipeline",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755021695/sockets_edgkso.svg",
      label: "Web Sockets",
    },
    {
      url: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
      label: "Postman",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        backgroundColor: "#041C32",
        // border: '1px solid white',
        margin: 'auto',
        // px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "700",
          color: "white",
          fontFamily: "Raleway",
          textAlign: "center",
          py: { xs: 2, md: 3 }
        }}
      >
        What I Do
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 80px)",      // 2 columns on extra small screens
            sm: "repeat(3, 80px)",      // 3 columns on small screens
            md: "repeat(4, 80px)",      // 4 columns on medium screens
            lg: "repeat(9, 80px)",      // 6 columns on large screens
            xl: "repeat(9, 80px)"       // 9 columns on extra large screens
          },
          gap: "20px 50px",
          justifyContent: "center",
          padding: { xs: "20px", sm: "25px", md: "30px" },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          backgroundColor: "#041C32",
          // border: '1px solid white',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {images.map((item) => (
          <Box
            key={item.url}
            sx={{
              backgroundColor: "#082A43",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "40px 60px", // Keep original padding
              // width: "80px",        // Keep original width
              // height: "auto",       // Keep original height behavior
              transition: "transform 0.3s ease",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                "& .label": { color: "red" },
              },
            }}
          >
            <img
              src={item.url}
              alt=""
              loading="lazy"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              className="label"
              style={{
                fontSize: "0.8em",
                fontFamily: "nunito sans",
                fontWeight: 400,
                position: "absolute",
                bottom: 7,
                color: "#A9B4C2",
              }}
              sx={{ mt: 1, fontWeight: 500, textAlign: "center" }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}