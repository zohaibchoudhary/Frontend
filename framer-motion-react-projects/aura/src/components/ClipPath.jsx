import React from "react";
import {
	Aperture,
	Facebook,
	Instagram,
	Music,
	Rocket,
	Twitter,
} from "lucide-react";
import { useAnimate } from "framer-motion";

export default function ClipPath() {
	return (
		<div className="h-screen px-4 py-12 bg-neutral-200">
			<div className="mx-auto max-w-7xl">
				<ClipPathLinks />
			</div>
		</div>
	);
}

const ClipPathLinks = () => {
	return (
		<div className="divide-y divide-neutral-900 border border-neutral-900">
			<div className="grid grid-cols-2 divide-x divide-neutral-900">
				<LinkBox href="#" Icon={Rocket} />
				<LinkBox href="#" Icon={Music} />
			</div>
			<div className="grid grid-cols-4 divide-x divide-neutral-900">
				<LinkBox href="#" Icon={Facebook} />
				<LinkBox href="#" Icon={Instagram} />
				<LinkBox href="#" Icon={Twitter} />
				<LinkBox href="#" Icon={Aperture} />
			</div>
			<div className="grid grid-cols-3 divide-x divide-neutral-900">
				<LinkBox href="#" Icon={Music} />
				<LinkBox href="#" Icon={Facebook} />
				<LinkBox href="#" Icon={Rocket} />
			</div>
		</div>
	);
};

const NoClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

const TopLeftClip = "polygon(100% 100%, 100% 0%, 100% 100%, 0 100%)";
const TopRightClip = "polygon(0 0, 0 100%, 100% 100%, 0 100%)";

const BottomLeftClip = "polygon(0 0, 100% 0%, 100% 100%, 100% 0)";
const BottomRightClip = "polygon(0 0, 100% 0%, 0 0, 0 100%)";

const EntranceKeyframes = {
	top: [BottomRightClip, NoClip],
	bottom: [BottomRightClip, NoClip],
	left: [BottomRightClip, NoClip],
	right: [BottomLeftClip, NoClip],
};

const ExitKeyframes = {
	top: [NoClip, TopRightClip],
	bottom: [NoClip, TopRightClip],
	left: [NoClip, TopRightClip],
	right: [NoClip, TopLeftClip],
};

const LinkBox = ({ href, Icon }) => {
	const [scope, animate] = useAnimate();

	const handleMouseEnter = (e) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EntranceKeyframes[side],
		});
	};

	const handleMouseLeave = (e) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: ExitKeyframes[side],
		});
	};

	const getNearestSide = (e) => {
		const box = e.target.getBoundingClientRect();

		const proximityToLeft = {
			proximity: Math.abs(box.left - e.clientX),
			side: "left",
		};

		const proximityToRight = {
			proximity: Math.abs(box.right - e.clientX),
			side: "right",
		};

		const proximityToTop = {
			proximity: Math.abs(box.top - e.clientY),
			side: "top",
		};
		const proximityToBottom = {
			proximity: Math.abs(box.bottom - e.clientY),
			side: "bottom",
		};

		const sortedProximity = [
			proximityToTop,
			proximityToBottom,
			proximityToLeft,
			proximityToRight,
		].sort((a, b) => a.proximity - b.proximity);

		return sortedProximity[0].side;
	};
	return (
		<a
			onMouseEnter={(e) => handleMouseEnter(e)}
			onMouseLeave={(e) => handleMouseLeave(e)}
			href={href}
			className="relative grid place-content-center w-full h-20 sm:h-28 md:h-36"
		>
			<Icon className="text-xl sm:text-3xl md:text-4xl" />
			<div
				ref={scope}
				style={{
					clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)",
				}}
				className="absolute inset-0 grid place-content-center bg-neutral-900"
			>
				<Icon className="text-xl text-white sm:text-3xl md:text-4xl" />
			</div>
		</a>
	);
};
