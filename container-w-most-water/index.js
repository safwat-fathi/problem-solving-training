/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height = []) {
  console.log(height);
  let firstLine = height[0];
  let lastLine = height[height.length - 1];
  let currMaxArea =
    (height.indexOf(lastLine) - height.indexOf(firstLine)) * lastLine;
  // console.log(currMaxArea);
  // let maxWidthContainer = [height[0], height[height.length - 1]];

  for (let i = 0; i < height.length; i++) {
    const line = height[i];

    console.log("current first line:", firstLine);
    console.log("current last line:", lastLine);
    console.log(
      "curr width:",
      height.indexOf(lastLine) - height.indexOf(firstLine)
    );

    // if (i !== height.indexOf(firstLine) && i !== height.indexOf(lastLine)) {
    if (line > firstLine && i < height.indexOf(lastLine)) {
      // console.log("larger than first line:", line);
      firstLine = line;
    }
    if (line > lastLine && i > height.indexOf(firstLine)) {
      lastLine = line;
    }
    // }

    // if (
    //   line > firstLine &&
    //   i !== height.indexOf(firstLine) &&
    //   i !== height.indexOf(lastLine)
    // ) {
    //   console.log("larger than first line:", line);
    //   firstLine = line;
    // }

    // if (
    //   line > lastLine &&
    //   i !== height.indexOf(firstLine) &&
    //   i !== height.indexOf(lastLine)
    // ) {
    //   console.log("larger than last line:", line);
    //   lastLine = line;
    // }
  }

  console.log(firstLine);
  console.log(height.indexOf(firstLine));
  console.log(lastLine);
  console.log(height.indexOf(lastLine));
}

const testCase0 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const testCase1 = [1, 8, 3, 7];
const testCase2 = [3, 9, 3, 4, 7, 2, 12, 6];

console.log(maxArea(testCase2));
