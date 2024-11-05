function twoSum(nums, target) {
	const newArr = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				newArr.push(i, j);
				return newArr;
			}
		}
	}
}

// const nums = [2, 3, 3];
// twoSum(nums, 6);

function twoSumHashMap(nums, target) {
	const numMap = {};
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		// 9 -> 9-2 = 7
		// 9 -> 9-3 = 6
		// 9 -> 9-3 = 6

		if (numMap[complement] !== undefined) {
			console.log([numMap[complement], i]);
		}

		numMap[nums[i]] = i;
	}
}

// const nums = [2, 3, 3];
// twoSumHashMap(nums, 9);

// [3, 0, 1] -> lenth = 3 -> [0 - 3]
function missingNumber(nums) {
	const n = nums.length;
	const sum = (n * (n + 1)) / 2;
	let arrSum = 0;
	for (let i = 0; i < nums.length; i++) {
		arrSum += nums[i];
	}

	return sum - arrSum;
}

// const nums = [3, 0, 1]
// missingNumber(nums)


function removeDuplicates(nums) {
	let filterdNums = new Set([...nums])
	let k = [...filterdNums]
	return k
}


// const nums = [1,1,2]
// removeDuplicates(nums)


// function plusOne(digits) {
	
// 	return 
// }

// const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// console.log(plusOne(digits))