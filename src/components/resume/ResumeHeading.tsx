import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { RESUME_HEADING_PROPS } from "@/utils/types";
import { Stack, Typography } from "@mui/material";

const ResumeHeading = ({ Icon, label }: RESUME_HEADING_PROPS) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={2} mt={3}>
        <Icon sx={{ color: COLORS.GREY_TEXT, fontSize: 35 }} />
        <Typography
          sx={{
            fontSize: 25,
            fontFamily: roboto.style,
            color: COLORS.GREY_TEXT,
          }}
        >
          {label}
        </Typography>
      </Stack>
    </div>
  );
};

export default ResumeHeading;
