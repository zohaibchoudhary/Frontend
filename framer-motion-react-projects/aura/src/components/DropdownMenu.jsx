import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DropdownMenu() {
	return (
		<div className="flex min-h-screen justify-center py-6 bg-neutral-900 text-gray-200 font-fredoka">
			<DropdownLink href="#" DropdownContent={PlatformDropdownContent}>
				Platform
			</DropdownLink>
			<DropdownLink href="#" DropdownContent={PlatformDropdownContent}>
				Solutions
			</DropdownLink>
			<DropdownLink href="#">Pricing</DropdownLink>
			<DropdownLink href="#" DropdownContent={PlatformDropdownContent}>
				Resourses
			</DropdownLink>
		</div>
	);
}

const DropdownLink = ({ href, children, DropdownContent }) => {
	const [open, setOpen] = useState(false);

	const showDropdownContent = open && DropdownContent;

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="group relative mx-4 h-fit w-fit"
		>
			<a href={href} className="relative text-lg cursor-pointer text-gray-200">
				{children}
				<span
					style={{
						transform: showDropdownContent ? "scaleX(1)" : "scaleX(0)",
					}}
					className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-[#DD335C] transition-transform duration-300 ease-out"
				/>
			</a>
			<AnimatePresence>
				{showDropdownContent && (
					<motion.div
						initial={{
							opacity: 0,
							y: 15,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						exit={{
							opacity: 0,
							y: 15,
						}}
						style={{
							x: "-50%",
						}}
						transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
						className="absolute top-14 left-1/2"
					>
						<div className="absolute left-0 right-0 -top-6 h-6 bg-transparent" />
						<div className="absolute right-0 -top-3 h-6 w-6 left-1/2 -translate-x-1/2 rotate-45 bg-gray-200" />
						<DropdownContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const PlatformDropdownContent = () => {
	return (
		<div className="bg-gray-200 w-[45rem] h-full shadow text-indigo-600 p-4">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, amet
				sapiente! Nostrum magni minima deserunt odit! Expedita nam repellendus
				at dignissimos ipsa quasi nobis ab hic veniam? Molestiae
			</p>
		</div>
	);
};
