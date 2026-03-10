import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { OpenInNewIcon  } from "@mui/icons-material";

export default function Portfolio() {
  const projects = [
    {
      name: "Adeeb Online",
      title: "Urdu Digital Library App",
      description:
        "Adeeb Online is a subscription-based digital library that provides access to a large collection of Urdu books, novels, and poetry for readers worldwide. The platform offers both free and premium content, with premium users enjoying ad-free reading and offline downloads. It supports features like bookmarks, personal libraries, and cross-device synchronization. The app also supports authors by sharing revenue and publishing content with proper copyright permissions.",
      image:
        "https://res.cloudinary.com/dqhylmpvk/image/upload/v1773160052/Untitled_1_sugrei.png",
      url: "https://www.web.adeebonline.com/home",
      maxWidth: 700,
    },
    {
      name: "Tshabok AI",
      title: "AI Powered Software Testing",
      description:
        "Tshabok.ai is an AI-powered platform that automatically generates software test cases from requirement documents or a provided website URL. It analyzes user flows and system behavior to create structured test scenarios, including edge cases. The tool helps QA teams and developers significantly reduce the time spent writing manual test cases. By automating test design, it improves testing coverage and accelerates the overall software development and release cycle.",
      image:
        "https://res.cloudinary.com/dqhylmpvk/image/upload/v1772957028/Untitled_lwfi2r.png",
      url: "https://web.tshabok.ai/",
      maxWidth: 500,
    },
    {
      name: "FN-AD Sales CRM",
      title: "AI-powered sales CRM for fashion",
      description:
        "FN-AD is a leading enterprise branding agency that helps fashion brands connect with wholesalers and expand into global markets. Our AI-powered CRM is purpose-built for, automating lead generation, profiling, and assignment. Operating 24/7, it continuously captures new leads, creates detailed brand profiles, and intelligently matches them with the right sales team members through a smart lead assignment algorithm. With an integrated sales pipeline management system, FN-AD CRM streamlines workflows, enhances efficiency, and drives higher conversion rates.",
      image:
        "https://cdn-ejdof.nitrocdn.com/KAWXnbTgyTtrLyynvzyJINvTLQEBJgEd/assets/images/optimized/rev-32bedbf/tezeract.ai/wp-content/uploads/2025/06/FN-AD-Sales-CRM-Main-Portfolio.png",
      url: "https://fnadmatch.com/",
      maxWidth: 500,
    },
    {
      name: "GetGeek",
      title: "The AI-Powered Talent Acquisition Software",
      description:
        "Getgeek automates the most time-consuming parts of recruitment. From posting job ads across platforms to screening hundreds of resumes and conducting initial interviews, our AI ensures that only the top-qualified candidates land in your inbox. On average, recruiters save over 10+ hours per position time you can now spend on strategic decision-making instead of tedious tasks.",
      image:
        "https://ramiz-qazi-portfolio-v2.netlify.app/static/media/getgeek.b4c42b6d70a31dcfd1cd.png",
      url: "https://app.getgeek.ai",
      maxWidth: 500,
    },
    {
      name: "FN-AD BP",
      title: "Project Management Tool",
      description:
        "FN-AD BP is a powerful project management solution tailored for the fashion industry, designed to streamline post-sales operations with precision and efficiency. It automates brand-to-member assignments, tracks complete project lifecycles, and provides intuitive visual dashboards enriched with smart alerts and data-driven insights. Built for scalability, FN-AD BP supports growing teams and complex workflows, ensuring seamless collaboration across departments. By enhancing transparency, improving decision-making, and boosting overall productivity, it empowers fashion businesses to manage operations effectively and achieve long-term success.",
      image:
        "https://cdn-ejdof.nitrocdn.com/KAWXnbTgyTtrLyynvzyJINvTLQEBJgEd/assets/images/optimized/rev-32bedbf/tezeract.ai/wp-content/uploads/2025/07/FN-AD-BP-Main-Portfolio-1.png",
      url: "https://bp.fnadmatch.com/",
      maxWidth: 500,
    },
    {
      name: "Picture Perfect",
      title: "AI-powered Photo Editing Tool",
      description:
        "Group photos, especially with kids, are notoriously hard to perfect someone always looks away or refuses to smile. Picture Perfect solves this challenge using AI-powered capture. Instead of a single shot, every photo becomes a 5-second capture analyzing 150 micro-moments. The app then offers the best facial expressions for each person, letting you instantly “swap” faces so everyone looks their best. Importantly, these are not AI-generated fakes but real expressions captured during that moment. Once satisfied, you can download the polished photo directly to your library. It also works for selfies, making sure you always get your best shot. However, it’s designed for people, not pets, objects, or landscapes ensuring the focus remains on creating flawless human-centered photos.",
      image:
        "https://cdn-ejdof.nitrocdn.com/KAWXnbTgyTtrLyynvzyJINvTLQEBJgEd/assets/images/optimized/rev-32bedbf/tezeract.ai/wp-content/uploads/2024/10/Pictureperfect-process-image.png",
      url: "https://play.google.com/store/apps/details?id=com.picper&hl=en",
      maxWidth: 500,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#041C32",
        maxWidth: "80%",
        mx: "auto", // center horizontally
        mt: "80px", // margin-top
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "700",
          color: "white",
          // fontFamily: "nunito sans",
          fontFamily: "Raleway",
          textAlign: "center",
          mb: 3,
        }}
      >
        Portfolio
      </Typography>
      {projects.map((project, index) => (
        <Box
          key={project.name}
          sx={{
            // maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse", // alternate layout
            },
            // alignItems: "center",
            gap: 4,
            mt: index === 0 ? 7 : 12,
          }}
        >
          {/* Content */}
          <Box
            sx={{
              flex: "1",
              color: "#fff",
              //   px: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-between",
                gap: 1,
                mb: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontFamily: "nunito sans",
                  color: "#00AEEF",
                  // fontSize:
                }}
              >
                {project.name?.toUpperCase()}
              </Typography>
              <OpenInNewIcon
                sx={{
                  color: "#00AEEF",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  ml: 2,
                }}
                onClick={() => window.open(project.url, "_blank")}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "rgba(255,255,255,0.9)",
                fontFamily: "Raleway",
                // color: "#00AEEF",
                fontWeight: "600",
                // fontWeight: 400,
                fontSize: "1.3em",
              }}
            >
              {project.title?.toUpperCase()}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // fontSize: "1.1em",
                color: "rgba(255,255,255,0.87)",
                lineHeight: 1.6,
                fontFamily: "nunito sans",
                color: "#A9B4C2",
                fontWeight: 100,
                fontSize: "1.2em",
              }}
            >
              {project.description}
            </Typography>
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   px: { xs: 2, md: 4 },
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.name}
              sx={{
                // backgroundColor: "#082A43",
                width: "100%",
                maxWidth: project.maxWidth,
                objectFit: "contain",
                borderRadius: "8px",
                // boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
                // p: 3,
                // position: index === 0 && 'absolute',

                cursor: "pointer",
                maxHeight:
                  project?.name?.toLowerCase() === "picture perfect"
                    ? "400px"
                    : "auto",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
