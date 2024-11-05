import "./App.css";
import EmblaCarousel from "./components/EmblaCarousal";

function App() {
	const OPTIONS = {};
	const SLIDE_COUNT = 5;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<>
			<EmblaCarousel slides={SLIDES} options={OPTIONS} />
		</>
	);
}

export default App;
