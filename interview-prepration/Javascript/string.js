function strStr(haystack, needle) {
	if (haystack.includes(needle)) {
		const result = haystack.indexOf(needle);
		return result;
	}
	return -1;
}

// console.log(strStr("sadbutsad", "bad"));

function isPalindrome(s) {
	let cleanedString = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
	let reversedString = cleanedString.split("").reverse().join("");

	return cleanedString === reversedString;
}

// isPalindrome("A man, a plan, a canal: Panama");


function findAnagrams(s, p) {
  
}

findAnagrams("cbaebabacd", "abc")