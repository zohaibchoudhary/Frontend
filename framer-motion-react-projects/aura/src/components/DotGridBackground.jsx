import React from "react";
import anime from "animejs/lib/anime.es.js";

export default function WaterDropBackground() {
	return (
		<div className="relative h-screen w-full grid place-content-center px-8 bg-slate-900">
			<DotGrid />
		</div>
	);
}

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
	let dots = [];
	let index = 0;

	const handleDotClick = (e) => {
		anime({
			targets: ".dot-point",
			scale: [
				{ value: 1.3, easing: "easeOutSine", duaration: 250 },
				{ value: 1, easing: "easeInOutQuad", duaration: 500 },
			],
			translateY: [
				{ value: -15, easing: "easeOutSine", duaration: 250 },
				{ value: 0, easing: "easeInOutQuad", duaration: 500 },
			],
			opacity: [
				{ value: 1, easing: "easeOutSine", duaration: 250 },
				{ value: 0.5, easing: "easeInOutQuad", duaration: 500 },
			],
			delay: anime.stagger(100, {
				grid: [GRID_WIDTH, GRID_HEIGHT],
				from: e.target.dataset.index,
			}),
		});
	};

	for (let i = 0; i < GRID_WIDTH; i++) {
		for (let j = 0; j < GRID_HEIGHT; j++) {
			dots.push(
				<div
					onClick={handleDotClick}
					className="group cursor-crosshair p-2 transition-colors hover:bg-slate-600"
					data-index={index}
					key={`${i} - ${j}`}
				>
					<div
						data-index={index}
						className="dot-point h-2 w-2 rounded-full opacity-50 bg-gradient-to-b from-slate-700 to-slate-400 group-hover:from-indigo-600 group-hover:to-white"
					/>
				</div>
			);
      index++
		}
	}

	return (
		<div
			className="grid w-fit"
			style={{
				gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
			}}
		>
			{dots}
		</div>
	);
};
