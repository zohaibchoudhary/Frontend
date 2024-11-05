import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
	const [data, setData] = useState({});

	const url = `https://real-time-currency-rates.p.rapidapi.com/getcurrencyrate?symbol=${currency}`;
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": "d0b5a0afa3msh7f07ee6c83e0790p1121bdjsn7231a6374642",
			"x-rapidapi-host": "real-time-currency-rates.p.rapidapi.com",
		},
	};
	useEffect(() => {
		const response = fetch(url, options);
		const result = response.json();
		console.log(result);
		setData(res[currency]);
		return data;
	}, [currency]);
}
