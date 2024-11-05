import Loader from "@/components/loader";
import Test from "@/pages/test";
import { LocalStorage } from "@/utils";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
	user: null,
	token: null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
			const _user = LocalStorage.get("user");
			const _token = LocalStorage.get("token");
			if (_user?._id && _token) {
				setUser(_user);
				setToken(_token);
			}
		setIsLoading(false);
	}, []);

	return (
		<AuthContext.Provider value={{ user, token }}>
			{isLoading ? "loading..." : children}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthProvider };
