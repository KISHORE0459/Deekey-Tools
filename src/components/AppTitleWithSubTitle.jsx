import { Stack } from "@mui/material";

const AppTitleWithSubTitle = ({ title, subTitle }) => {
  return (
    <Stack className="gap-[5px] justify-center items-center">
      <h2 className="text-[20px] md:text-[26px] xl:text-[36px] text-[#A20F05] font-[600] leading-[120%] text-center">
        {title}
      </h2>
      {subTitle && (
        <h4 className="text-[14px] md:text-[18px] xl:text-[24px] text-[#1A1A1A] font-[400] leading-[120%] text-center">
          {subTitle}
        </h4>
      )}
    </Stack>
  );
};

export default AppTitleWithSubTitle;
