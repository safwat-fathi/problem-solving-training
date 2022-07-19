function calPoints(ops = []) {
  let i;
  let result = null;
  let record = [];

  for (i = 0; i < ops.length; i++) {
    if (!isNaN(+ops[i])) {
      record.push(+ops[i]);
    }

    if (ops[i] === "C") {
      record.pop();
    }

    if (ops[i] === "D") {
      record.push(record[record.length - 1] * 2);
    }

    if (ops[i] === "+") {
      record.push(record[record.length - 2] + record[record.length - 1]);
    }
  }

  result = record.reduce((a, b) => a + b);

  return result;
}

const ops1 = ["5", "2", "C", "D", "+"];
const ops2 = ["5", "-2", , "4", "C", "D", , "9", "+", "+"];
console.log("5 2 C D +".split(" "));
// console.log(calPoints(ops2));
