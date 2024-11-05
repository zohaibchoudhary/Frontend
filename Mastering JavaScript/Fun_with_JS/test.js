
const generateUniqueIdentifier = function() {
	const base62 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let urlCode = "";

	for (let i = 0; i < 7; i++) {
		const randomCode = Math.floor(Math.random() * base62.length + 1);
		urlCode += base62.charAt(randomCode);
	}

	return urlCode;
}

const code = generateUniqueIdentifier();
// console.log(code);

function isURLValid(str) {
	if (
		/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(
			str
		)
	) {
		console.log("URL is valid");
	} else {
		console.log("URL is invalid");
	}
}

// isURLValid("http://localhost:3000");

