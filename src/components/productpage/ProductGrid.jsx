import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductGrid = ({ products, images }) => {
  console.log(motion?.address?.link);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onHoverStart={() => setHovered(product.id)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => setHovered(product.id)}
            animate={{
              scale: hovered === product.id ? 1.1 : hovered ? 0.9 : 1,
              opacity: hovered && hovered !== product.id ? 0.6 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src={images[index] || product.img}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-gray-700 font-medium">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
