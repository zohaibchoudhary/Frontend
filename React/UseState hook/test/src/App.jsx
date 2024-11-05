import { useCallback, useState } from "react";
import Child from "../components/child";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const handleCountChange = useCallback(() => {
		setCount((prev) => prev + 1);
	}, [setCount]);

	return (
		<>
			<p>Count is {count}</p>
			<Child handleCountChange={handleCountChange} />
		</>
	);
}

export default App;
