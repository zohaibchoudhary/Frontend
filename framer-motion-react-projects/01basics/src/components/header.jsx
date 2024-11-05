import { Menu, X } from "lucide-react";
import Container from "@/container";

import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Link, NavLink } from "react-router-dom";
import Products from "@/json/products";
import Features from "@/json/features";
import Solutions from "@/json/solutions";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="bg-white shadow font-poppins sticky z-50 top-0">
			<Container>
				<div className="flex items-center justify-between py-5">
					<div className="inline-flex items-center mr-40">
						<NavLink to="/" className="font-bold text-3xl text-orange-600 tracking-tighter leading-snug">
							TrimLink
						</NavLink>
					</div>
					<div className="hidden grow items-start lg:flex">
						<ul className="inline-flex">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Platform</NavigationMenuTrigger>
										<NavigationMenuContent className="bg-white h-80 overflow-y-scroll">
											<h1 className="w-[95%] mx-auto mt-4 mb-3 text-base font-semibold text-gray-600 tracking-wide uppercase">
												Products
											</h1>
											<hr className="w-[95%] mx-auto text-gray-50" />
											<Products />
											<h1 className="w-[95%] mx-auto mt-4 mb-3 text-base font-semibold text-gray-600 tracking-wide uppercase">
												Features
											</h1>
											<hr className="w-[95%] mx-auto text-gray-50" />
											<Features />
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
										<NavigationMenuContent className="bg-white h-80">
											<h1 className="w-[95%] mx-auto mt-4 mb-1 text-base font-semibold text-gray-600 tracking-wide uppercase">
												By Industry
											</h1>
											<hr className="w-[95%] mx-auto text-gray-50" />
											<Solutions />
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem className="hover:text-orange-600">
										<Link to="/pricing">
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Pricing
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</ul>
					</div>
					<div className="hidden lg:flex">
						<Button
							variant="ghost"
							className="text-dark hover:text-orange-600 rounded-lg tracking-tighter py-4 px-5"
							asChild
						>
							<Link to="/login">Login</Link>
						</Button>
						<Button
							className="text-dark bg-orange-500 font-medium hover:bg-orange-600 rounded-[5px] tracking-tighter py-4 px-5"
							asChild
						>
							<Link to="/signup">Sign up</Link>
						</Button>
					</div>
					<div className="lg:hidden">
						<Menu
							onClick={toggleMenu}
							className="h-7 w-7 cursor-pointer text-gray-800"
						/>
					</div>
					{isMenuOpen && (
						<div className="bg-white absolute inset-x-0 top-0 sm:px-2 z-50 origin-top-right transform transition lg:hidden">
							<div className="py-3 h-screen">
								<div className="px-2 pb-6">
									<div className="flex items-center justify-between mb-4">
										<div className="inline-flex items-center">
											<div className="inline-flex items-center">
												<NavLink
													to="/"
													className="font-bold text-xl text-orange-600 tracking-tight"
												>
													TrimLink
												</NavLink>
											</div>
										</div>
										<div className="-mr-2">
											<button
												type="button"
												onClick={toggleMenu}
												className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
											>
												<span className="sr-only">Close menu</span>
												<X className="h-7 w-7" aria-hidden="true" />
											</button>
										</div>
									</div>
									<div>
										<NavLink
											to="/pricing"
											onClick={() => setIsMenuOpen(false)}
											className={() =>
												`inline-block text-base font-medium`
											}
										>
											Pricing
										</NavLink>
									</div>
									<div className="flex flex-col gap-y-2">
										<Button
											variant="ghost"
											className="block bg-gray-200 text-center rounded-[5px] hover:bg-gray-300 tracking-tight"
											asChild
										>
											<Link to="/">Log in</Link>
										</Button>
										<Button
											className="block bg-orange-500 font-medium hover:bg-orange-600 rounded-[5px] text-center tracking-tight"
											asChild
										>
											<Link to="/">Sign up</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
}
