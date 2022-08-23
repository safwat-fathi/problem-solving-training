function findJudge(N = 0, trust = []) {
  console.log(trust);
}

const testCase0 = [
  [1, 3],
  [2, 3],
  [3, 1],
]; // -1
const testCase1 = [
  [1, 3],
  [2, 3],
]; // -1
const testCase2 = [[1, 2]]; // 2
const testCase3 = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]; // 3

console.log(findJudge(3, testCase1));
