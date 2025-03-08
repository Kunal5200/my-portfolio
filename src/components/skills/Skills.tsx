import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import SkillProgress from "./SkillProgress";

const Skills = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 30,
          color: COLORS.WHITE,
          fontFamily: roboto.style,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        My Skills
      </Typography>
      <Divider
        sx={{
          borderColor: COLORS.PRIMARY,
          width: 100,
          mt: 1,
          borderWidth: 2,
          borderRadius: 2,
        }}
      />
      <Grid2 container sx={{ mt: 4}}>
        <Grid2 size={6}>
          <SkillProgress />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Skills;
