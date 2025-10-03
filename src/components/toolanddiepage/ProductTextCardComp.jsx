"use client";
import { Box, Stack } from "@mui/material";
import AppParagraph from "../AppParagraphComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const ProductTextCardComp = ({
  title,
  subtitle,
  desc,
  Descs1,
  Descs2,
  ctnClassName = "",
}) => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        py: "40px",
      }}
      className="bg-gradient-to-b from-white via-[#F1F5F7] to-[#fafcfd]"
    >
      <Stack gap={"60px"} px={"20px"}>
        {/* Header */}
        <Stack
          gap={"20px"}
          className="justify-center items-center md:px-[20px]"
        >
          <Stack className="gap-[5px] justify-center items-center">
            <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#A20F05] font-[600] leading-[120%]">
              {title}
            </h2>
            {subtitle && (
              <h4 className="text-[14px] md:text-[18px] xl:text-[24px] text-[#1A1A1A] font-[400] leading-[120%]">
                {subtitle}
              </h4>
            )}
          </Stack>
          {desc && (
            <AppParagraph
              text={desc}
              customClassName="md:w-[80%] text-justify"
            />
          )}
        </Stack>

        <Stack gap={"27px"}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className={`w-full ${ctnClassName}`}
          >
            {Descs1?.map((desc, index) => (
              <SwiperSlide
                key={`row1-${index}`}
                className="!w-[300px] md:!w-[450px] hover:shadow-xl hover:cursor-pointer"
              >
                <motion.div
                  className="relative overflow-visible w-[300px] h-[150px] md:w-[450px] md:h-[150px] bg-white rounded-[8px] p-[20px] flex flex-col items-center gap-[10px] shadow-sm hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <h2 className="text-[16px] md:text-[22px] text-[#A20F05] font-[500] leading-[24px]">
                    {desc?.title}
                  </h2>
                  <h4 className="text-[12px] md:text-[15px] text-[#1A1A1A] font-[400] leading-[150%] text-justify">
                    {desc?.desc}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={20}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            speed={5000}
            loop={true}
            freeMode={true}
            className={`w-full ${ctnClassName}`}
          >
            {Descs2?.map((desc, index) => (
              <SwiperSlide
                key={`row2-${index}`}
                className="!w-[300px] md:!w-[450px] hover:shadow-xl hover:cursor-pointer"
              >
                <motion.div
                  className="relative overflow-visible w-[300px] h-[150px] md:w-[450px] md:h-[150px] bg-white rounded-[8px] p-[20px] flex flex-col items-center gap-[10px] shadow-sm hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.01, ease: "easeInOut" }}
                >
                  <h2 className="text-[16px] md:text-[22px] text-[#A20F05] font-[500] leading-[24px]">
                    {desc?.title}
                  </h2>
                  <h4 className="text-[12px] md:text-[15px] text-[#1A1A1A] font-[400] leading-[150%] text-justify">
                    {desc?.desc}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductTextCardComp;
