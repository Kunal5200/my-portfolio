import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Grid2, LinearProgress, Stack, Typography } from "@mui/material";

const SkillProgress = () => {
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
        HTML5
      </Typography>
      <Grid2 container alignItems={"center"}>
        <Grid2 size={1}>
          <Typography
            sx={{ color: COLORS.GREY_TEXT, fontFamily: roboto.style, mt: 1 }}
          >
            95%
          </Typography>
        </Grid2>
        <Grid2 size={11}>
          <LinearProgress value={95} variant="determinate" />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default SkillProgress;
