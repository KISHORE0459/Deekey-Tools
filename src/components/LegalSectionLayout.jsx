import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const LegalSectionLayout = () => {
  const legalNavItem = [
    {
      label: "Privacy Policy",
      link: "privacy-policy",
      url: "/legal/privacy-policy",
      subSections: [
        {
          label: "Information We Collect",
          id: "information-we-collect",
        },
        {
          label: "Use Of Information",
          id: "use-of-information",
        },
        {
          label: "Sharing Of Information",
          id: "sharing-of-information",
        },
        {
          label: "Date Retention",
          id: "data-retention",
        },
        {
          label: "Data Security",
          id: "data-security",
        },
        {
          label: "Cookies & Analytics",
          id: "cookies-analytics",
        },
        {
          label: "Your Right As a Data Principle",
          id: "your-right",
        },
        {
          label: "International Visiters",
          id: "international-visiters",
        },
        {
          label: "Governing Law & Jurisdiction",
          id: "governing-law",
        },
        {
          label: "Policy Updates",
          id: "privacy-updates",
        },
        {
          label: "Contact",
          id: "contact",
        },
      ],
    },
    {
      label: "Terms and Conditions",
      link: "terms-and-conditions",
      url: "/legal/terms-and-conditions",
      subSections: [
        {
          label: "Acceptance of Terms",
          id: "acceptance-of-terms",
        },
        {
          label: "Website Content and Use",
          id: "website-content",
        },
        {
          label: "Intellectual Property Rights",
          id: "intellectual-property",
        },
        {
          label: "Careers and Contact Form",
          id: "careers-contact",
        },
        {
          label: "Disclaimer of Warranties",
          id: "disclaimer",
        },
        {
          label: "Limitation of Liability",
          id: "limitations",
        },
        {
          label: "Indemnification",
          id: "indemnification",
        },
        {
          label: "Governing Law and Jurisdiction",
          id: "governing-law",
        },
        {
          label: "General Provisions",
          id: "general-provisions",
        },
        {
          label: "Contact Us",
          id: "contact-us",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
      className="mt-[100px]"
    >
      <Stack
        sx={{
          width: { xs: "100%", md: "300px" },
          px: "5px",
        }}
        className="group !sticky !top-[10px] max-h-[100vh] overflow-y-hidden hover:overflow-y-auto py-[10px] border-r-[1px]"
      >
        {legalNavItem.map((item) => (
          <LegalNavItem key={item.label} item={item} />
        ))}
      </Stack>

      {/* Main content */}
      <Box flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

const LegalNavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Box>
      <Box
        className={`flex justify-between items-center py-[15px] border-b-[0.5px] border-b-[#1A1A1A] hover:cursor-pointer ${
          isOpen ? "text-[#A20F05]" : ""
        }`}
        onClick={() => setIsOpen((s) => !s)}
      >
        <Link to={item.link} className="font-[500]">
          {item.label}
        </Link>
        <button aria-label={`Toggle ${item.label} subsections`}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </Box>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "fit-content" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        style={{ overflow: "hidden" }}
        className="bg-[#ededed]"
      >
        <Stack spacing={1} sx={{ pl: 2, py: 1 }}>
          {item.subSections.map((val) => (
            <ScrollLink
              key={val.id}
              to={val.id}
              smooth={true}
              duration={500}
              offset={-80} // adjust for sticky header
              className="text-[15px] text-[#1A1A1A] hover:text-[#c74949] cursor-pointer"
              onClick={() => {
                if (pathName !== item?.url) {
                  navigate(item?.url);
                }
              }}
            >
              {val.label}
            </ScrollLink>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default LegalSectionLayout;
