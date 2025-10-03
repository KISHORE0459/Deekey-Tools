import { Stack } from "@mui/material";
import AppParagraph from "../components/AppParagraphComp";

const RefundPage = () => {
  const description = [
    "Since our inception in 2004, DEEKEY TOOLS has grown steadily on the foundation of one simple principle — do it right, or don’t do it at all. Greatness, we believe, is rooted in the smallest of details. That’s why every bracket, press tool, fixture, or fabricated part that leaves our facility carries with it not just our name — but our trust.",
    "Shortcuts have no place in our journey. We invest time in understanding client requirements to the last specification, refining our processes for dimensional accuracy and consistency. Each project is supported by a dedicated R&D team that works behind the scenes — applying thoughtful design, careful validation, and deep technical insight into every tool we engineer. Their commitment ensures that innovation is not an afterthought, but the foundation of every solution we deliver.",
    "Since our inception in 2004, DEEKEY TOOLS has grown steadily on the foundation of one simple principle — do it right, or don’t do it at all. Greatness, we believe, is rooted in the smallest of details. That’s why every bracket, press tool, fixture, or fabricated part that leaves our facility carries with it not just our name — but our trust.",
    "Shortcuts have no place in our journey. We invest time in understanding client requirements to the last specification, refining our processes for dimensional accuracy and consistency. Each project is supported by a dedicated R&D team that works behind the scenes — applying thoughtful design, careful validation, and deep technical insight into every tool we engineer. Their commitment ensures that innovation is not an afterthought, but the foundation of every solution we deliver.",
    "Each project is supported by a dedicated R&D team that works behind the scenes — applying thoughtful design, careful validation, and deep technical insight into every tool we engineer. Their commitment ensures that innovation is not an afterthought, but the foundation of every solution we deliver.",
  ];

  return (
    <Stack className="mt-[100px] px-[20px] md:px-[60px] justify-center items-center gap-[30px] md:gap-[70px]">
      <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#1A1A1A] font-[500] leading-[30px] text-center">
        Refund / Cancellation Policy
      </h2>
      <Stack className="gap-[40px]">
        {description?.map((desc, index) => (
          <AppParagraph
            text={desc}
            key={index}
            customClassName="text-justify"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default RefundPage;
