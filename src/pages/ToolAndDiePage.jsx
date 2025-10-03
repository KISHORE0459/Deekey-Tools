import { Stack } from "@mui/material";
import ToolsSlideImageSection from "../components/toolanddiepage/ToolsSlideImageSection";
import ProductTextCardComp from "../components/toolanddiepage/ProductTextCardComp";
import JigsComp from "../components/toolanddiepage/JigsComp";
import Hero from "../components/homepage/HeroSection";
import HeroBg from "../assets/HeroSectionImage/HeroBg.svg";
import HeroImage from "../assets/productImages/ToolImage.png";
import { downloadBrochure } from "../components/commonFunctions/downloadBrochure";
import { useNavigate } from "react-router";
import { CONTACT_PAGE_ROUTE } from "../routes/url";

const ToolAndDiePage = () => {
  const navigate = useNavigate();
  const DieClassifications = [
    {
      id: 1,
      title: "Blanking Die",
      desc: "Engineered for clean and accurate cut-outs, our Blanking Dies ensure high-quality blanks with precision edges and consistency for further operations.",
    },
    {
      id: 2,
      title: "Piercing Die",
      desc: "Our Piercing Dies deliver sharp, accurate holes with minimal burrs, reflecting precision engineering and durability.",
    },
    {
      id: 3,
      title: "Drawing Die",
      desc: "Designed for deep and flawless shaping, our Drawing Dies provide strength, accuracy, and smooth finishes in every component.",
    },
    {
      id: 4,
      title: "Bending Die",
      desc: "Deekey Tools’ Bending Dies ensure exact angles, durability, and repeatability, creating components with perfect form and fit.",
    },
    {
      id: 5,
      title: "Forming Die",
      desc: "Our Forming Dies transform flat sheets into complex shapes with precision, strength, and reliability for demanding applications.",
    },
    {
      id: 6,
      title: "Trimming Die",
      desc: "With accuracy and speed, our Trimming Dies remove excess material to deliver clean, finished components.",
    },
    {
      id: 7,
      title: "Coining Die",
      desc: "Coining Dies by Deekey Tools achieve high precision, fine details, and smooth finishes, ideal for critical surface components.",
    },
    {
      id: 8,
      title: "Cut-off Die",
      desc: "Our Cut-off Dies provide clean separation of components with efficiency and dimensional accuracy, reducing waste.",
    },
    {
      id: 9,
      title: "Notching Die",
      desc: "Built for precise corner and edge cuts, our Notching Dies enhance accuracy and flexibility in production processes.",
    },
    {
      id: 10,
      title: "Shaving Die",
      desc: "Deekey Tools’ Shaving Dies deliver fine, accurate cuts to maintain tight tolerances and superior finish quality.",
    },
    {
      id: 11,
      title: "Embossing Die",
      desc: "Our Embossing Dies create raised or recessed designs with clarity, consistency, and durability across components.",
    },
    {
      id: 12,
      title: "Lancing Die",
      desc: "Lancing Dies combine cutting and partial forming, offering efficiency and reduced operations for streamlined production.",
    },
    {
      id: 13,
      title: "Stamping/Marking Die",
      desc: "Our Stamping and Marking Dies ensure clear, permanent impressions, supporting traceability and branding with precision.",
    },
    {
      id: 14,
      title: "Curling Die",
      desc: "Curling Dies are crafted for smooth, uniform edges, improving safety, strength, and finish quality of components.",
    },
  ];

  return (
    <Stack className="!gap-[60px]">
      <Hero
        title={"Driven by Passion, Perfected through Persistence"}
        subtitle="Every great journey starts with belief, ours began with nothing but determination."
        imageSrc={HeroImage}
        buttons={[
          {
            text: "Get Quote",
            onClick: () => navigate(CONTACT_PAGE_ROUTE),
            variant: "redContained",
            btnClassName:
              "!min-w-fit !h-[35px] xl:!h-[45px] !w-[120px] xl:!w-[180px] !rounded-[40px] text-[18px] font-[500]",
          },
          {
            text: "Download Brochure",
            onClick: () => downloadBrochure(),
            variant: "blackOutlined",
            btnClassName:
              "!min-w-fit !h-[35px] xl:!h-[45px] !w-[120px] xl:!w-[180px] !rounded-[40px] text-[18px] font-[500]",
          },
        ]}
        bgImage={HeroBg}
      />
      <ToolsSlideImageSection />
      <ProductTextCardComp
        title={"Die Operation Classifications"}
        desc={
          "We engineer and manufacture a wide range of precision dies to support diverse metalworking operations. Each die type is purpose-built to perform critical functions such as cutting, forming, bending, drawing, or finishing, ensuring accuracy and repeatability in high-volume production. From fine blanking to intricate embossing, our die solutions are designed to deliver consistency, durability, and superior performance across applications."
        }
        Descs1={DieClassifications?.slice(0, 8)}
        Descs2={DieClassifications?.slice(8)}
      />
      <JigsComp />
    </Stack>
  );
};

export default ToolAndDiePage;
