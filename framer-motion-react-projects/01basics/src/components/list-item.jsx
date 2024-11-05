import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function ListItem({ 
  className, 
  title, 
  icon, 
  children, 
  ...props 
}, ref) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-200",
						className
					)}
					{...props}
				>
					<div className="flex gap-2">
						<div>{icon}</div>
						<div>
							<div className="text-[0.975em] font-medium leading-none tracking-tighter text-gray-900">{title}</div>
							<p className="text-sm tracking-tight text-gray-700 leading-snug text-muted-foreground">
								{children}
							</p>
						</div>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
};

export default React.forwardRef(ListItem)