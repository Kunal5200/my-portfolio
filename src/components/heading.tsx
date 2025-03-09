import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { HEADING_PROPS } from "@/utils/types";
import { Divider, Typography } from "@mui/material";
import React from "react";

const Heading = ({ label }: HEADING_PROPS) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 30,
          color: COLORS.WHITE,
          fontFamily: roboto.style,
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: 2,
        }}
      >
        {label}
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
    </div>
  );
};

export default Heading;
