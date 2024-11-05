import React from "react";
import { motion, MotionConfig } from "framer-motion";

export default function Gestures() {
	return (
		<motion.div className="h-96 w-full grid place-content-center gap-4">
			<MotionConfig transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}>
				<motion.button
					whileHover={{
						scale: 1.25,
						rotate: "2.5deg",
					}}
					className="bg-orange-500 text-dark rounded-lg py-2 px-12 font-medium tracking-tighter"
				>
					Click me
				</motion.button>

				<motion.button
					whileHover={{
						scale: 1.25,
						rotate: "-2.5deg",
					}}
					className="bg-dark text-white rounded-lg py-2 px-12 font-medium tracking-tighter"
				>
					Click me
				</motion.button>
			</MotionConfig>
		</motion.div>
	);
}
