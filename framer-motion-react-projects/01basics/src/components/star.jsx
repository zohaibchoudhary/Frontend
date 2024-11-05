import React from "react";
import { Star as StarIcon } from "lucide-react";

export default function Star() {
	return (
		<div className="flex">
			{[...Array(5)].map((_, index) => (
				<StarIcon className="h-5 w-5 text-yellow-400" />
			))}
		</div>
	);
}
