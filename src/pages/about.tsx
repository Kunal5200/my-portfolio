import AboutComponent from "@/components/AboutCard";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.DARK_BG, minHeight: "100vh" }}>
      <Wrapper>
        <AboutComponent />
      </Wrapper>
    </Box>
  );
};

export default About;
