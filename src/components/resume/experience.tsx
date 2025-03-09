import { EXPERIENCE } from "@/assets/experience";
import { BusinessCenterOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import Heading from "../heading";
import ExperienceStepper from "./ExperinceStepper";
import ResumeHeading from "./ResumeHeading";

const Experience = () => {
  return (
    <div>
      <Heading label="Resume" />

      <ResumeHeading label="Work Experience" Icon={BusinessCenterOutlined} />
      <Box sx={{ mt: 2 }}>
        {EXPERIENCE.map((val, i) => (
          <ExperienceStepper
            duration={val.duration}
            heading={val.heading}
            name={val.name}
            description={val.description}
            key={i}
          />
        ))}
      </Box>
    
    </div>
  );
};

export default Experience;
