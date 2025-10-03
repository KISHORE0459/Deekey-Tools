import { Stack } from "@mui/material";
import illustration from "../../assets/Images/Illustration.jpg";

const ProductIntro = () => {
  return (
    <section className="max-w-[90vw] text-center px-6 mx-auto flex flex-col gap-[10px] items-center justify-center">
      <Stack
        gap={"30px"}
        className="xl:max-w-[70%]"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack gap={"0px"}>
          <h2 className="text-[20px] md:text-[30px] text-[#1A1A1A] font-[600] leading-[120%]">
            We’re more than just a workplace.
          </h2>
          <h2 className="text-[20px] md:text-[30px] text-[#1A1A1A] font-[600] leading-[120%]">
            We’re a family.
          </h2>
        </Stack>
        <p className="text-[14px] md:text-[16px] text-gray-600 mb-8 max-w-[80%]">
          We know that finding a meaningful and rewarding career can be a long
          journey. Our goal is to make that process easy for you and to create a
          work environment that's enriching—one that you'll look forward to
          every day.
        </p>
      </Stack>

      <div className="flex justify-center mb-8">
        <img
          src={illustration}
          alt="Intro Illustration"
          className="rounded-lg xl:w-[1000px] xl:h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default ProductIntro;
