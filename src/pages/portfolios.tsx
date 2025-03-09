import { PROJECTS } from "@/assets/project";
import Heading from "@/components/heading";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { Box, Grid2 } from "@mui/material";

const Portfolios = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.DARK_BG, minHeight: "100vh" }}>
      <Wrapper>
        <Box sx={{ mt: 4, p: 2 }}>
          <Heading label="Portfolios" />
        </Box>
        <Box sx={{ px: 2, mt: 2 }}>
          <Grid2 container>
            {PROJECTS.map((val, i) => (
              <Grid2 size={4} key={i}>
                <PortfolioCard
                  img={val.img}
                  projectName={val.projectName}
                  description={val.description}
                  url={val.url}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Portfolios;
