import projectInage from "@/projects/euvande.jpg";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { PORTFOLIO_PROPS } from "@/utils/types";
import { Box, Button, CardContent, Typography } from "@mui/material";
import Image from "next/image";
const PortfolioCard = ({
  img,
  projectName,
  description,
  url,
}: PORTFOLIO_PROPS) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          backgroundColor: COLORS.DARK_BG,
          boxShadow: "0px 0px 4px 4px #00000050",
        }}
      >
        <Image src={img} alt="" width={200} className="img-fluid" />
        <CardContent>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: roboto.style,
              color: COLORS.PRIMARY,
            }}
          >
            {projectName}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: roboto.style,
              color: COLORS.GREY_TEXT,
            }}
          >
            {description}
          </Typography>
          <Button
            sx={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.WHITE,
              mt: 2,
              borderRadius: 0,
              fontFamily: roboto.style,
            }}
            LinkComponent={"a"}
            href={url}
            target="__blank"
          >
            Visit
          </Button>
        </CardContent>
      </Box>
    </div>
  );
};

export default PortfolioCard;
