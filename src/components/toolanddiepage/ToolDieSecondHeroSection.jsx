import { Box, Stack } from "@mui/material";
import AppParagraph from "../AppParagraphComp";
import AppImage from "../AppImage";
import Image1 from "../../assets/ToolDieLabourImage.png";
import Image2 from "../../assets/ToolDieOwnerImage.png";

const ToolDieSecondHeroSection = () => {
  return (
    <Stack gap={"80px"}>
      <Stack gap={"20px"} className="px-[20px] justify-center items-center">
        <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#1A1A1A] font-[500] leading-[30px] text-center">
          Trusted Makers of High-Performance Dies
        </h2>
        <AppParagraph
          text={
            "We drive innovation in the automotive sector, delivering precision engineered components and solutions that enhance performance, safety, and sustainability. From cutting-edge designs to sustainability  We drive innovation in the automotive sector, delivering precision engineered "
          }
          customClassName="md:max-w-[80%] text-justify"
        />
      </Stack>
      <Box className="flex gap-[48px] flex-wrap justify-center items-center">
        <AppImage
          src={Image1}
          alt="Labour Image"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[500px] object-cover rounded-[30px] shadow-xs"
        />
        <AppImage
          src={Image2}
          alt="Owner Image"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[500px] object-cover rounded-[30px] shadow-xs"
        />
      </Box>
    </Stack>
  );
};

export default ToolDieSecondHeroSection;
