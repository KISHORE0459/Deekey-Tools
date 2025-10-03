import { Box, Stack } from "@mui/material";
import AppTitleWithSubTitle from "../AppTitleWithSubTitle";
import DescriptionCard from "./DescriptionCard";
import AnimationWrapper from "../AppComponents/AppAnimation";

const PressCompDescriptionCards = () => {
  return (
    <Stack className="bg-gradient-to-b from-white via-[#e5f1f6] to-white gap-[30px] py-[20px] px-[20px] md:px-[40px]">
      <AppTitleWithSubTitle
        title={"Press Components – Force Meets Finesse"}
        subTitle={"Mastered with skill, perfected in every part"}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { base: "10px", md: "30px", xl: "45px" },
        }}
      >
        <AnimationWrapper animation="slide" direction="up">
          <DescriptionCard
            description={
              "In high-speed  production, there’s  no room for compromise. Deekey’s  press   components  are   purpose-built   to  endure  intense  pressure,  rapid   cycles,  and  precise  operations, without   missing   a    beat.  Whether  it’s  blanking,  forming, bending, or drawing, our components integrate effortlessly into your press tools and production lines. "
            }
            className={`bg-white text-justify`}
          />
        </AnimationWrapper>
        <AnimationWrapper animation="slide" direction="up">
          <DescriptionCard
            description={
              "Our press components are crafted to meet the toughest industrial  demands, offering seamless assembly, reduced wear, and superior  output. Whether it’s for high-speed production or precision forming, these  components work together to transform raw materials into precision engineered products, shift after shift."
            }
            className={`bg-white text-justify`}
          />
        </AnimationWrapper>
      </Box>
    </Stack>
  );
};

export default PressCompDescriptionCards;
