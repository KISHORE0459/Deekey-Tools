import { Stack } from "@mui/material";
import AppTitleWithDescBox from "../AppTitleWithDescBox";
import AppTitleWithSubTitle from "../AppTitleWithSubTitle";
import AnimationWrapper from "../AppComponents/AppAnimation";

const ToolsDescriptionBoxCtn = () => {
  const titleAndDesc = [
    {
      id: 1,
      title: "EDM (Electrical Discharge Machining)",
      desc: "We achieve precision machining up to ±5 microns, delivering sharp corners, deep cavities, and complex geometries for high-performance dies.",
    },
    {
      id: 2,
      title: "Wire Cutting (Wire EDM)",
      desc: "We specialize in micron-level cutting accuracy (±1 micron) with surface finish up to Ra 0.2–0.4 μm, ensuring flawless profiles for intricate tool inserts.",
    },
    {
      id: 3,
      title: "VMC (Vertical Machining Center)",
      desc: "Our advanced VMC operations maintain tolerances within ±10 microns, enabling fast and repeatable milling, drilling, and contouring across diverse materials.",
    },
    {
      id: 4,
      title: "Laser Cutting",
      desc: "We deliver sharp profiles with ±0.05 mm tolerance, minimal heat-affected zones, and fast turnaround, enabling intricate part fabrication.",
    },
    {
      id: 5,
      title: "Jig Boring",
      desc: "At Deekey Tools, we guarantee hole positioning accuracy, ensuring critical tooling and assemblies fit seamlessly every time.",
    },
    {
      id: 6,
      title: "Shearing / Cutting",
      desc: "We prepare raw materials with precision shearing accuracy, ensuring smooth edges and optimum yield for downstream processes.",
    },
    {
      id: 7,
      title: "Surface Grinding",
      desc: "With ARC, TIG , MIG and Spot welding expertise, we meet AWS strength standards, ensuring reliable assemblies built to withstand demanding applications.",
    },
    {
      id: 8,
      title: "Welding",
      desc: "We achieve precision machining up to ±5 microns, delivering sharp corners, deep cavities, and complex geometries for high-performance dies.",
    },
    {
      id: 9,
      title: "Surface Treatment",
      desc: "From polishing to anodizing, nitriding, and phosphate coating, our treatments improve wear resistance, reduce friction, and enhance aesthetics.",
    },
    {
      id: 10,
      title: "Powder Coating",
      desc: "We apply chip-resistant, corrosion-proof finishes with coating thickness of 60–120 microns, ensuring both durability and a refined look.",
    },
  ];

  return (
    <Stack
      sx={{
        gap: "40px",
      }}
      className="bg-gradient-to-b from-white via-[#e5f1f6] to-white gap-[30px] py-[20px] px-[40px] z-10"
    >
      <AppTitleWithSubTitle
        title={"Beyond Die’s and Presses"}
        subTitle={"Showcasing Our Manufacturing Strength & Support"}
      />
      <Stack
        sx={{
          display: { base: "flex", xl: "grid" },
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          alignItems: "stretch",
          mx: "auto",
          flexDirection: "row",
          gap: "30px",
          columnGap: { xl: "120px" },
          flexWrap: "wrap !important",
        }}
      >
        {titleAndDesc?.map((val) => (
          <AnimationWrapper animation="fade" direction="up">
            <AppTitleWithDescBox
              title={val?.title}
              desc={val?.desc}
              key={val?.id}
              ctnClassName="h-full"
            />
          </AnimationWrapper>
        ))}
      </Stack>
    </Stack>
  );
};

export default ToolsDescriptionBoxCtn;
