import React from "react";
import { MousePointer2 } from "lucide-react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion";

export default function HoverCard() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
    mouseYSpring, 
    [-0.5, 0.5], 
    ["17.5deg", "-17.5deg"]
  );

	const rotateY = useTransform(
    mouseXSpring, 
    [-0.5, 0.5], 
    ["-17.5deg", "17.5deg"]
  );

	const handleMouseMove = (e) => {
		const rect = e.target.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;

		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

	return (
		<div className="flex items-center justify-center h-screen px-4 py-12 bg-gradient-to-br from-indigo-500 to-violet-500 font-fredoka">
			<motion.div
				onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
				style={{
          rotateX,
          rotateY,
					transformStyle: "preserve-3d",
				}}
				className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
			>
				<div
					style={{
						transform: "translateZ(75px)",
						transformStyle: "preserve-3d",
					}}
					className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
				>
					<MousePointer2
						style={{
							transform: "translateZ(75px)",
						}}
						className="h-6 w-6 mx-auto"
					/>
					<span
						style={{
							transform: "translateZ(50px)",
						}}
						className="text-center text-xl font-semibold"
					>
						Hover me
					</span>
				</div>
			</motion.div>
		</div>
	);
}
