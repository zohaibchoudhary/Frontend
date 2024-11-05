import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PublicLayout from "./layouts/public";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { useAuth } from "./context/AuthContext";
import BasicsOfFramerMotion from "./pages/test";
import PrivateLayout from "./layouts/private";
import { useEffect } from "react";
import { LocalStorage } from "./utils";
import Gestures from "./pages/gestures";
import AnimationControls from "./pages/controls";
import ViewBasedAnimations from "./pages/viewbased";
import ScrollBasedAnimations from "./pages/scroll";


function App() {
	// const { user } = useAuth();
	// console.log(user);

	const isAuthenticated = () => {
		const user = LocalStorage.get("user");

		if (!user) return false;
		return true;
	};

	return (
		<>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Route>

				<Route element={<PrivateLayout />}>
					<Route path="/dashboard" element={<BasicsOfFramerMotion />} />
					<Route path="/gestures" element={<Gestures />} />
					<Route path="/controls" element={<AnimationControls />} />
					<Route path="/view" element={<ViewBasedAnimations />} />
					<Route path="/scroll" element={<ScrollBasedAnimations />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
