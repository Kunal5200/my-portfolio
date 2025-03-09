import Heading from "@/components/heading";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";

const Portfolios = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.DARK_BG, minHeight: "100vh" }}>
      <Wrapper>
        <Box sx={{ mt: 4, p: 2 }}>
          <Heading label="Portfolios" />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Portfolios;
