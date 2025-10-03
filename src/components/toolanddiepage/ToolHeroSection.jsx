import { Box, Stack } from "@mui/material";
import AppImage from "../AppImage";
import ProductBg1 from "../../assets/productpage/ProductBg1.svg";

const ToolHeroSection = ({ title, desc }) => {
  return (
    <Box className="flex flex-col md:flex-row items-center gap-[20px] !overflow-hidden max-h-[400px]">
      <Stack className="flex-1 justify-end items-end md:mr-[30px] absolute right-[50px] px-[20px]">
        <Stack className="gap-[10px] md:gap-[20px] xl:w-[650px]">
          <h2 className="text-[24px] md:text-[30px] xl:text-[55px] font-semibold leading-[100%] text-[#1A1A1A] z-1 md:font-[600]">
            {title}
          </h2>
          <h4 className="text-[14px] font-[500] leading-[150%] text-[#1A1A1A] z-1 md:text-[16px] xl:text-[20px] xl:font-[500]">
            {desc}
          </h4>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ToolHeroSection;
