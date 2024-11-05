import React from "react";
import { Link as LinkIcon, QrCode, ChartNoAxesColumn } from "lucide-react";
import ListItem from "@/components/list-item";

export const products = [
	{
		title: "URL Shortner",
		to: "/",
		icon: <LinkIcon className="h-5 w-6" />,
		description: "Customize, share and track links",
	},
	{
		title: "QR Codes",
		to: "/",
		icon: <QrCode className="h-5 w-6" />,
		description: "Dynamic solutions to fit every business needs",
	},
	{
		title: "Analytics",
		to: "/",
		icon: <ChartNoAxesColumn className="h-5 w-6" />,
		description:
			"A central place to track and analyze peformance of all short links and QR Codes",
	},
];

export default function Products() {
	return (
		<>
			<ul className="grid grid-cols-1 w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
				{products.map((product) => (
					<ListItem
						key={product.title}
						title={product.title}
						to={product.to}
						icon={product.icon}
					>
						{product.description}
					</ListItem>
				))}
			</ul>
		</>
	);
}
