import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState({})
	// useEffect(() => {
	//     fetch(`https://api.github.com/users/zohaib4321`)
	//     .then((res) => res.json())
	//     .then((data) => setData(data))
	// }, []);

	return (
		<div className="text-center m-4 bg-orange-500 text-white text-2xl p-2 rounded-lg">
			Github Followers : {data.followers}
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const res = await fetch(`https://api.github.com/users/zohaib4321`);
	return res.json();
};
