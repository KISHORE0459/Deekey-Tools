import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import PressCompImage from "../../assets/HeroSectionImage/PressImage.png";
import ToolHeroImage from "../../assets/HeroSectionImage/ToolImage.png";
import BgImage from "../../assets/HeroSectionImage/HeroBg.svg";
import { useNavigate } from "react-router";
import {
  CONTACT_PAGE_ROUTE,
  TOOL_AND_DIE_PRODUCT_PAGE,
  TOOL_AND_DIE_PRODUCT_PAGE_2,
} from "../../routes/url";
import AppButton from "../AppButton";

export default function HomePageHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    if (!link) return;
    navigate(link);
  };

  const slides = [
    {
      image: ToolHeroImage,

      btn1: "Tool & Die Products",
      btn1OnClick: () => handleNavigate(TOOL_AND_DIE_PRODUCT_PAGE),
      btn2: "Get Quote",
      btn2OnClick: () => handleNavigate(CONTACT_PAGE_ROUTE),
    },
    {
      image: PressCompImage,
      btn1: "Press Components",
      btn1OnClick: () => handleNavigate(TOOL_AND_DIE_PRODUCT_PAGE_2),
      btn2: "Get Quote",
      btn2OnClick: () => handleNavigate(CONTACT_PAGE_ROUTE),
    },
    {
      image: ToolHeroImage,

      btn1: "Tool & Die Products",
      btn1OnClick: () => handleNavigate(TOOL_AND_DIE_PRODUCT_PAGE),
      btn2: "Get Quote",
      btn2OnClick: () => handleNavigate(CONTACT_PAGE_ROUTE),
    },
    {
      image: PressCompImage,
      btn1: "Press Components",
      btn1OnClick: () => handleNavigate(TOOL_AND_DIE_PRODUCT_PAGE_2),
      btn2: "Get Quote",
      btn2OnClick: () => handleNavigate(CONTACT_PAGE_ROUTE),
    },
  ];

  return (
    <div className="w-screen h-screen bg-gray-50 md:max-h-[900px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        grabCursor={true}
        speed={800}
        slidesPerView={1}
        spaceBetween={0}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, i) => {
          const isCurrent = activeIndex === i;

          return (
            <SwiperSlide
              key={i}
              className="w-screen h-full flex justify-center"
            >
              <div
                className={`w-full max-w-[1920px] h-full rounded-2xl shadow-2xl overflow-hidden transition-all duration-700`}
                style={{
                  transform: isCurrent ? "scale(1)" : "scale(0.95)",
                  backgroundImage: `url(${BgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col md:flex-row h-full w-full justify-around md:justify-between items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-col justify-center w-full md:w-[60%] p-2 py-8 lg:p-16 mt-[100px]"
                  >
                    <div className="relative flex-1 flex flex-col gap-[50px] md:text-left z-10">
                      <div className="flex flex-col gap-[20px]">
                        <div>
                          <h1 className="text-[26px] md:text-[35px] xl:text-[55px] font-bold leading-tight text-[#1A1A1A]">
                            From Grit to Greatness
                          </h1>
                          <h1 className="text-[26px] md:text-[35px] xl:text-[55px] font-bold leading-tight text-[#1A1A1A]">
                            Built on Precision
                          </h1>
                        </div>
                        <p className="text-[18px] md:text-[20px] xl:text-[25px] font-[400] text-gray-700">
                          Shaping a future of excellence through precision and
                          performance
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <AppButton
                          BtnOnClick={slide?.btn1OnClick}
                          className="!min-w-fit !h-[35px] xl:!h-[45px] !w-[120px] xl:!w-[180px] !rounded-[40px] text-[18px] font-[500]"
                          BtnVariant={"redContained"}
                        >
                          {slide?.btn1}
                        </AppButton>
                        <AppButton
                          BtnOnClick={slide?.btn2OnClick}
                          className="!min-w-fit !h-[35px] xl:!h-[45px] !w-[120px] xl:!w-[180px] !rounded-[40px] text-[18px] font-[500]"
                          BtnVariant={"blackOutlined"}
                        >
                          {slide?.btn2}
                        </AppButton>
                      </div>
                    </div>
                  </motion.div>

                  <div
                    className="relative w-full md:w-[30%] xl:w-[45%] h-full md:h-auto xl:h-full md:min-h-0 transition-all duration-700 flex justify-end items-center max-w-[700px] max-h-[400px] md:max-h-max"
                    style={{
                      transform: isCurrent ? "scale(1.2)" : "scale(1)",
                      transformOrigin: "center right",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className=" w-[80%] md:w-full h-[90%] object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
