import React, { useRef } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Rocket } from "lucide-react";
import {
	motion,
	useMotionTemplate,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";

export default function SmoothScroll() {
	return (
		<div className="bg-zinc-950 font-fredoka text-white">
			<ReactLenis root options={
				{lerp: 0.05}
			}>
				<Nav />
				<HeroSection />
				<Schedule />
			</ReactLenis>
		</div>
	);
}

const Nav = () => {
	return (
		<div className="fixed w-full top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50">
			<div className="flex items-center gap-2 text-lg">
				<Rocket className="h-7 w-8 mix-blend-difference" />
				<span className="mix-blend-difference">SpaceX</span>
			</div>
			<h3 className="hidden text-lg sm:block">
				Parallax Smooth Scrolling by Zohaib
			</h3>
			<button className="bg-neutral-900 text-base px-4 py-2 rounded-lg">
				Launch Rocket
			</button>
		</div>
	);
};

const SECTION_HEIGHT = 1500;

const HeroSection = () => {
	return (
		<div
			style={{
				height: `calc(${SECTION_HEIGHT}px + 100vh)`,
			}}
			className="relative w-full"
		>
			<CenterImage />
			<ParallaxImages />
			<div className="absolute h-96 left-0 right-0 bottom-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
		</div>
	);
};

const CenterImage = () => {
	const { scrollY } = useScroll();

	const opacity = useTransform(
		scrollY,
		[SECTION_HEIGHT, SECTION_HEIGHT + 500],
		[1, 0]
	);

	const backgroundSize = useTransform(
		scrollY,
		[0, SECTION_HEIGHT + 500],
		["170%", "100%"]
	);

	const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
	const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

	const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%,${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

	return (
		<motion.div
			className="sticky h-screen w-full top-0 bg-center bg-no-repeat"
			style={{
				opacity,
				clipPath,
				backgroundSize,
				backgroundImage:
					"url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
			}}
		/>
	);
};

const ParallaxImages = () => {
	return (
		<div className="mx-auto max-w-5xl px-4 pt-[200px]">
			<ParallaxImg
				src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="And example of a space launch"
				start={-200}
				end={200}
				className="w-1/3"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="An example of a space launch"
				start={200}
				end={-250}
				className="mx-auto w-2/3"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={-200}
				end={200}
				className="ml-auto w-1/3"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={0}
				end={-500}
				className="ml-24 w-5/12"
			/>
		</div>
	);
};

const ParallaxImg = ({ src, alt, className, start, end }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: [`${start}px end`, `end ${end * -1}px`],
	});

	// -200 -> 200
	// 200 -> -250

	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

	const y = useTransform(scrollYProgress, [0, 1], [start, end]);

	console.log(y);

	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

	useMotionValueEvent(scrollYProgress, "change", (latest) =>
		console.log(latest)
	);

	return (
		<motion.img
			style={{ opacity, transform }}
			ref={ref}
			src={src}
			alt={alt}
			className={className}
		/>
	);
};

const Schedule = () => {
	return (
		<section
			id="launch-schedule"
			className="mx-auto max-w-5xl px-4 py-48 text-white"
		>
			<motion.h1
				initial={{ y: 48, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.75 }}
				className="mb-20 text-4xl font-black uppercase text-zinc-50"
			>
				Launch Schedule
			</motion.h1>
			<ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
			<ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
			<ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
			<ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
			<ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
			<ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
			<ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
		</section>
	);
};

const ScheduleItem = ({ title, date, location }) => {
	return (
		<motion.div
			initial={{ y: 48, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.75 }}
			className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
		>
			<div>
				<p className="mb-1.5 text-xl text-zinc-50">{title}</p>
				<p className="text-sm uppercase text-zinc-500">{date}</p>
			</div>
			<div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
				<p>{location}</p>
				<Rocket />
			</div>
		</motion.div>
	);
};
