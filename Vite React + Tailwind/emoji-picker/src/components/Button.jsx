import React from "react";

export default function Button({ children, handleFunction, className, ...props }) {
	return (
		<>
			<button
				className={`bg-transparent rounded-full p-2 ${className}
        hover:bg-slate-500 active:bg-slate-500 duration-200 outline-none border-none`}
				onClick={handleFunction}
				{...props}
			>
				{children}
			</button>
		</>
	);
}
