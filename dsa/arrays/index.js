class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	get(index) {
		return this.data[index];
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	shift() {
		const firstItem = this.data[0];

		for (let i = 0; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
      
		}

		delete this.data[this.length - 1];
    this.length--
		return firstItem;
	}

  deleteByIndex(index) {
    const item = this.data[index]

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    
    delete this.data[this.length - 1]
    this.length--
    return item
  }
}

const myNewArray = new MyArray();
// myNewArray.push("apple");
// myNewArray.push("banana");
// myNewArray.push("mango");
// myNewArray.get(2);
// myNewArray.pop();
// myNewArray.shift();
// myNewArray.deleteByIndex(1)
// console.log(myNewArray);

function isPalindrome(str) {
	const reversed = str.split("").reverse().join("");
	if (reversed === str) return true;
	return false;
}

const isPalindrome = (str) => {
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};

const isPalindrome = (str) => str.split("").reverse().join("") === str;

// console.log(isPalindrome("racecar"))

const capitalize = (str) => {
	return str
		.toLowerCase()
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
};

// console.log(capitalize("hello world"));

const fizzbuzz = (n) => {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};

// fizzbuzz(15)

const twoSum = (array, target) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				return [i, j];
			}
		}
	}
};

// console.log(twoSum([2, 7, 5, 11], 9))

const maxProfit = (prices) => {
	let minPrice = prices[0];
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		const currPrice = prices[i];

		minPrice = Math.min(minPrice, currPrice);

		const potentialProfit = currPrice - minPrice;
		maxProfit = Math.max(maxProfit, potentialProfit);
	}

	return maxProfit;
};

const profit = maxProfit([4, 7, 1, 3, 5, 2, 6]);
// console.log("Maximum Profit =", profit);

const arrayChunk = (array, size) => {
	let chunkedArray = [];
	let index = 0;

	while (index < array.length) {
		chunkedArray.push(array.slice(index, index + size));
		index += size;
	}
	return chunkedArray;
};

const chunkedArray = arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 4);
// console.log(chunkedArray);
