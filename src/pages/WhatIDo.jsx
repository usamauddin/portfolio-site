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
      url: "https://img.icons8.com/color/48/prisma-orm.png",
      label: "Prisma ORM",
    },
    {
      url: "https://img.icons8.com/fluency/50/paypal.png",
      label: "PayPal",
    },
    {
      url: "https://img.icons8.com/color/48/amazon-web-services.png",
      label: "AWS",
    },
    {
      url: "https://cdn-ejdof.nitrocdn.com/KAWXnbTgyTtrLyynvzyJINvTLQEBJgEd/assets/images/optimized/rev-32bedbf/tezeract.ai/wp-content/uploads/2025/03/CICD.png",
      label: "CI CD Pipeline",
    },
    {
      url: "https://craft.postmark-testing.com/images/logo-stamp-social.png",
      label: "Postmark",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755021695/sockets_edgkso.svg",
      label: "Web Sockets",
    },
    // {
    //   url: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
    //   label: "Postman",
    // },
    {
      url: "https://img.icons8.com/color/48/onesignal.png",
      label: "One Signal",
    },
    {
      url: "https://blog.nodemailer.com/wp-content/uploads/2017/01/cropped-nm_logo_1000x680.png",
      label: "Nodemailer",
    },
    {
      url: "https://img.icons8.com/fluency/48/supabase.png",
      label: "Supabase",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#041C32",
        maxWidth: "1400px",
        width: "90%",
        mx: "auto",
        mt: { xs: 4, md: 8 },
        // border: '1px solid white'
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", sm: "40px", md: "48px" },
          fontWeight: 700,
          color: "white",
          fontFamily: "Raleway",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        What I Do
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: { xs: 2, sm: 3, md: 4 },
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
              borderRadius: "10px",
              padding: { xs: 2, sm: 3 },
              transition: "all 0.3s ease",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
              cursor: "pointer",

              "&:hover": {
                transform: "translateY(-6px) scale(1.05)",
                boxShadow: "0px 10px 30px rgba(0, 175, 239, 0)",
              },
            }}
          >
            <img
              src={item.url}
              alt={item.label}
              loading="lazy"
              style={{
                width: "clamp(35px, 5vw, 55px)",
                height: "clamp(35px, 5vw, 55px)",
                objectFit: "contain",
              }}
              />

            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                fontFamily: "Nunito Sans",
                color: "#A9B4C2",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
