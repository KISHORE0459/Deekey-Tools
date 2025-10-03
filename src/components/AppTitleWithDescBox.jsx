import { Stack } from "@mui/material";
import AppParagraph from "./AppParagraphComp";

const AppTitleWithDescBox = ({
  title,
  titleClassName = "",
  desc,
  descClassName = "",
  ctnClassName = "",
}) => {
  return (
    <Stack
      className={`gap-[14px] bg-white rounded-[30px] p-[25px] w-[300px] md:w-[552px] hover:cursor-pointer shadow-md hover:shadow-lg ${ctnClassName}`}
    >
      <h2
        className={`text-[18px] md:text-[20px] text-[#A20F05] font-[600] leading-[120%] text-center ${titleClassName}`}
      >
        {title}
      </h2>
      <AppParagraph
        text={desc}
        customClassName={`text-[14px] xl:text-[17px] text-[#1A1A1A] font-[400] leading-[120%] text-center text-justify ${descClassName}`}
      />
    </Stack>
  );
};

export default AppTitleWithDescBox;
