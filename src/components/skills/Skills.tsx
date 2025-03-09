import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import SkillProgress from "./SkillProgress";
import { SKills } from "@/assets/skills";
import Heading from "../heading";

const Skills = () => {
  return (
    <div>
      <Heading label="My Skills" />
      <Grid2 container sx={{ mt: 4 }} spacing={6}>
        {SKills.map((val, i) => (
          <Grid2 size={6} key={i}>
            <SkillProgress value={val.value} skill={val.skill} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Skills;
