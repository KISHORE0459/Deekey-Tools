import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsOpencollective } from "react-icons/bs";
import { LuShare2 } from "react-icons/lu";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import AppButton from "../AppButton";
import { useNavigate } from "react-router";
import { JOB_PAGE_NAV } from "../../routes/url";
import React from "react";

const JobCard = ({
  jobTitle,
  jobLocation,
  jobExperience,
  jobDescription,
  noOfVacancies,
  job,
}) => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigation = () => {
    navigate(JOB_PAGE_NAV(job?._id));
  };

  // job share link
  const shareUrl = new URL(
    JOB_PAGE_NAV(job?._id),
    window.location.origin
  ).toString();

  const handleInstagramShare = () => {
    const url = `https://${window.location.host}${JOB_PAGE_NAV(job?._id)}`;
    navigator.clipboard.writeText(url);
    alert("📋 Job link copied! Paste it into Instagram.");
    handleClose();
  };

  return (
    <Stack className="border-[1px] border-[#b3b3b3] rounded-[16px] hover:cursor-pointer hover:shadow-md">
      {/* Header */}
      <Box className="border-b-[1px] border-[#b3b3b3] p-[25px] relative">
        {/* Share Button */}
        <IconButton
          onClick={handleOpen}
          sx={{ position: "absolute", top: "15px", right: "15px" }}
        >
          <LuShare2 className="text-[20px] text-[#2e2e2e]" />
        </IconButton>

        <Stack className="gap-[10px]">
          <h2 className="text-[18px] md:text-[20px] xl:text-[24px] font-[500] leading-[150%] text-[#1A1A1A]">
            {jobTitle}
          </h2>
          <Box className="flex flex-col md:flex-row gap-[30px] flex-wrap">
            <Box className="flex flex-row gap-[10px] items-center">
              <MdOutlineLocationOn className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
              <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                {jobLocation ?? "-"}
              </h4>
            </Box>
            <Box className="flex flex-row gap-[10px] items-center">
              <BiSolidBarChartAlt2 className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
              <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                {jobExperience ?? "-"}
              </h4>
            </Box>
            {noOfVacancies && (
              <Box className="flex flex-row gap-[10px] items-center">
                <BsOpencollective className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                  {`${noOfVacancies} openings`}
                </h4>
              </Box>
            )}
          </Box>
        </Stack>
      </Box>

      {/* Body */}
      <Stack className="p-[25px] gap-[10px]">
        <Stack gap={"10px"}>
          <h3 className="text-[17px] font-[500] leading-[150%] text-[#1A1A1A]">
            Job Description
          </h3>
          <ul className="ml-[20px] md:ml-[30px] list-disc flex flex-col gap-[10px]">
            {jobDescription?.length > 0 ? (
              jobDescription?.slice(0, 3)?.map((val, index) => (
                <li
                  key={index}
                  className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]"
                >
                  {val}
                </li>
              ))
            ) : (
              <Box className="flex justify-center items-center">
                <h3 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                  No Job Descriptions Available
                </h3>
              </Box>
            )}
          </ul>
        </Stack>
        <Box mt={"20px"}>
          <AppButton BtnVariant="redOutlined" BtnOnClick={handleNavigation}>
            Learn More
          </AppButton>
        </Box>
      </Stack>

      {/* Share Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          className="bg-white rounded-[16px] p-[30px] shadow-lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
          }}
        >
          <Typography
            variant="h6"
            className="text-center font-[600] mb-[20px] text-[#1A1A1A]"
          >
            Share this Job
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <WhatsappShareButton
              url={shareUrl}
              title={jobTitle}
              separator=" - "
            >
              <FaWhatsapp size={40} color="#25D366" />
            </WhatsappShareButton>
            <FacebookShareButton url={shareUrl} quote={jobTitle}>
              <FaFacebook size={40} color="#1877F2" />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl} title={jobTitle}>
              <FaLinkedin size={40} color="#0A66C2" />
            </LinkedinShareButton>
            <IconButton onClick={handleInstagramShare}>
              <FaInstagram size={40} color="#E4405F" />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default JobCard;
