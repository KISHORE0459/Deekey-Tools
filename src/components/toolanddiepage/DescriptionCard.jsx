import AppParagraph from "../AppParagraphComp";

const DescriptionCard = ({
  title,
  titleClassName = "",
  description,
  className = "",
}) => {
  return (
    <div
      className={`max-w-[650px] rounded-2xl p-6 pb-[100px] !bg-white [mask-image:linear-gradient(to_bottom,black,black,black,transparent)] flex flex-col gap-[20px] justify-center items-center top-shadow-box ${className}`}
    >
      {title && (
        <h2
          className={`text-[18px] md:text-[24px] xl:text-[36px] text-[#A20F05] font-[500] leading-[150%] ${titleClassName}`}
        >
          {title}
        </h2>
      )}
      <AppParagraph
        customClassName="text-[#1A1A1A] leading-[150%]"
        text={description}
      />
    </div>
  );
};

export default DescriptionCard;
