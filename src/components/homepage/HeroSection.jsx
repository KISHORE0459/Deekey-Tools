import React from "react";
import AppImage from "../AppImage";
import AppButton from "../AppButton";

const Hero = ({
  bgImage,
  title,
  titleClassName = "",
  subtitle,
  subtitleClassName = "",
  imageSrc,
  imageClassName,
  buttons = [],
}) => {
  return (
    <section
      className={`mt-[100px] xl:mt-0 relative md:h-[400px] xl:h-[100vh] !max-h-fit xl:!max-h-[900px] w-full flex flex-col md:flex-row md:items-center justify-between overflow-hidden`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Section */}
      <div className="relative flex-1 flex flex-col gap-[50px] md:text-left z-10 md:ml-[40px] xl:ml-[80px] p-[20px] md:max-w-[50vw] 2xl:max-w-[900px]">
        <div className="flex flex-col gap-[20px]">
          <h1
            className={`text-[26px] md:text-[35px] xl:text-[55px] font-bold leading-tight text-[#1A1A1A] ${titleClassName}`}
          >
            {title}
          </h1>
          <p
            className={`text-[18px] md:text-[20px] xl:text-[25px] font-[400] text-gray-700 ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        </div>
        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {buttons.map(
              (
                { text, onClick, variant = "blackOutlined", btnClassName = "" },
                index
              ) => (
                <AppButton
                  key={index}
                  BtnOnClick={onClick}
                  className={`${btnClassName}`}
                  BtnVariant={variant}
                >
                  {text}
                </AppButton>
              )
            )}
          </div>
        )}
      </div>

      {imageSrc && (
        <div
          className={`
            relative w-full flex justify-end mt-6
            md:w-[40vw] md:mt-0 
            lg:relative
            xl:absolute xl:right-0 xl:bottom-0 xl:flex-1 xl:h-[100vh] xl:max-h-[900px] xl:justify-end
            z-10 overflow-hidden
            ${imageClassName}
          `}
        >
          <img
            src={imageSrc}
            alt="Hero"
            className="w-[80%] md:w-full lg:w-full max-w-[600px] h-full xl:max-w-[800px] object-contain xl:object-cover md:mt-[100px]"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
