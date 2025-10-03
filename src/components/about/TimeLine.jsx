import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: 2004,
    title: "2004 - Where It All Started",
    content:
      "Every great story begins with a spark. Ours was lit in 2004, not with factories or fortune, but with determination, courage, and a belief in precision. From a small table, we began crafting our first tool and die, taking the very first step into the world of engineering.",
  },
  {
    year: 2005,
    title: "2005 - Expanding into Press Components",
    content:
      "As our expertise grew, we expanded into press components, designing parts that could withstand speed, load, and maintain precision. This step opened the doors to high-volume production, where our consistency built trust. Our first machines marked a shift, from relying on external resources to creating our own capacity.",
  },
  {
    year: 2007,
    title: "2007 - Diversifying our Expertise",
    content:
      "This year marked expansion into storage & racking system components and automotive solutions, opening new doors and industries for us. Our precision-built connectors, hooks, and automotive parts became integral to robust structures and performance-driven vehicles.",
  },
  {
    year: 2008,
    title: "2008 - From Vision to Infrastructure",
    content:
      "We established a larger facility equipped with advanced machines, enabling us to handle complex projects. This growth empowered us to offer complete, end-to-end solutions for diverse customer requirements.",
  },
  {
    year: 2012,
    title: "2012 - Versatility Across Sectors",
    content:
      "Our expertise broadened into consumer applications and varied industrial sectors, making Deekey Tools a truly versatile partner. From everyday appliances to heavy-duty engineering needs, our solutions proved adaptable, reliable, and performance-driven.",
  },
  {
    year: 2016,
    title: "2016 - A Decade of Precision and Trust",
    content:
      "By this time, Deekey Tools had delivered over 50 Million components across multiple industries, earning recognition for consistency, precision, and reliability. What began as a small dream had grown into a dependable brand, trusted by loyal clients.",
  },
  {
    year: 2020,
    title: "2020 - Evolving Beyond Barriers",
    content:
      "2020 tested industries worldwide, and Deekey Tools was no exception. Amid the disruptions of COVID, we faced challenges head-on and used the period as a catalyst for reinvention and resilience. Post-pandemic, we bounced back stronger, transforming obstacles into opportunities and strengthening our capabilities for the future.",
  },
  {
    year: 2025,
    title: "2025 - Legacy in Motion",
    content:
      "Now, Deekey Tools stands as a symbol of grit, trust, and craftsmanship. What began with nothing has grown into everything we are today — and yet, this is not the destination, but another milestone. Our journey continues with the same determination, driven by our mission to engineer precision that lasts.",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(2004);
  const activeData = timelineData.find((item) => item.year === selectedYear);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 !mx-[20px] md:!mx-[40px] mt-[-60px] md:mt-[-20px] flex flex-col gap-[30px] md:gap-[20px]">
      <h2 className="text-center text-[20px] md:text-[26px] xl:text-[36px] font-[600] text-[#A20F05] mb-4">
        Timeline
      </h2>

      {/* Animated Content */}
      <div className="mb-6 xl:max-w-[70%] min-h-[290px] md:min-h-[160px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.year} // re-triggers animation when year changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:absolute w-full"
          >
            <h3 className="text-[#A20F05] text-[15px] md:text-[18px] xl:text-[24px] font-semibold mb-2">
              {activeData.title}
            </h3>
            <p className="text-gray-700 text-[14px] xl:text-[16px] leading-relaxed text-justify">
              {activeData.content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Year Selector */}
      <div className="flex flex-wrap justify-end gap-6 text-gray-600 w-full">
        {timelineData.map((item) => (
          <button
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className={`text-sm font-medium transition-colors hover:cursor-pointer ${
              selectedYear === item.year ? "text-[#A20F05] font-bold" : ""
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
