import React from "react";
import { motion } from "framer-motion";

export default function ImageKeyframe() {
	return (
		<div className="relative h-screen w-full bg-gray-900">
			<div className="relative size-72 sm:size-[28rem]  mx-auto sm:m-0">
				<motion.div
          animate={{
            opacity: [1, 0, 0]
          }}
          transition={{
            duration: 9,
            times: [0, 0.33, 1],
            repeat: Infinity
          }}
					className="absolute inset-0 bg-cover bg-center bg-[url('/01-image.png')]"
				/>
				<motion.div
        animate={{
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 9,
          times: [0, 0.33, 1],
          repeat: Infinity
        }}
					className="absolute inset-0 bg-cover bg-center bg-[url('/02-image.png')]"
				/>
				<motion.div
        animate={{
          opacity: [0, 0, 1]
        }}
        transition={{
          duration: 9,
          times: [0, 0.33, 1],
          repeat: Infinity
        }}
					className="absolute inset-0 bg-cover bg-center bg-[url('/03-image.png')]"
				/>
			</div>
		</div>
	);
}
