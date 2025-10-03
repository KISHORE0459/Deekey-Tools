const AppParagraph = ({ text, customClassName = "" }) => {
  return (
    <p
      className={`text-[14px] md:text-[16px] text-[#383838] leading-[130%] ${customClassName}`}
    >
      {text}
    </p>
  );
};

export default AppParagraph;
