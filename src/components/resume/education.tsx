import React from "react";
import ResumeHeading from "./ResumeHeading";
import { EventNoteOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ExperienceStepper from "./ExperinceStepper";
import { EDUCATION } from "@/assets/education";

const Education = () => {
  return (
    <div>
      <ResumeHeading label="Education" Icon={EventNoteOutlined} />
      <Box sx={{ mt: 3 }}>
        {EDUCATION.map((val, i) => (
          <ExperienceStepper
            duration={val.duration}
            name={val.name}
            description={val.description}
            heading={val.heading}
            key={i}
          />
        ))}
      </Box>
    </div>
  );
};

export default Education;
