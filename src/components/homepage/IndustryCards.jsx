import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Stack } from "@mui/material";
import AutomotiveLogo from "../../assets/IndustriesImage/AutomotiveIndustry.png";
import ConstructionLogo from "../../assets/IndustriesImage/ConstructionInudustry.png";
import ConsumerLogo from "../../assets/IndustriesImage/ConsumerAppliance.png";
import DefenseLogo from "../../assets/IndustriesImage/DefenceIndustry.png";
import IndustryLogo from "../../assets/IndustriesImage/IndustrialApplication.png";
import WarehouseLogo from "../../assets/IndustriesImage/warehouseLogistics.png";
import AppImage from "../AppImage";

const cards = [
  {
    id: 1,
    logo: AutomotiveLogo,
    title: "Automotive Industry",
    text: "We support the automotive sector with high-strength, precision-built components that perform reliably under high-speed structural operations. ",
    expandedText:
      "We support the automotive sector with high-strength, precision-built components that perform reliably under high-speed structural operations. Our expertise ensures dimensional accuracy, durability, and seamless integration into vehicle production lines, enhancing both efficiency and product life.",
  },
  {
    id: 2,
    logo: DefenseLogo,
    title: "Defense Industry",
    text: "For defense applications, we supply precision-engineered components capable of withstanding extreme stresses and critical performance demands. Our focus on accuracy",
    expandedText:
      "For defense applications, we supply precision-engineered components capable of withstanding extreme stresses and critical performance demands. Our focus on accuracy, strength, and reliability ensures that every part contributes to mission-critical systems with absolute confidence.",
  },
  {
    id: 3,
    logo: WarehouseLogo,
    title: "Warehouse & Logistics",
    text: "We specialize in manufacturing racking and storage system components such as uprights, beams, base plates, and connectors.",
    expandedText:
      "We specialize in manufacturing racking and storage system components such as uprights, beams, base plates, and connectors. Designed for maximum load-bearing capacity and safety, these solutions optimize space utilization, improve workflow, and ensure long-term reliability in warehouses and distribution centers.",
  },
  {
    id: 4,
    logo: IndustryLogo,
    title: "Industrial Applications",
    text: "From heavy machinery to precision equipment, our engineered solutions are designed to endure demanding cycles while maintaining accuracy and consistency",
    expandedText:
      "From heavy machinery to precision equipment, our engineered solutions are designed to endure demanding cycles while maintaining accuracy and consistency. By focusing on performance and dependability, we help industries achieve longer equipment life, reduced downtime, and improved productivity.",
  },
  {
    id: 5,
    logo: ConstructionLogo,
    title: "Construction Industry",
    text: "For construction equipment and infrastructure requirements, we manufacture rugged and wear-resistant components that guarantee strength, stability, and long service life",
    expandedText:
      "For construction equipment and infrastructure requirements, we manufacture rugged and wear-resistant components that guarantee strength, stability, and long service life. Built to perform under extreme conditions, our solutions contribute to safer, more reliable construction operations.",
  },
  {
    id: 6,
    logo: ConsumerLogo,
    title: "Consumer Appliances",
    text: "In the appliance sector, our components emphasize consistency, smooth finishing, and dependable function. By ensuring precision and uniformity at every stage",
    expandedText:
      "In the appliance sector, our components emphasize consistency, smooth finishing, and dependable function. By ensuring precision and uniformity at every stage, we help deliver products that not only perform with reliability but also meet the expectations of durability and refined aesthetics.",
  },
];

const IndustryCards = () => {
  const [hovered, setHovered] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);

  const columns = [[], [], []];
  cards.forEach((card, i) => {
    columns[i % 3].push({ ...card, _idx: i });
  });

  return (
    <Stack sx={{ gap: "30px" }}>
      <Box className="flex flex-col w-full justify-center items-center gap-[5px] py-[20px]">
        <h2 className="text-[20px] md:text-[24px] xl:text-[30px] text-[#1A1A1A] font-bold leading-[150%]">
          Industries We Serve
        </h2>
        <div className="h-1 bg-[#FF0000] w-[72px]"></div>
      </Box>

      <div className="hidden xl:block px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, colIdx) => {
            return (
              <div
                key={colIdx}
                className="flex flex-col gap-6 h-[520px] xl:h-[600px] 2xl:h-[550px]"
              >
                {col.map(({ id, logo, title, expandedText, _idx }) => {
                  const isHovered = hovered === _idx;

                  return (
                    <motion.div
                      key={id}
                      onHoverStart={() => setHovered(_idx)}
                      onHoverEnd={() => setHovered(null)}
                      animate={{
                        flex: isHovered ? 1.6 : 1, // ✅ expand/shrink behavior
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                      className="flex flex-col bg-white shadow-lg rounded-[30px] lg:rounded-[40px] shadow-gray-300 overflow-hidden cursor-pointer p-4 lg:p-5 gap-[20px]"
                      layout
                    >
                      {/* Header */}
                      <Box
                        className="flex flex-row justify-between items-center"
                        style={{ minHeight: "80px" }}
                      >
                        <AppImage
                          src={logo}
                          alt="industry logo"
                          className="max-w-[60px] max-h-[60px] lg:max-w-[70px] lg:max-h-[70px]"
                        />
                        <h3 className="w-[40%] text-right text-[20px] md:text-[22px] lg:text-[26px] leading-[100%] font-[800] text-[#A20F05]">
                          {title}
                        </h3>
                      </Box>

                      {/* Body */}
                      <motion.div
                        animate={{
                          opacity: 1,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#2f2f2f] font-medium leading-[150%] text-justify">
                          {isHovered
                            ? expandedText
                            : expandedText?.slice(0, 200) + "..."}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-[15px] xl:hidden">
        {cards.map(({ id, logo, title, expandedText }) => {
          const isOpen = expandedMobile === id;

          return (
            <motion.div
              key={id}
              className="bg-white shadow-md rounded-[20px] overflow-hidden cursor-pointer p-4 flex flex-col gap-[20px]"
              onClick={() => setExpandedMobile(isOpen ? null : id)}
              layout
            >
              {/* Header */}
              <Box className="flex flex-row justify-between items-center">
                <AppImage
                  src={logo}
                  alt="industry logo"
                  className="max-w-[50px] max-h-[50px]"
                />
                <h3 className="text-[18px] font-[600] text-[#A20F05]">
                  {title}
                </h3>
              </Box>

              {/* Expandable Body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-3 text-[14px] text-[#2f2f2f] font-medium leading-[150%] text-justify">
                      {expandedText}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Stack>
  );
};

export default IndustryCards;
