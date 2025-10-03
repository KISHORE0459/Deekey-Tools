import { Stack } from "@mui/material";
import product1 from "../assets/Images/product1.png";
import product2 from "../assets/Images/product2.png";
import product3 from "../assets/Images/product3.png";
import product4 from "../assets/Images/product4.png";
import product5 from "../assets/Images/product5.png";
import product6 from "../assets/Images/product6.png";
import product7 from "../assets/Images/product7.png";
import product8 from "../assets/Images/product8.png";
import product9 from "../assets/Images/product9.png";
import ProductCardDisplayComp from "../components/toolanddiepage/ProductCardDisplayComp";
import PressCompDescriptionCards from "../components/toolanddiepage/PressCompDesciptionCards";
import ToolDieImageWithDescComp from "../components/toolanddiepage/ToolDieImageWithDescComp";
import ToolsDescriptionBoxCtn from "../components/toolanddiepage/ToolsDescriptionBoxCtn";
import Hero from "../components/homepage/HeroSection";
import HeroBg from "../assets/HeroSectionImage/HeroBg.svg";
import { downloadBrochure } from "../components/commonFunctions/downloadBrochure";
import { useNavigate } from "react-router";
import { CONTACT_PAGE_ROUTE } from "../routes/url";
import HeroImage from "../assets/productImages/ProductImages.png";

const ToolAndDiePage2 = () => {
  const Images = [
    {
      id: 1,
      url: product1,
    },
    {
      id: 2,
      url: product2,
    },
    {
      id: 3,
      url: product3,
    },
    {
      id: 4,
      url: product4,
    },
    {
      id: 5,
      url: product5,
    },
    {
      id: 6,
      url: product6,
    },
    {
      id: 7,
      url: product7,
    },
    {
      id: 8,
      url: product8,
    },
    {
      id: 9,
      url: product9,
    },
    {
      id: 10,
      url: product5,
    },
    {
      id: 11,
      url: product6,
    },
    {
      id: 12,
      url: product7,
    },
    {
      id: 13,
      url: product8,
    },
    {
      id: 14,
      url: product9,
    },
    {
      id: 15,
      url: product5,
    },
    {
      id: 16,
      url: product6,
    },
    {
      id: 17,
      url: product7,
    },
    {
      id: 18,
      url: product8,
    },
    {
      id: 19,
      url: product9,
    },
    {
      id: 20,
      url: product9,
    },
  ];

  const navigate = useNavigate();

  return (
    <Stack className="gap-[60px]">
      <Hero
        title={"Built for Precision, Under Pressure"}
        subtitle="Designed with intent, executed with excellence"
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
      <Stack className="relative gap-[60px] overflow-hidden">
        <PressCompDescriptionCards />
        <div className="mt-[-40px]">
          <ProductCardDisplayComp
            title={"Gallery of Strength & Precision,"}
            subtitle={"Forged with expertise, defined by detail."}
            images={Images}
            imageClassName="!w-[130px] !h-[130px] md:!w-[250px] md:!h-[185px]"
          />
        </div>
        <ToolDieImageWithDescComp />
        <ToolsDescriptionBoxCtn />
      </Stack>
    </Stack>
  );
};

export default ToolAndDiePage2;
