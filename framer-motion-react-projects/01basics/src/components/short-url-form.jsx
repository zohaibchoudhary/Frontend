import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ShortURLForm() {
	return (
		<Card className="bg-white sm:rounded-3xl mt-10 text-dark px-3 sm:p-6">
			<CardHeader className="space-y-4">
				<CardTitle className="text-2xl sm:text-3xl tracking-tighter">
					Shorten a long link
				</CardTitle>
				<CardDescription className="text-base font-medium tracking-tighter">
					No credit card required.
				</CardDescription>
			</CardHeader>
			<CardContent className="mt-4 sm:mt-10 mb-3 sm:mb-7">
				<div className="grid w-full items-center gap-3">
					<Label
						htmlFor="email"
						className="w-max text-lg sm:text-xl tracking-tighter font-semibold"
					>
						Paste your long link here
					</Label>
					<Input
						type="text"
						className="sm:text-base sm:px-4 rounded-xl"
						placeholder="https://example.com/my-long-url"
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Link
					to="/pricing"
					className="flex items-center w-full justify-center gap-2 sm:text-lg bg-orange-500 hover:bg-orange-600 text-center sm:w-max px-6 py-3 font-medium text-dark rounded-full tracking-tight"
				>
					Get your link for free <ArrowRight className="h-5 w-5" />
				</Link>
			</CardFooter>
		</Card>
	);
}
