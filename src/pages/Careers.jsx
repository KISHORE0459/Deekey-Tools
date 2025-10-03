import ProductIntro from "../components/productpage/ProductIntro";
import JobListingComp from "../components/JobListingComp";
import { useEffect } from "react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove "smooth" if you want instant jump
    });
  }, []);

  return (
    <div className="mt-[100px]">
      <ProductIntro />
      <JobListingComp />
    </div>
  );
};

export default Careers;
