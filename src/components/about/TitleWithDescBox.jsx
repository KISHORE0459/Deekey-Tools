import { Box, Stack } from "@mui/material";
import DescriptionCard from "../toolanddiepage/DescriptionCard";
import AnimationWrapper from "../AppComponents/AppAnimation";

const TitleWithDescBox = () => {
  return (
    <Stack
      className="relative bg-gradient-to-b from-[#f0f6f8] via-[#E2ECF0] to-white gap-[30px] py-[20px] md:px-[40px] !pt-[50px]"
      sx={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, #f4f8fa 10%, #f4f8fa 90%, transparent)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { base: "10px", md: "30px", xl: "45px" },
        }}
      >
        <AnimationWrapper animation="slide" direction="up">
          <DescriptionCard
            title={"Vision"}
            titleClassName="font-[600]"
            description={
              "In high-speed  production, there’s  no room for compromise. Deekey’s  press   components  are   purpose-built   to  endure  intense  pressure,  rapid   cycles,  and  precise  operations, without   missing   a    beat.  Whether  it’s  blanking,  forming, bending, or drawing, our components integrate effortlessly into your press tools and production lines. "
            }
            className={`!bg-white text-justify md:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[650px]`}
          />
        </AnimationWrapper>
        <AnimationWrapper animation="slide" direction="up">
          <DescriptionCard
            title={"Mission"}
            titleClassName="font-[600]"
            description={
              "Our press components are crafted to meet the toughest industrial  demands, offering seamless assembly, reduced wear, and superior  output. Whether it’s for high-speed production or precision forming, these  components work together to transform raw materials into precision engineered products, shift after shift."
            }
            className={`!bg-white text-justify md:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[650px]`}
          />
        </AnimationWrapper>
      </Box>
    </Stack>
  );
};
export default TitleWithDescBox;
