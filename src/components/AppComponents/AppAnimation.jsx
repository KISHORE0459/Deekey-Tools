"use client";
import {
  Fade,
  Slide,
  Zoom,
  Bounce,
  Roll,
  Flip,
  Rotate,
  Hinge,
  JackInTheBox,
  AttentionSeeker,
} from "react-awesome-reveal";

const AnimationWrapper = ({
  animation = "fade",
  direction = "up",
  duration = 1000,
  delay = 0,
  triggerOnce = true,
  className = "",
  children,
}) => {
  const commonProps = { duration, delay, triggerOnce };

  switch (animation) {
    case "fade":
      return (
        <Fade {...commonProps} direction={direction} className={className}>
          {children}
        </Fade>
      );
    case "slide":
      return (
        <Slide {...commonProps} direction={direction} className={className}>
          {children}
        </Slide>
      );
    case "zoom":
      return (
        <Zoom {...commonProps} className={className}>
          {children}
        </Zoom>
      );
    case "bounce":
      return (
        <Bounce {...commonProps} className={className}>
          {children}
        </Bounce>
      );
    case "roll":
      return (
        <Roll {...commonProps} className={className}>
          {children}
        </Roll>
      );
    case "flip":
      return (
        <Flip {...commonProps} className={className}>
          {children}
        </Flip>
      );
    case "rotate":
      return (
        <Rotate {...commonProps} className={className}>
          {children}
        </Rotate>
      );
    case "hinge":
      return (
        <Hinge {...commonProps} className={className}>
          {children}
        </Hinge>
      );
    case "jackInTheBox":
      return (
        <JackInTheBox {...commonProps} className={className}>
          {children}
        </JackInTheBox>
      );
    case "attention":
      return (
        <AttentionSeeker {...commonProps} effect="pulse" className={className}>
          {children}
        </AttentionSeeker>
      );
    default:
      return (
        <Fade {...commonProps} className={className}>
          {children}
        </Fade>
      );
  }
};

export default AnimationWrapper;
