import React from "react";
// import NavBar from "./NavBar";
import ContentCard from "./ContentCard";

const Content = () => {
  const contents = [
    {
      title: "Our Journey",
      explaination1:
        "Founded at 2004, with a vision to redefine precision in the tooling industry, Deekey Tools has grown from a modest workshop into a trusted name in press components and tool & die solutions. Over the years, we have combined engineering expertise, advanced manufacturing technology, and an unwavering commitment to quality to deliver products that power industries worldwide. Our journey is built on craftsmanship, innovation, and trust, ensuring every component that leaves our floor carries the mark of Deekey excellence.",
      explaination2:
        "From concept to completion, every creation at Deekey Tools is a testament to our in-house expertise. With specialized departments for sales, design, production, and quality assurance working in seamless synergy, we ensure each product is meticulously engineered, precision-crafted, and refined to the highest standards—right under our own roof.",
      explaination3:
        "At Deekey Tools, quality is not just a goal — it is our way of life. Every component we create reflects our dedication to precision, durability, and value for our customers. We believe in working with calm focus and steadfast commitment, ensuring that each step we take strengthens our promise of excellence. Our success lies not only in what we deliver, but in the trust we forge with every customer.",
    },
  ];

  return (
    <div>
      {/* <NavBar /> */}
      <div className="p-6 space-y-6">
        {contents.map((content, index) => (
          <ContentCard key={index} {...content} />
        ))}
      </div>
    </div>
  );
};

export default Content;
