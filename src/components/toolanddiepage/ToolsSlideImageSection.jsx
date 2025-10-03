"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stack } from "@mui/material";
import AppParagraph from "../AppParagraphComp";
import PressCompImage1 from "../../../src/assets/productpage/PressCompImage1.svg";
import PressCompImage2 from "../../../src/assets/productpage/PressCompImage2.svg";
import PressCompImage3 from "../../../src/assets/productpage/PressCompImage3.png";
import CompoundDie from "../../../src/assets/PressComp/CompoundDie.jpg";
import ProgressiveDie from "../../../src/assets/PressComp/PrograssiveDie.jpg";
import SingleDie from "../../../src/assets/PressComp/SingleDie.jpg";
const cards = [
  {
    id: 1,
    title: "Progressive Die",
    desc: "At Deekey Tools, our Progressive Dies are designed for continuous, high-volume production, carrying out sequential operations with speed, accuracy, and reliability.",
    img: ProgressiveDie,
  },
  {
    id: 2,
    title: "Compound Die",
    desc: "Deekey Tools’ Compound Dies execute multiple operations in a single stroke, delivering dimensional accuracy and simplified workflows.",
    img: CompoundDie,
  },
  {
    id: 3,
    title: "Single Operation Die",
    desc: "Deekey Tools’ Single Operation Dies provide focused solutions for individual processes, combining industrial strength, precision, and efficiency.",
    img: SingleDie,
  },
];

export default function ToolsSlideImageSection() {
  const [hovered, setHovered] = useState(null); // desktop
  const [expanded, setExpanded] = useState(null); // mobile

  const shouldShowText = (cardId, isMobile) => {
    if (isMobile) {
      return expanded === null || expanded === cardId;
    }
    return hovered === null || hovered === cardId;
  };

  return (
    <Stack gap={"30px"} px={"20px"}>
      {/* Header */}
      <Stack gap={"20px"} className="md:px-[20px] justify-center items-center">
        <Stack gap={"10px"}>
          <h2 className="text-[18px] md:text-[26px] xl:text-[36px] text-[#A20F05] font-[600] leading-[30px] text-center">
            Tool & Die - The True Art of Control
          </h2>
          <h3 className="text-[14px] md:text-[20px] xl:text-[24px] text-[#1A1A1A] font-[400] leading-[24px] text-center">
            Forged with expertise, defined by detail.
          </h3>
        </Stack>

        <AppParagraph
          text={`At Deekey Tools, we specialize in developing robust tool and die solutions that drive efficiency on the shop floor.`}
          customClassName="md:max-w-[80%] text-justify"
        />
      </Stack>

      {/* ---------- MOBILE / TABLET (click-to-expand) ---------- */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 w-full max-w-[90vw] lg:hidden">
          {cards.map((card) => {
            const isExpanded = expanded === card.id;
            return (
              <motion.div
                key={card.id}
                onClick={() => setExpanded(isExpanded ? null : card.id)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full"
                animate={{ height: isExpanded ? 500 : 300 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {shouldShowText(card.id, true) && (
                  <div className="absolute top-0 left-0 w-full p-4 text-white bg-black/40">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                    <p className="text-sm mt-2">{card.desc}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* ---------- DESKTOP (hover-to-expand) ---------- */}
      <div className="hidden lg:flex justify-center gap-4 w-full h-[550px]">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-1"
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{ flex: hovered === card.id ? 3 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Background layer with zoom effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: hovered === card.id ? 1.8 : 1, // zoom on hover
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Overlay text */}
            <div className="absolute top-0 left-0 w-full p-6 text-[#1A1A1A] flex flex-col gap-[30px] min-h-[200px]">
              <h2 className="text-[18px] md:text-[24px] xl:text-[28px] text-[#A20F05] font-[500] leading-[100%]">
                {card.title}
              </h2>
              {shouldShowText(card.id, false) && (
                <p className="text-[14px] md:text-[18px] text-[#1A1A1A] leading-[150%] font-[300]">
                  {card?.desc}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Stack>
  );
}
