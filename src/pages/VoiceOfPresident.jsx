import { Stack } from "@mui/material";
import React from "react";
import HeroBgComp from "../components/HeroBgComp";
import AppParagraph from "../components/AppParagraphComp";
import AnimatedText from "../components/AppComponents/AppAnimateText";

const VoiceOfPresident = () => {
  const VoiceOfPresidentDesc = [
    "Since the beginning, DEEKEY TOOLS has walked a path built on clarity of purpose, to deliver solutions that speak of precision, reliability, and care. Every component we design reflects the quiet discipline of our team and the values that guide us: integrity in thought, excellence in execution, and respect for every commitment we make.",
    "Growth for us has never been about shortcuts. It has been about listening, learning, and refining, ensuring that each tool, die, fixture, or pressed part is shaped with exactness. Behind this process lies the dedication of our engineers and designers, who approach every project not as a routine task, but as an opportunity to create something lasting. Their focus on detail is what makes our work dependable across industries.",
    "We also understand that in today’s evolving landscape, precision must move hand in hand with timeliness. That is why our systems are built to adapt swiftly, enabling us to honor deadlines while preserving the quality that defines us. Consistency and trust are not ideals we aspire to, they are practices we live by, day after day.",
    "As the industry embraces new dimensions of technology and sustainability, we remain committed to being a partner who brings not just capability, but confidence. Our foundation is strong, our vision is clear, and our responsibility to our clients and people continues to grow deeper with each passing year.",
    "To everyone who has placed their trust in us, thank you. With calm determination and a steady focus on quality, DEEKEY TOOLS will continue shaping solutions that carry both our name and our promise.",
  ];
  return (
    <Stack gap={"90px"} mt={"100px"}>
      <HeroBgComp
        title={"From a modest beginning to an Enduring Legacy"}
        desc={"our story is one of grit, growth, and gratitude."}
        headerText={"Voice of the President"}
      />
      <Stack gap={"80px"} className="px-[20px] md:px-[40px] items-center">
        <AppParagraph
          text={` “True excellence isn’t loud — it’s built silently into every micron,
          every joint, every finish. At DEEKEY TOOLS, quality is not just a
          standard. It is a discipline, a mindset, and a promise we make with
          every component we create.”`}
          customClassName="text-[16px] md:text-[20px] xl:text-[24px] font-[500] leading-[150%] text-[#A20F05] max-w-[920px] text-center italic"
        />
        <Stack className="gap-[30px] md:px-[40px]">
          {VoiceOfPresidentDesc?.map((val) => (
            <AppParagraph
              text={val}
              customClassName="text-[14px] md:text-[18px] text-justify italic"
            />
          ))}
          <div className="text-[14px] md:text-[18px] font-[500] leading-[100%] text-[#1A1A1A] flex flex-col gap-[5px] py-[10px]">
            <h3>Mr. Venugopalan</h3>
            <h3>President</h3>
            <h3>Deekey Tools</h3>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VoiceOfPresident;
