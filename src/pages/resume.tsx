import Skills from "@/components/skills/Skills";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import React from "react";

const Resume = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.DARK_BG, p: 2, minHeight: "100vh" }}>
      <Wrapper>
        <Skills />
      </Wrapper>
    </Box>
  );
};

export default Resume;
