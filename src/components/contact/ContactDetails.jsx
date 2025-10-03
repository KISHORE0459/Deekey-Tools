import { Box, Stack, Typography, Button } from "@mui/material";
import AppButton from "../AppButton";
import { downloadBrochure } from "../commonFunctions/downloadBrochure";

const ContactDetails = () => {
  const Details = [
    {
      title: "Headquarters",
      desc: `Deekey Tools
No. 1/3E/91C, Nethaji nagar,
3rd Phase Sidco, Sipcot post,
Hosur, Tamil Nadu - 635126,
India`,
    },
    {
      title: "Email",
      desc: `info@deekeytools.com
sales@deekeytools.com`,
    },
    {
      title: "Phone",
      desc: `+91 8300587078`,
    },
  ];

  return (
    <Stack
      className="p-[20px] rounded-[20px] shadow-md gap-[20px] max-w-[625px] flex-1 w-full"
      sx={{ backgroundColor: "#f8f9fb" }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "20px", md: "24px", xl: "30px" },
          color: "#A20F05",
          mb: 1,
        }}
      >
        Location
      </Typography>

      {/* Details */}
      <Stack spacing={2}>
        {Details.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: "10px",
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { base: "17px", md: "20px" },
                color: "#A20F05",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "pre-line", // keep line breaks in desc
                fontSize: "14px",
                color: "#2e2e2e",
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Download Button */}
      <Box textAlign="right">
        <AppButton
          BtnVariant="redContained"
          className="!rounded-[30px]"
          BtnOnClick={downloadBrochure}
        >
          Download Brochure
        </AppButton>
      </Box>
    </Stack>
  );
};

export default ContactDetails;
