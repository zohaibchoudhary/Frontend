
const main = document.querySelector("#main");
const addUser = document.querySelector("#add-user");
const double = document.querySelector("#double");
const millionaires = document.querySelector("#show-millionaires");
const sort = document.querySelector("#sort");
const total = document.querySelector("#calculate-total");

let data = [];

generateRandomUser();
generateRandomUser();
generateRandomUser();

async function generateRandomUser() {
	const res = await fetch("https://randomuser.me/api");

	const data = await res.json();

	const user = data.results[0];

	const newUser = {
		name: `${user.name.first} ${user.name.last}`,
		worth: Math.round(Math.random() * 1000000),
	};

	addData(newUser);
}

function addData(newUser) {
	data.push(newUser);

	updateDom();
}

function doubleWorth() {
	data = data.map((item) => {
		return {
			...item,
			worth: item.worth * 2,
		};
	});
	
	updateDom();
}

function sortRichest() {
	data.sort((a, b) => b.worth - a.worth);
	updateDom();
}

function showMillionaires() {
	data = data.filter((item) => item.worth > 1000000);
	updateDom();
}

function calculateTotalNetWorth() {
	const worth = data.reduce((acc, item) => acc + item.worth, 0);

	const totalNetWorthElement = document.createElement("div");

	totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${formatCurrency(
		worth
	)}</strong></h3>`;

	main.appendChild(totalNetWorthElement);
}

function formatCurrency(num) {
	return "PKR " + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function updateDom(inputData = data) {

	main.innerHTML = "<h2><strong>Name</strong> Net Worth</h2>";

	inputData.forEach((item) => {
		const element = document.createElement("div");
		element.classList.add("name");
		element.innerHTML = `<strong>${item.name}</strong> ${formatCurrency(
			item.worth
		)}`;
		main.appendChild(element);
	});
}

addUser.addEventListener("click", generateRandomUser);
double.addEventListener("click", doubleWorth);
millionaires.addEventListener("click", showMillionaires);
sort.addEventListener("click", sortRichest);
total.addEventListener("click", calculateTotalNetWorth);
