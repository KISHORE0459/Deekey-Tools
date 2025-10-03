import { Box, Stack } from "@mui/material";
import AppImage from "../AppImage";
import YearsLogo from "../../../src/assets/21YearsLogo.png";
import AppButton from "../AppButton";
import { useNavigate } from "react-router";
import { ABOUT_PAGE_ROUTE } from "../../routes/url";
import AnimationWrapper from "../AppComponents/AppAnimation";

const SecondHeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box className="px-[20px] xl:px-[80px] grid grid-cols-1 xl:grid-cols-2 gap-[20px] items-center max-w-[98vw]">
      <AnimationWrapper animation="fade" direction="left">
        <Stack className="justify-center items-center">
          <h2 className="text-[25px] md:text-[40px] xl:text-[60px] text-[#1A1A1A] font-bold leading-[150%]">
            Our Journey
          </h2>
          <AppImage
            src={YearsLogo}
            alt="21 Years Logo"
            className="max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px] xl:max-w-[620px] xl:max-h-[620px]"
          />
        </Stack>
      </AnimationWrapper>
      <Box className="flex flex-col justify-center items-center gap-[30px] md:gap-[50px]">
        <Stack className="gap-[20px] xl:w-[580px] md:mt-[50px] text-justify text-[1A1A1A] font-[500] text-[12px] md:text-[17px] leading-[150%]">
          <p>
            Twenty-one years ago, Deekey Tools began with nothing but grit,
            vision, and an obsession for detail. From those humble beginnings,
            we have grown into a versatile force in precision engineering. Every
            step of our journey has been shaped by care for the smallest things,
            because we believe greatness is built on the fine lines others often
            overlook
          </p>
          <p>
            {" "}
            What started as spark of ideas and steady hands has become a trusted
            name across industries, where innovation meets craftsmanship. We
            transform steel into solutions, ideas into impact, and challenges
            into opportunities.
          </p>
          <p>
            {" "}
            Today, Deekey Tools stands as a story of persistence and progress,
            blending two decades of expertise with a restless drive for
            innovation. With every die, fixture, and component, we don’t just
            deliver tools; we deliver trust, durability, and the future of
            engineering, one detail at a time.
          </p>
        </Stack>
        <Box className="flex justify-end items-end xl:w-[580px]">
          <AppButton
            BtnVariant="redContained"
            BtnOnClick={() => navigate(ABOUT_PAGE_ROUTE)}
            className="!rounded-[20px]"
          >
            View More
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondHeroSection;
