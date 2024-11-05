import React from "react";
import {
	Bars3Icon,
	ChatBubbleBottomCenterIcon,
	PhoneIcon,
	UsersIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
	return (
		<aside className="flex h-screen w-64 flex-col overflow-y-auto border-r px-5 py-8 bg-secondary">
			<a
				className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
				href="#"
			>
				<Bars3Icon class="h-6 w-6 text-white-500" />
				<span className="mx-2 text-sm font-medium">ChatAPP</span>
			</a>
			<div className="mt-6 flex flex-1 flex-col justify-between">
				<nav className="-mx-3 space-y-6 ">
					<div className="space-y-3 ">
						<a
							className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
							href="#"
						>
							<ChatBubbleBottomCenterIcon className="h-5 w-6 text-white/90" />
							<span className="mx-2 text-sm font-medium">Messages</span>
						</a>
						<a
							className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
							href="#"
						>
							<PhoneIcon className="h-5 w-6 text-white/90" />
							<span className="mx-2 text-sm font-medium">Calls</span>
						</a>
						<a
							className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
							href="#"
						>
							<UsersIcon className="h-5 w-6 text-white/90" />
							<span className="mx-2 text-sm font-medium">Community</span>
						</a>
					</div>
				</nav>
			</div>
		</aside>
	);
}

export default Navbar;

<aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
	<a
		className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
		href="#"
	>
		<Bars3Icon class="h-6 w-6 text-white-500" />
		<span className="mx-2 text-sm font-medium">Messages</span>
	</a>
	<div className="mt-6 flex flex-1 flex-col justify-between">
		<nav className="-mx-3 space-y-6 ">
			<div className="space-y-3 ">
				<a
					className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
					href="#"
				>
					<ChatBubbleBottomCenterIcon className="h-5 w-6 text-white/90" />
					<span className="mx-2 text-sm font-medium">Messages</span>
				</a>
				<a
					className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
					href="#"
				>
					<PhoneIcon className="h-5 w-6 text-white/90" />
					<span className="mx-2 text-sm font-medium">Calls</span>
				</a>
				<a
					className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
					href="#"
				>
					<UsersIcon className="h-5 w-6 text-white/90" />
					<span className="mx-2 text-sm font-medium">Community</span>
				</a>
			</div>
		</nav>
	</div>
</aside>;
