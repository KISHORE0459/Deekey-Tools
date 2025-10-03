const PolicySection = ({
  number,
  id,
  title,
  description,
  pointList = [],
  paraWithHeader = [],
  note,
}) => {
  return (
    <div className="space-y-4" id={id}>
      {/* Heading */}
      <h2 className="text-[18px] md:text-[24px] text-[#1A1A1A] font-[500] leading-[150%]">
        {number}. {title}
      </h2>

      <p className="text-[14px] md:text-[18px] text-[#1A1A1A] leading-[150%] font-[400]">
        {description}
      </p>
      <div className="flex flex-col gap-[30px]">
        {paraWithHeader?.length > 0 &&
          paraWithHeader.map((para, idx) => (
            <div key={idx}>
              <p className="text-[14px] md:text-[16px] leading-[150%]">
                {para.paraTitle && (
                  <span className="font-[500]">{para?.paraTitle} </span>
                )}
                {para?.paraDesc}
              </p>
            </div>
          ))}
      </div>

      {pointList?.length > 0 &&
        pointList?.map((points) => (
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[14px] md:text-[18px] text-[#1A1A1A] font-[500] leading-[150%]">
              {points?.pointTitle}
            </h3>
            {points?.points?.length > 0 && (
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {points?.points?.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-[14px] md:text-[18px] text-[#1A1A1A] leading-[150%] font-[400]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

      {/* Note */}
      {note && (
        <p className="text-[14px] md:text-[18px] text-[#1A1A1A] leading-[150%] font-[400]">
          {note}
        </p>
      )}
    </div>
  );
};

export default PolicySection;
