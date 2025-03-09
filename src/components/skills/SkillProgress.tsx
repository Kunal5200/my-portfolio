import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { SKILL_PROGRESS } from "@/utils/types";
import { Grid2, LinearProgress, Stack, Typography } from "@mui/material";

const SkillProgress = ({ skill, value }: SKILL_PROGRESS) => {
  return (
    <div>
      <Typography
        sx={{
          color: COLORS.WHITE,
          fontSize: 20,
          letterSpacing: 1.2,
          fontFamily: roboto.style,
        }}
      >
        {skill}
      </Typography>
      <Grid2 container alignItems={"center"}>
        <Grid2 size={1}>
          <Typography
            sx={{ color: COLORS.GREY_TEXT, fontFamily: roboto.style, mt: 1 }}
          >
            {value}%
          </Typography>
        </Grid2>
        <Grid2 size={11}>
          <LinearProgress value={value} variant="determinate" />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default SkillProgress;
