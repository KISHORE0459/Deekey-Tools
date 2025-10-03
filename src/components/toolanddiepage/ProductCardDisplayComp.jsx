import { Box, Stack } from "@mui/material";
import AppParagraph from "../AppParagraphComp";

const ProductCardDisplayComp = ({
  title,
  subtitle,
  desc,
  images,
  ctnClassName = "",
  imageCtnClassName = "",
  imageClassName = "",
}) => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        py: { md: "40px" },
      }}
      className="bg-gradient-to-b from-white via-[#e5f1f6] to-white mt-[-20px]"
    >
      <Stack gap={"60px"} px={"20px"}>
        {/* Title & Description */}
        <Stack gap={"20px"} className="justify-center items-center px-[20px]">
          <Stack className="gap-[5px] justify-center items-center">
            <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#A20F05] font-[600] leading-[120%] text-center">
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
        <Box
          className={`flex 2xl:grid grid-cols-5 2xl:mx-auto gap-[20px] flex-wrap justify-center ${ctnClassName}`}
        >
          {images?.map((image, index) => {
            return (
              <Box
                key={index}
                className={`relative overflow-visible hover:cursor-pointer hover:shadow-xl ${imageCtnClassName}`}
              >
                <img
                  src={image?.url}
                  alt={`img-${index}`}
                  className={`w-[250px] h-[180px] object-cover rounded-xl shadow-lg ${imageClassName}`}
                />
              </Box>
            );
          })}
        </Box>
        <Stack className="flex justify-center items-center">
          <h3 className="text-[16px] font-[400] leading-[150%]">
            <span className="font-[500]">Note: </span> The images shown are only
            reference visuals of individual dies. At Deekey Tools, we deliver
            the complete die set with full functionality and precision.
          </h3>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCardDisplayComp;
