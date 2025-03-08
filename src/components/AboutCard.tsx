import profile from "@/profile.jpg";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Box,
  Button,
  Divider,
  Grid2,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
const AboutComponent = () => {
  const handleDownload = async () => {
    const response = await fetch("/Kunal-resume.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Kunal-Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };
  return (
    <div>
      <Box sx={{ mt: 4, p: 2 }}>
        <Typography
          sx={{
            fontSize: 30,
            color: COLORS.WHITE,
            fontFamily: roboto.style,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          About Me
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
        <Grid2 container sx={{ mt: 4 }} spacing={6}>
          <Grid2 size={5} textAlign={"center"}>
            <Image
              src={profile}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "8px" }}
            />
          </Grid2>
          <Grid2 size={7}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                sx={{
                  fontSize: 30,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                }}
              >
                I am{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: 30,
                  fontFamily: roboto.style,
                  color: COLORS.PRIMARY,
                }}
              >
                Kunal Sharma
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: roboto.style,
                color: COLORS.GREY_TEXT,
                mt: 2,
              }}
            >
              I am a highly skilled Next.js and React.js developer with 3 years
              of experience, specializing in front-end and full-stack web
              development. With expertise in HTML, CSS, JavaScript, Material UI,
              Tailwind CSS, Redux Toolkit, and API integration, I create
              high-performance, user-friendly, and scalable applications.
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: roboto.style,
                color: COLORS.GREY_TEXT,
                mt: 2,
              }}
            >
              I have experience working with AWS Code Deploy, MSSQL databases,
              and modern JavaScript frameworks, making me proficient in building
              dynamic web applications and optimizing performance.
            </Typography>
            <Button
              sx={{
                fontSize: 15,
                mt: 2,
                fontFamily: roboto.style,
                color: COLORS.WHITE,
                backgroundColor: COLORS.PRIMARY,
                fontWeight: 400,
                borderRadius: 0,
                width: 150,
              }}
              onClick={handleDownload}
            >
              Download Cv
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default AboutComponent;
