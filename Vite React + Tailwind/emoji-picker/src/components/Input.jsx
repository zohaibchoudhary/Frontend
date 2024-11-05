import React from "react";

export default function Input() {
	return (
		<>
			<input
				type="text"
				placeholder="Message..."
				className="w-full h-11 bg-secondary rounded-xl outline outline-[1px] outline-zinc-500 border-0 py-2 px-3 text-white font-light placeholder:text-white/70"
			/>
		</>
	);
}
