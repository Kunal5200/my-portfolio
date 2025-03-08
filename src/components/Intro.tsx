import { data } from "@/assets/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const Intro = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
        >
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: roboto.style,
              color: COLORS.WHITE,
              textAlign: "center",
            }}
          >
            Hi, I am{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: roboto.style,
              color: COLORS.PRIMARY,
              fontWeight: 550,
              textAlign: "center",
            }}
          >
            Kunal Sharma
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: COLORS.GREY_TEXT,
            textAlign: "center",
            fontFamily: roboto.style,
            mt: 2,
            width: "80%",
            margin: "auto",
            fontSize: 20,
          }}
        >
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"center"}
          >
            {data.socialIcons.map((val, i) => (
              <IconButton
                sx={{
                  color: COLORS.WHITE,
                  border: `1px solid ${COLORS.WHITE}`,
                  fontSize: 20,
                  "& svg": {
                    fontSize: 20,
                  },
                  ":hover": {
                    backgroundColor: COLORS.PRIMARY,
                    border: `1px solid ${COLORS.PRIMARY}`,
                  },
                }}
              >
                <val.icon />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
