import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ButtonHover() {
	const btnRef = useRef(null);
	const spanRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const { width } = e.target.getBoundingClientRect();

			const offset = e.offsetX;

			const left = `${(offset / width) * 100}%`;

			spanRef.current.animate({ left }, { duration: 500, fill: "forwards" });
		};

		const handleMouseLeave = (e) => {
			spanRef.current.animate(
				{ left: "50%" },
				{ duration: 250, fill: "forwards" }
			);
		};

		btnRef.current.addEventListener("mousemove", handleMouseMove);

		btnRef.current.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			btnRef.current.removeEventListener("mousemove", handleMouseMove);
			btnRef.current.removeEventListener("mousemove", handleMouseLeave);
		};
	}, []);
	return (
		<div className="relative h-screen flex items-center justify-center bg-slate-900">
			<motion.button
				whileTap={{ scale: 0.985 }}
				ref={btnRef}
				className="relative w-full max-w-xs px-4 py-3 rounded-lg font-fredoka font-medium text-lg overflow-hidden bg-black text-white hover:bg-black/50"
			>
				<span className="relative pointer-events-none mix-blend-difference z-10">
					Reserve
				</span>
				<span
					ref={spanRef}
					className="absolute pointer-events-none left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] h-full w-36 rounded-full bg-slate-200"
				/>
			</motion.button>
		</div>
	);
}
