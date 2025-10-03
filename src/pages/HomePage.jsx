import { Box, Stack } from "@mui/material";
import SecondHeroSection from "../components/homepage/SecondHeroSection";
import IndustryCards from "../components/homepage/IndustryCards";
import ClientCard from "../components/homepage/ClientCard";
import BlueBayLogo from "../assets/ClientLogos/BlueBay.png";
import STSLogo from "../assets/ClientLogos/STS.jpg";
import EswaraGroups from "../assets/ClientLogos/EawaraGroups.png";
import Inlogsys from "../assets/ClientLogos/Inlogsys.jpg";
import LogkraftLogo from "../assets/ClientLogos/Logkraft.png";
import TNTLogo from "../assets/ClientLogos/TNTINDIA.png";
import SSFine from "../assets/ClientLogos/SSFine.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import HomePageHeroSection from "../components/homepage/HeroImage";
// import VantaStyleGlobe from "../components/AppComponents/AppGlobe";

const HomePage = () => {
  const clientList = [
    {
      id: 1,
      logo: TNTLogo,
    },
    {
      id: 2,
      logo: STSLogo,
    },
    {
      id: 3,
      logo: Inlogsys,
    },
    {
      id: 4,
      logo: LogkraftLogo,
    },
    {
      id: 5,
      logo: SSFine,
    },
    {
      id: 6,
      logo: BlueBayLogo,
    },
    {
      id: 7,
      logo: EswaraGroups,
    },
  ];

  return (
    <Stack gap={"30px"} className="relative max-w-[100vw] overflow-hidden">
      <HomePageHeroSection />
      {/* <VantaStyleGlobe /> */}
      <SecondHeroSection />
      <IndustryCards />
      <Stack gap={"30px"} mt={"30px"} px={{ base: "20px", md: "40px" }}>
        <Box className="flex flex-col w-full justify-center items-center gap-[5px]">
          <h2 className="text-[20px] md:text-[24px] xl:text-[30px] text-[#1A1A1A] font-bold leading-[150%]">
            Clients
          </h2>
          <div className="h-1 bg-[#FF0000] w-[72px]"></div>
        </Box>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000}
          className="max-w-[300px] md:max-w-[600px] xl:max-w-[1200px] mx-[20px] !py-[20px] !bg-white overflow-x-scroll"
        >
          {clientList?.map((client) => (
            <SwiperSlide key={client?.id} style={{ width: "auto" }}>
              <ClientCard image={client?.logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default HomePage;
