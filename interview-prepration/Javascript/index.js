// hello...
function truncate(value, maxLenght) {
  if (!value) return false;
  
  if (!isNaN(value)) return false;
  
  if (value.length > maxLenght) {
    return value.slice(0, maxLenght) + "..."
  }
}

// console.log(truncate('Hey, everyone', 3));

// 121 121

function isPalindrome(number) {
  if(isNaN(number)) return {
    "message": "Please provide number" 
  };

  const condition = number.toString().split('').reverse().join('')

  if (number === +condition) return true
  return false;
}

// console.log(isPalindrome(121));

function countSeniors(details) {
  const count = 0
  let seniors = []

  for(let i = 0; i < details.length; i++){
    let result = details[i].toString().slice(11, 13)
    if (result > 60) {
      seniors.push(result)
    }

  }
  if (seniors.length > 0) {
    return seniors.length
  };

  return count
}

// console.log(countSeniors([""]));

function setAge(details) {
  let count = 0;
  let seniors = []
  for (const person of details) {
    let age = person.toString().slice(11, 13)
    if (age > 60) {
      seniors.push(age)
    }
  }
  if (seniors.length > 0) {
    return seniors.length
  }

  return count;
}

// setAge(["7654327896F7659", "4567832456M9043"])

function factorial(n) {
  if (n === 0) return 1

  return n * factorial(n-1)
  
}

// console.log(factorial(2));

function hammingDistance(x, y) {
	if (x.length !== y.length) {
		throw new Error("They must be of same lenght");
	}

	let distance = 0;

	for (let i = 0; i < x.length; i++) {

    if (x[i] !== y[i]) {
			distance++;
		}
	}
  return distance

}

// console.log(hammingDistance("ail", "ali"));

const num = 8
const num2 = 9

function hammingDistance(x, y) {
	x = x.toString(2);
	y = y.toString(2);

	if (x.length < y.length) {
		while (x.length !== y.length) x = '0' + x
	} else {
		while (x.length !== y.length) y = '0' + y
	}

	let distance = 0;

	for (let i = 0; i < x.length; i++) {
		if (x[i] !== y[i]) {
			distance++;
		}
	}

	return distance;
}

// console.log(hammingDistance(8, 2))

function isAnagram(x, y) {
  x = x.split('').sort().join('')
  y = y.split('').sort().join('')

  if (x === y) return true
  return false
}

// console.log(isAnagram("rat", "tar"));
