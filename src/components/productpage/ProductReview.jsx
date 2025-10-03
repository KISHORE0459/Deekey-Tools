import { Button } from "@mui/material";

const ProductReview = ({ title, description }) => {
  return (
    <section className="text-center px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <Button
        variant="redContained"
        color="error"
        size="medium"
        sx={{ borderRadius: "8px", paddingX: "20px" }}
      >
        Explore More
      </Button>
    </section>
  );
};

export default ProductReview;
