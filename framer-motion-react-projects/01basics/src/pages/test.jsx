import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BasicsOfFramerMotion() {
	const [isVisible, setIsVisible] = useState(true);
	return (
		<div className="grid place-content-center h-[90vh] font-poppins gap-3 bg-[#F4F6FA]">
			<motion.button
        layout
				onClick={() => setIsVisible(!isVisible)}
				className="border-2 border-orange-500 rounded-lg py-2 px-12 font-medium tracking-tighter text-dark"
			>
				Show / Hide
			</motion.button>
      <AnimatePresence mode="popLayout">
			{isVisible && (
				<motion.div
					initial={{
						rotate: "0deg",
            scale: 0,
            y: 0,
            backgroundColor: "white"
					}}
					animate={{
						rotate: "180deg",
            scale: 1,
            y: [0, 150, -150, -150, 0],
            backgroundColor: "#F97316"
					}}
					exit={{
						rotate: "0deg",
            scale: 0,
            y: 0,
            backgroundColor: "purple"
					}}
					transition={{
						duration: 1,
						ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.95, 1]
					}}
					className="h-48 w-48"
				>
        </motion.div>
			)}
      </AnimatePresence>
		</div>
	);
}

