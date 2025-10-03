import { Box, Stack } from "@mui/material";
import TitleWithDescBox from "../components/about/TitleWithDescBox";
import HeroBgComp from "../components/HeroBgComp";
import OurJourneyComp from "../components/about/OurJourneyComp";
import Timeline from "../components/about/TimeLine";

const About = () => {
  return (
    <Stack mt={"100px"}>
      <HeroBgComp
        title={"Driven by Passion, Perfected through Persistence"}
        desc={
          "Every great journey starts with belief, ours began with nothing but determination."
        }
        headerText={"About us"}
      />
      <Stack className="gap-[20px]">
        <TitleWithDescBox />
        <Timeline />
        <OurJourneyComp />
      </Stack>
    </Stack>
  );
};

export default About;
