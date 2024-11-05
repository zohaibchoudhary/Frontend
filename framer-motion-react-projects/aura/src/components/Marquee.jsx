import React from "react";
import { motion } from "framer-motion";

const logos = [
	"HTML",
	"CSS",
	"Javascript",
	"Typescript",
	"Tailwind CSS",
	"React",
	"Express JS",
	"Node JS",
	"MongoDB",
	"Next JS",
];

export default function Marquee({speed, direction}) {
  console.log(direction);
  
	return (
		<div className="w-full font-fredoka bg-neutral-950 text-neutral-100">
			<div className="max-w-7xl mx-auto overflow-x-hidden mask">
        <motion.ul 
        initial={{
          x: direction == "right" ? "calc(-50% - 0.5rem)" : 0,
        }}
        animate={{
          x: direction == "right" ? 0 : "calc(-50% + 0.5rem)"
        }}
        transition={{
          duration: speed === "slow" ? 80 : speed === "fast" ? 20 : 40,
          ease: "linear",
          repeat: Infinity,
        }}
        className={`flex items-center gap-4 py-8 w-max ${direction === "right" ? "flex-row-reverse" : "flex-row"}`}>
          {
            logos.map((logo, index) => (
              <li key={index}
              className="px-4 py-2 text-lg text-nowrap sm:text-xl"
              >{logo}</li>
            ))
          }
          {
            logos.map((logo, index) => (
              <li key={index}
              className="px-4 py-2 text-lg text-nowrap sm:text-xl"
              >{logo}</li>
            ))
          }
        </motion.ul>
      </div>
		</div>
	);
}

