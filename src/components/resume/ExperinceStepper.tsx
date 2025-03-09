import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { EXPERIENCE_PROPS } from "@/utils/types";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExperienceStepper = ({
  duration,
  heading,
  name,
  description,
}: EXPERIENCE_PROPS) => {
  return (
    <div>
      <Timeline
        sx={{
          "& .MuiTimelineItem-root::before": {
            flex: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack direction={"row"} alignItems={"flex-start"} spacing={5}>
              <Typography
                sx={{
                  fontFamily: roboto.style,
                  fontSize: 18,
                  color: COLORS.WHITE,
                  width: 400,
                }}
              >
                {duration}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: 25,
                    fontFamily: roboto.style,
                    color: COLORS.PRIMARY,
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                    color: COLORS.GREY_TEXT,
                    fontFamily: roboto.style,
                    mt: 1,
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                    color: COLORS.GREY_TEXT,
                    fontFamily: roboto.style,
                    mt: 2,
                  }}
                >
                  {/* Experienced in developing responsive web applications using
                  React, Bootstrap, and CSS3. Skilled in integrating APIs,
                  managing MySQL and PostgreSQL databases, and troubleshooting
                  issues. Proficient in UI design, version control with GitHub,
                  and project management with JIRA. */}
                  {description}
                </Typography>
              </Box>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ExperienceStepper;
