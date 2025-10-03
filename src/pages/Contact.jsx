import { Box, Stack } from "@mui/material";
import LocationSection from "../components/contact/LocationSection";
import EmailForm from "../components/contact/EmailForm";
import ContactDetails from "../components/contact/ContactDetails";

const Contact = () => {
  return (
    <Stack className="px-[10px] md:px-[40px] gap-[20px] mt-[100px]">
      <Box className="flex flex-col md:flex-row justify-around items-stretch bg-[#e9e9e9] rounded-[20px] p-[15px] gap-[20px]">
        <EmailForm />
        <ContactDetails />
      </Box>
      <LocationSection />
    </Stack>
  );
};

export default Contact;
