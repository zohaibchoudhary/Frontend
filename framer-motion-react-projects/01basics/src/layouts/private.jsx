import Header from "@/components/private/header";
import Sidebar from "@/components/private/sidebar";
import { Outlet } from "react-router-dom";

function PrivateLayout() {
	return (
		<div className="flex">
			<div>
				<Sidebar />
			</div>
			<div className="relative flex flex-col flex-1">
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default PrivateLayout;
