import React, { useState } from "react";
import {
	Plus,
	House,
	Link as LinkIcon,
	QrCode,
	ChartNoAxesColumn,
	Sparkles,
	Settings,
	ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Sidebar() {
	const [open, setOpen] = useState(true);
	const [selected, setSelected] = useState("Home");
	return (
		<motion.nav
			layout
			className={`hidden z-50 sticky top-0 h-screen shrink-0 border-r border-slate-300 py-3 px-3 bg-white ${
				open ? "lg:w-64" : "w-fit"
			} md:inline-block`}
		>
			<TitleSection open={open} />
			<div className="">
				<CreateButton open={open} />
				<hr className="border-t border-slate-300" />
				<div className="space-y-3 mt-3">
					<Option
						open={open}
						Icon={House}
						title="Home"
						selected={selected}
						setSelected={setSelected}
					/>
					<Option
						open={open}
						Icon={LinkIcon}
						title="Links"
						notifs={3}
						selected={selected}
						setSelected={setSelected}
					/>
					<Option
						open={open}
						Icon={QrCode}
						title="QR Codes"
						selected={selected}
						setSelected={setSelected}
					/>
					<Option
						open={open}
						Icon={ChartNoAxesColumn}
						title="Analytics"
						selected={selected}
						setSelected={setSelected}
					/>
					<Option
						open={open}
						Icon={Sparkles}
						title="Custom domains"
						selected={selected}
						setSelected={setSelected}
					/>
					<hr className="border-t border-slate-300" />
					<Option
						open={open}
						Icon={Settings}
						title="Settings"
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
			</div>

			<ToggleClose open={open} setOpen={setOpen} />
		</motion.nav>
	);
}

const TitleSection = ({ open }) => {
	return (
		<div className="mb-3 pb-3 text-dark">
			<div
				className={`w-full flex items-center justify-between cursor-pointer shrink-0 transition-colors`}
			>
				<div className="lg:flex items-center gap-2 w-full">
					<Logo />
					{open && (
						<motion.div
							layout
							initial={{
								opacity: 0,
								y: 12,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{ duration: 0.3 }}
						>
							<span className="hidden text-base font-semibold leading-5 lg:block">
								Zohaib Choudhary
							</span>
							<span className="hidden text-sm font-normal lg:block">Pro Plan</span>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

const Logo = () => {
	return (
		<motion.div
			layout
			className="bg-orange-500 grid place-content-center w-11 mx-auto h-11 rounded-full lg:w-11 lg:m-0"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="27"
				height="auto"
				viewBox="0 0 32 32"
				className="fill-slate-50"
			>
				<path d="M 12 4 C 9.8026661 4 8 5.8026661 8 8 C 5.8026661 8 4 9.8026661 4 12 L 4 24 C 4 26.197334 5.8026661 28 8 28 L 20 28 C 22.197334 28 24 26.197334 24 24 C 26.197334 24 28 22.197334 28 20 L 28 8 C 28 5.8026661 26.197334 4 24 4 L 12 4 z M 12 6 L 24 6 C 25.116666 6 26 6.8833339 26 8 L 26 20 C 26 21.116666 25.116666 22 24 22 L 11 22 C 10.43497 22 10 21.56503 10 21 L 10 14 L 12 14 L 12 18 C 12 19.093063 12.906937 20 14 20 L 18 20 L 20 20 L 22 20 C 23.093063 20 24 19.093063 24 18 L 24 11 C 24 9.3550302 22.64497 8 21 8 L 10 8 C 10 6.8833339 10.883334 6 12 6 z M 8 10 L 21 10 C 21.56503 10 22 10.43497 22 11 L 22 18 L 20 18 L 20 14 C 20 12.906937 19.093063 12 18 12 L 14 12 L 12 12 L 10 12 C 8.9069372 12 8 12.906937 8 14 L 8 21 C 8 22.64497 9.3550302 24 11 24 L 22 24 C 22 25.116666 21.116666 26 20 26 L 8 26 C 6.8833339 26 6 25.116666 6 24 L 6 12 C 6 10.883334 6.8833339 10 8 10 z M 14 14 L 18 14 L 18 18 L 14 18 L 14 14 z"></path>
			</svg>
		</motion.div>
	);
};

const CreateButton = ({ open }) => {
	return (
		<motion.button
			layout
			initial={{
				opacity: 0,
				y: 12,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{ duration: 0.3 }}
			className="bg-[#022D94] w-full text-white py-2 my-3 flex items-center justify-center font-semibold text-sm tracking-tight leading-6 rounded-[5px] hover:bg-[#0C3EBB]"
		>
			{open ? <>
			<span className="hidden lg:block">Create new</span>
			<Plus className="block lg:hidden" />
			</> : <Plus />}
		</motion.button>
	);
};

const Option = ({ open, Icon, title, selected, setSelected, notifs }) => {
	return (
		<button
			onClick={() => setSelected(title)}
			className={`relative flex items-center rounded-[5px] h-10 w-full transition-colors ${
				selected === title
					? "bg-[#EDF2FF] text-[#0C3EBB]"
					: "text-dark hover:bg-slate-100"
			}`}
		>
			<motion.div
				layout
				className={`grid place-content-center h-6 ${
					selected === title ? "border-l-4" : ""
				} border-[#0C3EBB] w-12`}
			>
				<Icon className={`h-5 w-5 ${selected === title ? "-ml-1" : ""}`} />
			</motion.div>
			{open && (
				<motion.span
					layout
					initial={{
						opacity: 0,
						y: 12,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{ duration: 0.3 }}
					className="text-sm font-semibold hidden lg:inline-block"
				>
					{title}
				</motion.span>
			)}
			{notifs && open && (
				<motion.span
					initial={{
						opacity: 0,
						scale: 0,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{ delay: 0.5 }}
					className="text-white text-sm bg-indigo-500 absolute right-3 px-2 rounded-full hidden lg:inline-block"
				>
					{notifs}
				</motion.span>
			)}
		</button>
	);
};

const ToggleClose = ({ open, setOpen }) => {
	return (
		<motion.button
		layout
			onClick={() => setOpen((prev) => !prev)}
			className="hidden absolute bottom-8 h-10 -right-5 lg:flex justify-center items-center rounded-full text-dark bg-white shadow-2xl border border-slate-300 hover:bg-white w-10"
		>
			<ChevronRight
				className={`h-4  w-5 ${
					open ? "rotate-180 duration-500" : "rotate-0 duration-500"
				}`}
			/>
		</motion.button>
	);
};

