import { Box } from "@mui/material";
import AppImage from "./AppImage";

const AppImageCard = ({ image, imageClassName, ctnClassName }) => {
  return (
    <Box
      className={`p-[20px] rounded-[30px] flex justify-center items-center overflow-hidden ${ctnClassName}`}
    >
      <AppImage
        src={image}
        alt="Image"
        className={`object-cover ${imageClassName}`}
      />
    </Box>
  );
};

export default AppImageCard;
