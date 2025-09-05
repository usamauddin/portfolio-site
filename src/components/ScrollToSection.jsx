import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is the root path ("/")
    if (location.pathname === "/") {
      const section = document.getElementById("home");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } 
    // For all other paths, find the corresponding section
    else {
      const sectionId = location.pathname.replace("/", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}