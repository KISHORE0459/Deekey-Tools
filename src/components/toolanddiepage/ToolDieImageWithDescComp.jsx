import { Box, Stack } from "@mui/material";
import AppTitleWithSubTitle from "../AppTitleWithSubTitle";
import AppImageCard from "../AppImageCard";
import PressComp1 from "../../assets/PressComp/PressComp1.png";
import PressComp2 from "../../assets/PressComp/PressComp2.png";
import AppParagraph from "../AppParagraphComp";

const ToolDieImageWithDescComp = () => {
  const desc = [
    "At Deekey Tools, our expertise extends far beyond press machines and tool & die manufacturing. We take pride in delivering finished products that showcase our precision, versatility, and complete in-house capabilities.",
    "The images shown are the prime examples of our craftsmanship—automotive components that demand accuracy and a seamless blend of multiple processes. By manufacturing such complex, high-quality products, we prove that Deekey Tools is not just about creating dies; we are about delivering end-to-end engineering excellence.",
    "With design, prototyping, tooling, machining, and assembly under one roof, we ensure consistent quality, durability, and timely delivery. Every product reflects our commitment to innovation, precision, and trust—showing that our capabilities truly go beyond dies and press components.",
  ];

  return (
    <Stack
      gap={"45px"}
      px={{ base: "20px", md: "20px", xl: "80px" }}
      className="bg-gradient-to-b from-white via-[#e5f1f6] to-white"
    >
      <AppTitleWithSubTitle
        title={"Beyond Die’s and Press Components"}
        subTitle={"Showcasing Our Manufacturing Strength & Support"}
      />
      <Box
        sx={{
          display: { base: "flex", md: "grid" },
          flexDirection: "row",
          flexWrap: "wrap",
          gridTemplateColumns: "1fr 1fr",
          gap: { base: "50px", xl: "130px" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack gap={"20px"} justifyContent={"center"} alignItems={"center"}>
          <AppImageCard
            image={PressComp1}
            ctnClassName={`bg-white w-[300px] md:w-[520px] max-h-[260px] shadow-md`}
            imageClassName={"w-[50%] h-[50%]"}
          />
          <AppImageCard
            image={PressComp2}
            ctnClassName={`bg-white w-[300px] md:w-[520px] max-h-[260px] shadow-md`}
            imageClassName={`w-[50%] h-[50%]`}
          />
        </Stack>
        <Stack
          gap={"15px"}
          maxWidth={{ base: "300px", md: "670px" }}
          mt={"20px"}
        >
          {desc?.map((val) => (
            <AppParagraph
              text={val}
              customClassName="text-[14px] md:text-[18px] font-[400] text-justify px-[20px]"
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ToolDieImageWithDescComp;
