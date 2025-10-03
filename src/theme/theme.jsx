import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  breakpoints: {
    sm: "400px",
    md: "700px",
    lg: "1250px",
    xl: "1500px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "redContained" },
          style: {
            width: "fit-content",
            backgroundColor: "#A20F05",
            color: "white",
            py: "10px",
            px: "15px",
            boxShadow: "0.5px 1px 4px #8E8E8E",
            border: "1px solid #A20F05",
            transition: "all 0.4s ease",
            "&:hover": {
              border: "1px solid #A20F05",
              backgroundColor: "white",
              color: "#A20F05",
            },
          },
        },
        {
          props: { variant: "blackOutlined" },
          style: {
            width: "fit-content",
            backgroundColor: "white",
            color: "#1A1A1A",
            py: "10px",
            px: "15px",
            boxShadow: "0.5px 1px 4px #8E8E8E",
            border: "1px solid #1A1A1A",
            transition: "all 0.4s ease",
            "&:hover": {
              border: "1px solid #1A1A1A",
              backgroundColor: "white",
              color: "#1A1A1A",
            },
          },
        },
        {
          props: { variant: "redOutlined" },
          style: {
            width: "fit-content",
            py: "20px",
            px: "30px",
            borderRadius: "30px",
            border: "1px solid #A20F05",
            color: "#A20F05",
            bg: "white",
            "&:hover": {
              border: "1px solid #A20F05",
            },
          },
        },
      ],
    },
  },
});
