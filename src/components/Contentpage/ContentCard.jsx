const ContentCard = ({
  title,
  explaination1,
  explaination2,
  explaination3,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 space-y-3">
      <h2
        className="text-2xl font-bold text-gray-800"
        style={{ textAlign: "center" }}
      >
        {title}
      </h2>
      <p className="text-gray-600">{explaination1}</p>
      <p className="text-gray-600">{explaination2}</p>
      <p className="text-gray-600">{explaination3}</p>
    </div>
  );
};

export default ContentCard;
