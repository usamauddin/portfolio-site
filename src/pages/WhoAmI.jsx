import { Box, Card, CardContent, Container, Typography } from "@mui/material";

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
        // marginTop: "80px",
        mt: 10,
        backgroundColor: "#041C32",
      }}
    >
      <Container maxWidth="lg" sx={{ px: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "700",
                mb: 3,
                color: "white",
                fontFamily: "Raleway",
                textAlign: "center",
              }}
            >
              Who Am I
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  color: "hsl(215 20.2% 65.1%)",
                  // fontFamily: "Livvic",
                  fontFamily: "nunito sans",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                Passionate backend developer with expertise in building
                high-performance, scalable server-side applications. Specialized
                in modern frameworks like
                <Typography
                  component="span"
                  sx={{
                    color: "hsl(200 100% 60%)",
                    // fontFamily: "Livvic",
                    fontFamily: "nunito sans",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  NestJS{" "}
                </Typography>
                and experienced with both SQL and NoSQL databases. Strong
                background in system design, microservices architecture, and
                message queuing systems. Committed to writing clean,
                maintainable code and implementing best practices for
                enterprise-level applications. Currently focused on{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "hsl(280 100% 70%)",
                    // fontFamily: "Livvic",
                    fontFamily: "nunito sans",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  cloud-native{" "}
                </Typography>
                solutions and
                <Typography
                  component="span"
                  sx={{
                    color: "hsl(150 70% 60%)",
                    // fontFamily: "Livvic",
                    fontFamily: "nunito sans",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  event-driven{" "}
                </Typography>
                architectures that can handle massive scale and provide
                exceptional user experiences.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            {expertise.map((item) => (
              <Card
                key={item.title}
                sx={{
                  borderRadius: "8px",
                  p: 2,
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
                      fontSize: "2rem",
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
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      mb: 1,
                      // color: 'white',
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
                      fontSize: "0.875rem",
                      color: "hsl(215 20.2% 65.1%)",
                      lineHeight: 1.6,
                      // fontFamily: "Livvic",
                      fontFamily: "nunito sans",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
