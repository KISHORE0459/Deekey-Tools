import { Stack } from "@mui/material";
import AppButton from "../components/AppButton";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  CAREER_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PRIVACY_POLICY_PAGE_NAVIGATE,
  PRODUCTS_PAGE_ROUTE,
  REFUND_PAGE,
  TERM_AND_CONDITIONS_PAGE_NAVIGATE,
} from "../routes/url";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const handleInternalNav = (link) => {
    navigate(link);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 smooth scrolling
    });
  };

  const handleExternalNav = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  const footerLinks = {
    "About Us": [
      { label: "Home", onClick: () => handleInternalNav(HOME_PAGE_ROUTE) },
      { label: "About Us", onClick: () => handleInternalNav(ABOUT_PAGE_ROUTE) },
      { label: "Services", onClick: () => handleInternalNav(HOME_PAGE_ROUTE) },
    ],
    Company: [
      {
        label: "Products",
        onClick: () => handleInternalNav(PRODUCTS_PAGE_ROUTE),
      },
      { label: "Careers", onClick: () => handleInternalNav(CAREER_PAGE_ROUTE) },
      {
        label: "Contact",
        onClick: () => handleInternalNav(CONTACT_PAGE_ROUTE),
      },
    ],
    Connect: [
      {
        label: "Linked in",
        onClick: () =>
          handleExternalNav("https://www.linkedin.com/company/deekeytools"),
      },
      {
        label: "Instagram",
        onClick: () =>
          handleExternalNav(
            "https://www.instagram.com/deekeytools?igsh=MTc1cmZmOWdqdGV6Mg=="
          ),
      },
      {
        label: "Facebook",
        onClick: () =>
          handleExternalNav("https://www.facebook.com/share/16ijXKxrUG/"),
      },
    ],
    Legal: [
      {
        label: "Privacy Policy",
        onClick: () => handleInternalNav(PRIVACY_POLICY_PAGE_NAVIGATE),
      },
      {
        label: "Terms And Condition",
        onClick: () => handleInternalNav(TERM_AND_CONDITIONS_PAGE_NAVIGATE),
      },
      // {
      //   label: "Refund / Cancellation Policy",
      //   onClick: () => handleInternalNav(REFUND_PAGE),
      // },
    ],
  };

  const foots = `© Copyright, Deekey Tools, All Rights Reserved.`;

  return (
    <footer className="bg-[#111] text-white text-center px-5 py-10 mt-[30px] flex flex-col gap-[80px]">
      {![CONTACT_PAGE_ROUTE]?.includes(pathName) && (
        <Stack className="justify-center items-center gap-[20px]">
          <Stack gap={"0px"}>
            <h2 className="text-[20px] md:text-[30px] xl:text-[48px] text-white font-[500] md:font-[700]">
              Your challenge, our craftsmanship
            </h2>
            <h2 className="text-[20px] md:text-[30px] xl:text-[48px] text-white font-[500] md:font-[700]">
              Let's build together!!
            </h2>
          </Stack>
          <AppButton
            BtnVariant="redContained"
            BtnOnClick={() => navigate(CONTACT_PAGE_ROUTE)}
            className="!rounded-[20px] !text-[16px] font-semibold leading-[150%] text-white"
          >
            Connect
          </AppButton>
        </Stack>
      )}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-10 md:px-[100px]">
        {Object.entries(footerLinks).map(([category, links], i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <div>
              <h3 className="text-base font-bold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((item, index) => (
                  <li key={index}>
                    <h4
                      className="text-gray-400 hover:text-white text-sm transition hover:cursor-pointer"
                      onClick={item?.onClick}
                    >
                      {item.label}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 text-gray-400 text-xs">
        <p>{foots}</p>
      </div>
    </footer>
  );
};

export default Footer;
