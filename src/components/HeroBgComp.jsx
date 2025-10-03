import { Box, Stack } from "@mui/material";
import AppImage from "./AppImage";
import AboutBg from "../../src/assets/AboutBg.svg";

const HeroBgComp = ({ title, desc, headerText }) => {
  return (
    <Box className="relative shrink-0 h-[300px] flex items-center justify-center">
      <AppImage
        src={AboutBg}
        className="absolute inset-0 w-full h-full z-0 object-cover"
      />
      <Box className="w-full flex flex-col md:flex-row px-[20px] md:px-[30px] justify-around items-stretch">
        <Box className="flex justify-stretch items-end">
          <h3 className="absolute bottom-[30px] left-[20px] md:left-[40px] text-[20px] md:text-[26px] xl:text-[30px] font-[500] text-[#1A1A1A]">
            {headerText}
          </h3>
        </Box>
        <Stack className="flex-1 gap-[12px] md:gap-[20px] z-10 max-w-[700px]">
          <h2 className="text-[22px] md:text-[32px] xl:text-[48px] font-bold leading-tight text-[#1A1A1A]">
            {title}
          </h2>
          <p className="text-[14px] md:text-[16px] xl:text-[20px] font-normal leading-[150%] text-[#1A1A1A]">
            {desc}
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroBgComp;
