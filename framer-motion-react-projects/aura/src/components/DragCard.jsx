import React, { useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function DragCard() {
	return (
		<div className="relative grid place-content-center min-h-screen w-full overflow-hidden bg-neutral-950 font-fredoka">
			<h1 className="text-neutral-800 text-[20vw] font-black md:text-[200px] z-0">
				ASTRO
				<span className="text-indigo-700">.</span>
			</h1>
			<Cards />
		</div>
	);
}

const Cards = () => {
	const containerRef = useRef(null);
	return (
		<div ref={containerRef} className="absolute inset-0 z-10">
			<Card
				src={"/04-image.jpg"}
				alt=""
				rotate="6deg"
				top="20%"
				left="25%"
				className="w-36 md:w-56"
				containerRef={containerRef}
			/>
			<Card
				src={"/05-image.jpg"}
				alt=""
				rotate="12deg"
				top="45%"
				left="60%"
				className="w-24 md:w-48"
				containerRef={containerRef}
			/>
			<Card
				src={"/06-image.jpg"}
				alt=""
				rotate="-6deg"
				top="20%"
				left="40%"
				className="w-52 md:w-80"
				containerRef={containerRef}
			/>
			<Card
				src={"/07-image.jpg"}
				alt=""
				rotate="8deg"
				top="50%"
				left="40%"
				className="w-48 md:w-72"
				containerRef={containerRef}
			/>
			<Card
				src={"/08-image.jpg"}
				alt=""
				rotate="18deg"
				top="20%"
				left="65%"
				className="w-40 md:w-64"
				containerRef={containerRef}
			/>
		</div>
	);
};

const Card = ({ src, alt, top, left, rotate, className, containerRef }) => {
	return (
		<motion.img
			drag
			dragConstraints={containerRef}
			src={src}
			alt={alt}
			style={{
				top,
				left,
				rotate,
			}}
			className={twMerge("absolute w-48 p-1 pb-4 bg-neutral-200", className)}
		/>
	);
};
