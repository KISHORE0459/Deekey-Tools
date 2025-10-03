import { Stack } from "@mui/material";

const AppTitleWithDesc = ({
  title,
  desc,
  titleClassName = "",
  descClassName = "",
}) => {
  return (
    <Stack gap={"15px"}>
      <h2
        className={`text-[18px] md:text-[24px] xl:text-[30px] text-[#1A1A1A] font-[500] leading-[150%] ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`text-[14px] md:text-[16px] xl:text-[16px] text-[#383838] font-[400] leading-[130%] text-justify ${descClassName}`}
      >
        {desc}
      </p>
    </Stack>
  );
};

export default AppTitleWithDesc;
