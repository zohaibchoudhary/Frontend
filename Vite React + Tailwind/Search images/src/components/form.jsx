import React from "react";

function Form() {
	return (
		<form className="flex">
			<input
				type="text"
				placeholder="Search Images..."
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
			/>
			<button
				type="submit"
				className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
			>
				Search
			</button>
		</form>
	);
}

export default Form;
