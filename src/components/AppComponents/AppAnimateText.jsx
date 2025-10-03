"use client";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  variant = "fade",
  duration = 0.05,
  className = "",
}) => {
  const letters = Array.from(text);

  // Container variants (control stagger effect)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: duration },
    },
  };

  // Define different per-letter animations
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    },
    "slide-up": {
      hidden: { opacity: 0, y: `0.5em` },
      visible: { opacity: 1, y: `0em`, transition: { duration: 0.4 } },
    },
    "slide-down": {
      hidden: { opacity: 0, y: `-0.5em` },
      visible: { opacity: 1, y: `0em`, transition: { duration: 0.4 } },
    },
    bounce: {
      hidden: { opacity: 0, y: `1em` },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: { type: "spring", stiffness: 500, damping: 30 },
      },
    },
    wave: {
      hidden: { opacity: 0, rotate: -20 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    },
    typing: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.001 } }, // appear instantly
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={variants[variant]}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
