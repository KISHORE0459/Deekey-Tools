import { Box, Stack } from "@mui/material";
import AppParagraph from "../AppParagraphComp";
import AppImage from "../AppImage";
import DeekyToolsImage from "../../../src/assets/DeekyToolsBlackImage.svg";

const OurJourneyComp = () => {
  const journeyDesc = [
    "Deekey Tools started with nothing, no factories, no machines, no capital , but only belief, determination, and the will to create something meaningful. What we lacked in resources, we made up for in grit, discipline, and an obsession with precision. Step by step, we built our path, shaping not just tools, but a reputation grounded in trust and quality.",
    "Every obstacle became a test of resilience, every project an opportunity to prove that consistency outlasts shortcuts. Over the years, our spirit has remained the same, to go beyond making products and instead engineer possibilities. What once began as a humble spark has grown into a steady flame that continues to drive us forward.",
    "Today, Deekey Tools stands as proof that true growth is not sudden, but earned, forged in patience, sharpened by innovation, and strengthened by the people who believe in our vision. Yet, our journey is still in motion, moving with the same determination that started it all, carrying us towards a future built on precision, progress, and purpose",
  ];
  return (
    <Stack className="gap-[20px] md:gap-[60px] px-[20px] md:px-[40px] mt-[60px]">
      <h2 className="text-center text-[20px] md:text-[26px] xl:text-[36px] font-[600] text-[#A20F05] mb-4">
        Our Journey
      </h2>
      <Box className="flex flex-col md:flex-row justify-around gap-[50px] md:gap-[100px] flex-wrap">
        <Stack className="gap-[20px] max-w-[670px]">
          {journeyDesc?.map((val, index) => (
            <AppParagraph
              text={val}
              key={index}
              customClassName="text-[14px] md:text-[16px] leading-[150%] text-justify"
            />
          ))}
        </Stack>
        <Stack className="justify-center items-center gap-[20px]">
          <Box className="rounded-[44px] w-[300px] h-[300px] md:w-[470px] md:h-[420px]">
            <AppImage
              src={DeekyToolsImage}
              className="w-full h-full object-cover"
            />
          </Box>
          <h3 className="text-[18px] md:text-[18px] font-[400] leading-[150%] text-[#1A1A1A]">
            Image represents Deekey Tools from 2004
          </h3>
        </Stack>
      </Box>
    </Stack>
  );
};

export default OurJourneyComp;
