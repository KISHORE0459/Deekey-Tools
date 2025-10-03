import { Stack } from "@mui/material";
import AppTitleWithSubTitle from "../AppTitleWithSubTitle";
import AppParagraph from "../AppParagraphComp";
import AnimationWrapper from "../AppComponents/AppAnimation";
import InspectionLogo from "../../assets/Jigs/InspectionLogo.svg";
import ModularLogo from "../../assets/Jigs/ModularLogo.svg";
import PowerLogo from "../../assets/Jigs/PowerLogo.svg";
import RigidLogo from "../../assets/Jigs/RigidLogo.svg";
import ToolRoomLogo from "../../assets/Jigs/ToolRoomLogo.svg";
import WeldingLogo from "../../assets/Jigs/WeldingLogo.svg";
import AppImage from "../AppImage";

const JigsComp = () => {
  const titleAndDesc = [
    {
      id: 1,
      title: "Welding & Assembly Jigs",
      logo: WeldingLogo,
      desc: "Engineered to withstand thermal stresses, our Welding & Assembly Jigs ensure stability, accuracy, and repeatability in high-volume production environments.",
    },
    {
      id: 2,
      title: "Inspection Jigs & Fixtures",
      logo: InspectionLogo,
      desc: "Designed for micron-level tolerance checks, our Inspection Jigs provide reliable reference points and consistent quality assurance across components.",
    },
    {
      id: 3,
      title: "Power-Operated Fixtures",
      logo: PowerLogo,
      desc: "Hydraulic, pneumatic, magnetic, and vacuum-based fixtures engineered to deliver consistent clamping, reduced cycle times, and superior efficiency.",
    },
    {
      id: 4,
      title: "Tool Room & Production Support",
      logo: ToolRoomLogo,
      desc: "Engineered to withstand thermal stresses, our Welding & Assembly Jigs ensure stability, accuracy, and repeatability in high-volume production environments.",
    },
    {
      id: 5,
      title: "Modular Jigs & Fixture Systems",
      logo: ModularLogo,
      desc: "Adaptable and efficient, our Modular Systems enable quick changeovers and support multiple part variants, boosting productivity and flexibility.",
    },
    {
      id: 6,
      title: "Rigid Workholding Systems",
      logo: RigidLogo,
      desc: "Rigid setups designed to provide precision, stability, and repeatability in complex machining operations, even under demanding conditions.",
    },
  ];

  return (
    <Stack
      sx={{
        gap: "60px",
      }}
      className="bg-gradient-to-b from-[#feffff] via-[#F1F5F7] to-[#f9fbfc] gap-[30px] pb-[20px] px-[40px]"
    >
      <AppTitleWithSubTitle
        title={"Jigs & Fixtures"}
        subTitle={"Precision in every clamp, reliability in every cycle"}
      />
      <AppParagraph
        text={
          "At Deekey Tools, we specialize in designing and manufacturing  customized jigs and fixtures that enhance productivity, reduce cycle  times, and ensure consistent quality. Our fixtures are engineered  to perform seamlessly on the shop floor, with a strong focus on  accuracy, durability, and operator efficiency. From welding to  machining, inspection to assembly, we provide tailored solutions  that meet the demanding requirements of modern manufacturing."
        }
        customClassName="text-[14px] md:text-[16px] md:max-w-[80%] mx-auto text-justify"
      />
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch", // good
          gap: "30px",
          columnGap: { xl: "30px" },
          flexWrap: "wrap",
        }}
      >
        {titleAndDesc?.map((val) => (
          <AnimationWrapper animation="fade" direction="up" key={val?.id}>
            <Stack
              className={`gap-[14px] bg-white rounded-[30px] p-[25px] w-[300px] md:w-[552px] hover:cursor-pointer shadow-md hover:shadow-lg`}
            >
              <Stack className="flex !flex-row md:flex-nowrap w-full justify-between items-center">
                <AppImage
                  src={val?.logo}
                  alt="logo"
                  className="max-w-70px max-h-[70px]"
                />
                <h2
                  className={`text-[18px] md:text-[20px] text-[#A20F05] font-[600] leading-[120%] text-right w-[70%] md:max-w-[40%]`}
                >
                  {val?.title}
                </h2>
              </Stack>
              <AppParagraph
                text={val?.desc}
                customClassName={`text-[14px] xl:text-[17px] text-[#1A1A1A] font-[400] leading-[120%] text-center text-justify`}
              />
            </Stack>
          </AnimationWrapper>
        ))}
      </Stack>
    </Stack>
  );
};

export default JigsComp;
