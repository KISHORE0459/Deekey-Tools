import { useState } from "react";
import { motion } from "framer-motion";
import AppParagraph from "../AppParagraphComp";
import { Stack } from "@mui/material";
import PressCompImage1 from "../../../src/assets/productpage/PressCompImage1.svg";
import PressCompImage2 from "../../../src/assets/productpage/PressCompImage2.svg";

const DieCompSlider = () => {
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Prograssive Die",
      desc: "We drive innovation in the automotive sector, delivering precision engineered components and solutions that enhance ",
      img: PressCompImage1,
    },
    {
      id: 2,
      title: "Compound Die",
      desc: "We drive innovation in the automotive sector, delivering precision engineered components and solutions that enhance ",
      img: PressCompImage2,
    },
    {
      id: 3,
      title: "Single Operation Die",
      desc: "We drive innovation in the automotive sector, delivering precision engineered components and",
      img: PressCompImage2,
    },
    {
      id: 4,
      title: "Prograssive Die",
      desc: "We drive innovation in the automotive sector, delivering precision engineered components and solutions that enhance ",
      img: PressCompImage1,
    },
    {
      id: 5,
      title: "Compound Die",
      desc: "We drive innovation in the automotive sector, delivering precision engineered components and solutions that enhance ",
      img: PressCompImage2,
    },
    {
      id: 6,
      title: "Single Operation Die",
      desc: "We drive innovation in the automotive sector, delivering precision engineered components and",
      img: PressCompImage2,
    },
  ];

  console.log(motion?.a?.link);

  return (
    <Stack gap={"70px"} mt={"20px"} px={"20px"}>
      <Stack gap={"20px"} className="px-[20px] justify-center items-center">
        <Stack gap={"10px"}>
          <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#A20F05] font-[600] leading-[30px] text-center">
            Die Components
          </h2>
        </Stack>
        <AppParagraph
          text={`Every high-performance die is built on the strength of its components. At Deekey Tools, we manufacture precision-engineered parts such as punches, die blocks, guide pillars, bushes, springs, and pilots that form the backbone of reliable tooling systems. Each component is crafted to exact tolerances, ensuring smooth alignment, consistent pressure distribution, and long service life. Together, these elements guarantee that every die we build delivers uncompromising accuracy and durability in demanding production environments`}
          customClassName="md:max-w-[80%] text-justify"
        />
      </Stack>
      <div className="flex justify-center items-center">
        {/* ---------------- MOBILE + TABLET ---------------- */}
        <div className="flex flex-col gap-4 w-full max-w-md lg:hidden">
          {cards.map((card) => {
            const isExpanded = expanded === card.id;
            return (
              <motion.div
                key={card.id}
                onClick={() => setExpanded(isExpanded ? null : card.id)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full hover:cursor-pointer"
                animate={{
                  height: isExpanded ? 350 : 150,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <motion.div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-center">
                  {card.title}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-4 w-full px-[40px]">
          {cards.map((card) => {
            const isHovered = hovered === card.id;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-1"
                animate={{
                  flex: isHovered ? 3 : 1,
                  scale: isHovered ? 1.05 : 1,
                  zIndex: isHovered ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "350px",
                  padding: "10px",
                }}
              >
                <Stack className="max-w-[500px]">
                  <h2 className="text-[16px] md:text-[20px] xl:text-[26px] font-[500] text-[#A20F05] leading-[150%]">
                    {card?.title}
                  </h2>
                  <h3 className="text-[12px] md:text-[18px] xl:text-[16px] font-[400] text-[#1A1A1A] leading-[150%] text-justify">
                    {card?.desc}
                  </h3>
                </Stack>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {card.title}
                </motion.div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Stack>
  );
};

export default DieCompSlider;
