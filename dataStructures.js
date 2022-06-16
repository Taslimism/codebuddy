//level {3}

//console.log(getUnique("a:2,b:3,c:4,a:5,b:6"));
function getUnique(str) {
	const arr = str.split(",");

	const obj = {};
	arr.forEach((ele) => {
		const [key, value] = ele.split(":");
		if (obj[key]) {
			obj[key] += Number(value);
		} else {
			obj[key] = Number(value);
		}
	});

	return obj;
}

//console.log(isStack("{[(]}"));
function isStack(string) {
	const stack = [];

	for (let i = 0; i < string.length; i++) {
		if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
			stack.push(string[i]);
		} else {
			if (stack.length != 0) {
				if (stack[stack.length - 1] === "(" && string[i] === ")") {
					stack.pop();
				} else if (stack[stack.length - 1] === "{" && string[i] === "}") {
					stack.pop();
				} else if (stack[stack.length - 1] === "[" && string[i] === "]") {
					stack.pop();
				} else {
					return "Invalid";
				}
			} else {
				return "Invalid";
			}
		}
	}

	if (stack.length === 0) return "Valid";
}

const user = {
	name: "Elie",
	job: "Instructor",
	workDetails: {
		type: "Part Time",
		hours: "40 hours",
	},
	educationQualifications: [
		{
			name: "Full Stack",
			type: "Certification",
		},
		{
			name: "Javascript",
			type: "Certification",
		},
	],
};
console.log(transformToUpperCase(user));
function transformToUpperCase(obj) {
	let newObj = {};
	if (Array.isArray(obj)) newObj = [];

	for (const key in obj) {
		if (typeof obj[key] === "object") {
			newObj[key] = transformToUpperCase(obj[key]);
		} else if (Array.isArray(obj[key])) {
			newObj = key.map((obj) => transformToUpperCase(obj));
		} else {
			newObj[key] = obj[key].toUpperCase();
		}
	}

	return newObj;
}
