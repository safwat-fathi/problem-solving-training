const isValid = (s = "") => {
  // let openParenthesis = ["(", "{", "["];
  // let closeParenthesis = ["]", ")", "}"];
  let stack = [];

  if (s.length <= 1) return false;

  for (let i in s) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    }

    if (
      (s[i] === ")" && stack[stack.length - 1] === "(") ||
      (s[i] === "]" && stack[stack.length - 1] === "[") ||
      (s[i] === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

const str1 = "()"; // valid
const str2 = "()[]{}"; // valid
const str3 = "(]"; // not valid
const str4 = "([)]"; // not valid
const str5 = "{[]}"; // valid

console.log(isValid(str4));
