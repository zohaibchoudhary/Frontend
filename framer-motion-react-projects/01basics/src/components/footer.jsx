import Container from "@/container";
import React from "react";
import { Link } from "react-router-dom";
import { services } from "@/json/solutions";
import { products } from "@/json/products";
import { features } from "@/json/features";
import { resorces } from "@/json/resources";
import { legals } from "@/json/legal";
import { companies } from "@/json/company";

import { Copyright, FacebookIcon } from "lucide-react";
import {
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Footer() {
	return (
		<>
			<footer className="z-10 font-poppins bg-dark text-white py-14">
				<Container>
					<div className="grid sm:grid-cols-12 gap-8 max-h-max">
						<div className="grid sm:col-span-4 h-max lg:col-span-2">
							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 mb-4">
								Why TrimLink?
							</h4>
							<div className="flex flex-col gap-3">
								<Link className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2">
									Integrations & API
								</Link>
								<Link className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2">
									Enterprise Class
								</Link>
								<Link className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2">
									Pricing
								</Link>
							</div>
						</div>
						<div className="grid sm:col-span-4 h-max lg:col-span-2">
							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 mb-4">
								Products
							</h4>
							<div className="flex flex-col gap-3">
								{products &&
									products.map((product) => (
										<Link
											to={product.to}
											className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2"
										>
											{product.title}
										</Link>
									))}
							</div>

							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 my-4">
								Features
							</h4>
							<div className="flex flex-col gap-3">
								{features &&
									features.map((feature) => (
										<Link
											to={feature.to}
											className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2"
										>
											{feature.title}
										</Link>
									))}
							</div>
						</div>
						<div className="grid sm:col-span-4 h-max lg:col-span-2">
							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 mb-4">
								Solutions
							</h4>
							<div className="flex flex-col gap-3">
								{services &&
									services.map((service) => (
										<Link
											to={service.to}
											className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2"
										>
											{service.title}
										</Link>
									))}
							</div>
						</div>
						<div className="grid sm:col-span-4 h-max lg:col-span-2">
							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 mb-4">
								Resources
							</h4>
							<div className="flex flex-col gap-3">
								{resorces &&
									resorces.map((resorce) => (
										<Link
											to={resorce.to}
											className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2"
										>
											{resorce.title}
										</Link>
									))}
							</div>
						</div>
						<div className="grid sm:col-span-4 h-max lg:col-span-2">
							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 mb-4">
								Legal
							</h4>
							<div className="flex flex-col gap-3">
								{legals &&
									legals.map((legal) => (
										<Link
											to={legal.to}
											className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2"
										>
											{legal.title}
										</Link>
									))}
							</div>
						</div>
						<div className="grid sm:col-span-4 h-max lg:col-span-2">
							<h4 className="text-base md:text-lg font-medium tracking-tight text-orange-500 mb-4">
								Company
							</h4>
							<div className="flex flex-col gap-3">
								{companies &&
									companies.map((company) => (
										<Link
											to={company.to}
											className="text-sm md:text-base font-normal tracking-tighter hover:underline hover:underline-offset-2"
										>
											{company.title}
										</Link>
									))}
							</div>
						</div>
					</div>
					<hr className="my-8" />
					<div className="w-full flex justify-between items-center flex-wrap">
						<div className="order-1">
							<h1 className="text-2xl text-orange-600 font-bold tracking-wider">
								TrimLink
							</h1>
						</div>
						<div className="order-3 sm:order-2 sm:m-0 sm:p-0 pt-7 mx-auto">
							<p className="flex items-center text-sm font-normal gap-1 tracking-tighter">
								<Copyright className="h-4 w-4" />
								2024 TrimLink. All rights reserved
							</p>
						</div>
						<div className="flex gap-2 order-2 sm:order-3">
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:border hover:border-orange-500"
							>
								<TwitterLogoIcon className="h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:border hover:border-orange-500"
							>
								<InstagramLogoIcon className="h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:border hover:border-orange-500"
							>
								<FacebookIcon className="h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:border hover:border-orange-500"
							>
								<LinkedInLogoIcon className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</Container>
			</footer>
		</>
	);
}
