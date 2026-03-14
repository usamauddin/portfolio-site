import { Box, Card, CardContent, Typography } from "@mui/material";

export default function WhoAmI() {
  const expertise = [
    {
      title: "System Architecture",
      description:
        "Architecting scalable microservices and monolithic systems with separation of concerns, reliability, maintainability, modularity, scalability, and high availability.",
      icon: "🏗️",
    },
    {
      title: "Database Design",
      description:
        "Architecting and optimising SQL and NoSQL databases with advanced indexing and scalable data models that ensure reliability, scalability, and efficient data storage and retrieval.",
      icon: "🗄️",
    },
    {
      title: "API Development",
      description:
        "Developing RESTful APIs and GraphQL endpoints for seamless front-end communication, leveraging callbacks and promises for efficient asynchronous operations.",
      icon: "🔌",
    },
    {
      title: "Payment Integration",
      description:
        "Integrating secure payment gateways such as Stripe, PayPal to support subscription and one-time flows, while configuring webhooks for reliable real-time transaction processing.",
      icon: "💳",
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Implementing automated deployment pipelines, containerization, to ensure scalability, reliability, security, efficiency, and faster delivery.",
      icon: "⚙️",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#041C32",
        maxWidth: "1400px",
        width: "90%",
        // width: "100%",
        // maxWidth: { xs: "100%", sm: "90%", md: "85%", lg: "80%" },
        mx: "auto",
        mt: { xs: "40px", sm: "60px", md: "80px" },
        px: { xs: 2, sm: 3, md: 0 }, // side padding on small screens
        // overflow: ''
      }}
    >
      {/* Header + Bio */}
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "700",
            mb: 3,
            color: "white",
            fontFamily: "Raleway",
            textAlign: "center",
          }}
        >
          Who Am I
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", mb: 3, flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.3em" },
              lineHeight: 1.6,
              color: "hsl(215 20.2% 65.1%)",
              fontFamily: "nunito sans",
              fontWeight: "100",
              textAlign: "center",
            }}
          >
            Passionate backend developer with expertise in building
            high-performance, scalable server-side applications. Specialized in
            modern frameworks like
            <Typography
              component="span"
              sx={{
                color: "hsl(200 100% 60%)",
                fontFamily: "nunito sans",
                textAlign: "center",
              }}
            >
              {" "}NestJS{" "}
            </Typography>
            and experienced with both SQL and NoSQL databases. Strong background
            in system design, microservices architecture, and message queuing
            systems. Committed to writing clean, maintainable code and
            implementing best practices for enterprise-level applications.
            Currently focused on{" "}
            <Typography
              component="span"
              sx={{
                color: "hsl(280 100% 70%)",
                fontFamily: "nunito sans",
                textAlign: "center",
              }}
            >
              {" "}cloud-native{" "}
            </Typography>
            solutions and
            <Typography
              component="span"
              sx={{
                color: "hsl(150 70% 60%)",
                fontFamily: "nunito sans",
                textAlign: "center",
              }}
            >
              {" "}event-driven{" "}
            </Typography>
            architectures that can handle massive scale and provide exceptional
            user experiences.
          </Typography>
        </Box>
      </Box>

      {/* Expertise Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",           // 1 column on mobile
            sm: "1fr 1fr",       // 2 columns on small tablets
            md: "1fr 1fr 1fr",   // 3 columns on medium screens
            lg: "repeat(5, 1fr)",// 5 columns on large screens
          },
          gap: { xs: 2, md: 2 },
        }}
      >
        {expertise.map((item) => (
          <Card
            key={item.title}
            sx={{
              borderRadius: "8px",
              p: { xs: 1.5, md: 2 },
              boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
              backgroundColor: "#082A43",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                "& .icon": {
                  transform: "scale(1.1)",
                },
              },
            }}
          >
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Typography
                className="icon"
                sx={{
                  fontSize: { xs: "1.6rem", md: "2rem" },
                  mb: 1.5,
                  transition: "transform 0.3s ease",
                  fontFamily: "Raleway",
                }}
              >
                {item.icon}
              </Typography>
              <Typography
                variant="h6"
                className="title"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1em", md: "1.2em", lg: "1.3em" },
                  fontWeight: 600,
                  mb: 1,
                  color: "#00AEEF",
                  transition: "color 0.3s ease",
                  fontFamily: "Raleway",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem", lg: "1.1em" },
                  color: "hsl(215 20.2% 65.1%)",
                  lineHeight: 1.6,
                  fontFamily: "nunito sans",
                  fontWeight: 100,
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}