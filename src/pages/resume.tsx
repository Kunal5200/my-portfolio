import Education from "@/components/resume/education";
import Experience from "@/components/resume/experience";
import Skills from "@/components/skills/Skills";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";

const Resume = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.DARK_BG, p: 2, minHeight: "100vh" }}>
      <Wrapper>
        <Skills />
        <Box sx={{ mt: 5 }}>
          <Experience />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Education />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Resume;
