import { Button, CircularProgress } from "@mui/material";

const AppButton = ({
  BtnText,
  BtnOnClick,
  className = "",
  styles = {},
  BtnVariant = "",
  btnType = "button",
  isLoading = false,
  isDisabled = false,
  children,
}) => {
  return (
    <Button
      onClick={BtnOnClick}
      className={className}
      style={{
        ...styles,
      }}
      variant={BtnVariant}
      type={btnType}
      disabled={isDisabled || isLoading}
    >
      {!isLoading ? (
        BtnText ?? children
      ) : (
        <CircularProgress className="max-w-[20px] max-h-[20px] w-[20px] h-[20px]" />
      )}
    </Button>
  );
};

export default AppButton;
