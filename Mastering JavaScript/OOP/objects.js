function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.value = 2;

// console.log(multiplyBy5.value); // we can access like objects
// console.log(multiplyBy5.prototype);

function createUser(username, price) {
	this.username = username; // this.username is variable name
	this.price = price;
}

createUser.prototype.increment = function () {
	return this.price++
};

createUser.prototype.printMe = function () {
	console.log(`price is ${this.price}`);
};

const chai = new createUser("chai", 121);
const tea = new createUser("tea", 122);

// chai.printMe()
// tea.printMe()

// console.log(chai.increment());
// console.log(tea.increment());
