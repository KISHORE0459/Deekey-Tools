import { Stack } from "@mui/material";
import AppImage from "../AppImage";
import AnimationWrapper from "../AppComponents/AppAnimation";

const ClientCard = ({ image, imageClassName }) => {
  return (
    <Stack
      gap={"10px"}
      className="rounded-[10px] bg-white shadow-md hover:shadow-xl min-w-[100px] md:min-w-[145px] h-[100px] md:h-[145px] justify-center items-center !p-[10px] hover:cursor-pointer"
    >
      <AppImage
        src={image}
        className={`md:max-w-[80%] md:max-h-[80%] w-full h-full object-cover ${imageClassName}`}
      />
    </Stack>
  );
};

export default ClientCard;
