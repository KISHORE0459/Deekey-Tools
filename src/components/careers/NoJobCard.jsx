import { Box, Stack, Typography, Button } from "@mui/material";

const NoJobCard = () => {
  return (
    <Box
      className="rounded-[20px] shadow-md p-6 text-center"
      sx={{ backgroundColor: "#f8f9fb" }}
    >
      {/* Main Message */}
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          fontWeight: 600,
          mb: 2,
        }}
      >
        Sorry, Currently there are no vacancies.
        <br />
        Please check back later. We would love to have you.
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "24px" },
          fontWeight: 600,
          mt: 3,
        }}
      >
        Can’t find what you’re looking for?
      </Typography>

      {/* Small Helper Text */}
      <Typography
        sx={{
          fontSize: { base: "16px", md: "20px" },
          color: "#444",
          mt: 1,
          mb: 3,
        }}
      >
        Register on our Candidate Portal and get notified when new roles that
        match your skills open up.
      </Typography>
    </Box>
  );
};

export default NoJobCard;
