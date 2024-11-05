import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function ServicesList({ className, children, ...props }, ref) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-xl p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-200",
						className
					)}
					{...props}
				>
					<div className="text-[0.975em] text-gray-900 py-1 px-1 font-medium leading-none tracking-tighter">{children}</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}

export default React.forwardRef(ServicesList);