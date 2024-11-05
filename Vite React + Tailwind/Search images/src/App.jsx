import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/form";

function App() {
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(false);
	const [images, setImages] = useState({});

	const searchHandler = async () => {
		setLoading(true);
		setErrors(false);

		try {
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?client_id=${
					import.meta.env.VITE_ACCESS_KEY
				}&query=boxing`
			);

			console.log(data);
			setImages(data);
			console.log(images);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const getImageIndex = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		searchHandler();
	}, []);

	return (
		<div className="app">
			<Form />
			<div className="relative grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 sm:p-5">
				{images?.results?.map((obj) => {
					return (
						<div
							key={obj.id}
							className="shadow hover:shadow-2xl sm:hover:shadow-teal-500 sm:active:shadow-teal-400"
						>
							<img
								className="object-cover object-center w-full h-72 rounded-xl"
								height={obj.height}
								width={obj.width}
								src={obj.urls.small}
								alt=""
								onClick={getImageIndex}
							/>
						</div>
					);
				})}

				<div className="absolute">
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
}

export default App;
