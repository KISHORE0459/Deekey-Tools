import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Collapse,
} from "@mui/material";
import DeekeyLogo from "../../src/assets/DeekyLogo.svg";
import AppImage from "./AppImage";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  CAREER_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PRODUCTS_PAGE_ROUTE,
  TOOL_AND_DIE_PRODUCT_PAGE,
  TOOL_AND_DIE_PRODUCT_PAGE_2,
  VOICE_OF_PRESIDENT_PAGE,
} from "../routes/url";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  const NavItems = [
    {
      label: "Home",
      link: HOME_PAGE_ROUTE,
      isSelected: pathName == HOME_PAGE_ROUTE,
    },
    {
      label: "About us",
      link: ABOUT_PAGE_ROUTE,
      isSelected:
        pathName == VOICE_OF_PRESIDENT_PAGE || pathName == ABOUT_PAGE_ROUTE,
      hoverItem: [
        {
          label: "About Us",
          link: ABOUT_PAGE_ROUTE,
        },
        {
          label: "Voice Of President",
          link: VOICE_OF_PRESIDENT_PAGE,
        },
      ],
    },
    {
      label: "Products",
      link: PRODUCTS_PAGE_ROUTE,
      isSelected:
        pathName == TOOL_AND_DIE_PRODUCT_PAGE ||
        pathName == TOOL_AND_DIE_PRODUCT_PAGE_2,
      hoverItem: [
        {
          label: "Tool & Die",
          link: TOOL_AND_DIE_PRODUCT_PAGE,
        },
        {
          label: "Press Component",
          link: TOOL_AND_DIE_PRODUCT_PAGE_2,
        },
      ],
    },
    {
      label: "Career",
      link: CAREER_PAGE_ROUTE,
      isSelected: pathName == CAREER_PAGE_ROUTE,
    },
    {
      label: "Contact",
      link: CONTACT_PAGE_ROUTE,
      isSelected: pathName == CONTACT_PAGE_ROUTE,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        py: "15px",
        zIndex: 15,
        backgroundColor: "transparent",
        position: "absolute",
        width: "98vw",
        maxWidth: "1920px",
      }}
    >
      {/* Logo */}
      <div
        className="hover:cursor-pointer"
        onClick={() => navigate(HOME_PAGE_ROUTE)}
      >
        <AppImage
          src={DeekeyLogo}
          className="w-[245px] h-[70px] hover:cursor-pointer"
        />
      </div>

      {/* Desktop Menu */}
      <Box className="hidden xl:flex flex-row gap-[45px] md:px-[45px]">
        {NavItems?.map((item, index) => (
          <NavItem key={index} navItem={item} isSelected={item?.isSelected} />
        ))}
      </Box>

      {/* Mobile Menu Toggle */}
      <Box className="px-[10px] xl:hidden hover:cursor-pointer">
        <CiMenuFries onClick={() => setIsMenuOpen((state) => !state)} />
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        anchor="right"
      >
        <Box sx={{ width: 260 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={() => setIsMenuOpen(false)}>
              <IoClose />
            </IconButton>
          </Box>

          <List>
            {NavItems.map((item, index) => (
              <MobileNavItem
                key={index}
                navItem={item}
                isSelected={item?.isSelected}
                onNavigate={(link) => {
                  navigate(link);
                  setIsMenuOpen(false);
                }}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

/* ---------------- Desktop NavItem ---------------- */
const NavItem = ({ navItem, isSelected }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const hasSubItems = navItem?.hoverItem?.length > 0;

  const navigateTo = (link) => {
    navigate(link);
    setIsOpen(false);
  };

  return (
    <Box
      className="relative flex flex-col gap-[5px] group"
      sx={{ cursor: "pointer" }}
      onMouseEnter={() => hasSubItems && setIsOpen(true)}
      onMouseLeave={() => hasSubItems && setIsOpen(false)}
      onClick={() => {
        if (!hasSubItems) navigateTo(navItem?.link);
      }}
    >
      {/* Main Nav Label + Arrow */}
      <Box className="flex flex-row items-center gap-1">
        <h3
          className={`text-[18px] font-semibold leading-[120%] transition-colors duration-300 
          ${isSelected ? "text-[#A20F05]" : "text-black"} 
          group-hover:text-[#A20F05] ${isOpen ? "!text-[#A20F05]" : ""}`}
        >
          {navItem?.label}
        </h3>
        {hasSubItems &&
          (isOpen ? (
            <IoChevronUp
              size={16}
              className={`text-[#A20F05] ${
                isSelected ? "text-[#A20F05]" : "text-black"
              }`}
            />
          ) : (
            <IoChevronDown
              size={16}
              className={`text-black ${
                isSelected ? "text-[#A20F05]" : "text-black"
              }`}
            />
          ))}
      </Box>

      {/* Underline */}
      <div
        className={`h-[2px] bg-[#A20F05] transition-all duration-500 ease-in-out
        ${isSelected ? "w-[30px]" : "w-0"}`}
      ></div>

      {/* Submenu */}
      {hasSubItems && isOpen && (
        <Box
          className="absolute top-full left-0 bg-white shadow-lg rounded-md z-20"
          sx={{ minWidth: "180px", padding: "8px 0" }}
        >
          {navItem.hoverItem.map((subItem, idx) => (
            <Box
              key={idx}
              onClick={() => navigateTo(subItem.link)}
              className="px-4 py-2 text-[16px] text-black hover:text-[#A20F05] hover:bg-gray-100 transition-colors"
            >
              {subItem.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

/* ---------------- Mobile NavItem (Accordion Style) ---------------- */
const MobileNavItem = ({ navItem, isSelected, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = navItem?.hoverItem?.length > 0;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            if (hasSubItems) {
              setOpen(!open);
            } else {
              onNavigate(navItem.link);
            }
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            className={`text-[16px] font-medium ${
              isSelected ? "text-[#A20F05]" : "text-black"
            }`}
          >
            {navItem.label}
          </span>
          {hasSubItems &&
            (open ? (
              <IoChevronUp
                size={18}
                className={`text-[#A20F05] ${
                  isSelected ? "text-[#A20F05]" : "text-black"
                }`}
              />
            ) : (
              <IoChevronDown
                size={18}
                className={`text-black ${
                  isSelected ? "text-[#A20F05]" : "text-black"
                }`}
              />
            ))}
        </ListItemButton>
      </ListItem>

      {/* Sub Items (Accordion collapse) */}
      {hasSubItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box className="pl-6 flex flex-col gap-2 py-2">
            {navItem.hoverItem.map((sub, idx) => (
              <span
                key={idx}
                className="text-[15px] text-black hover:text-[#A20F05] cursor-pointer"
                onClick={() => onNavigate(sub.link)}
              >
                {sub.label}
              </span>
            ))}
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default NavBar;
