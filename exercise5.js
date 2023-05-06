function analyzeArray(arr) {
  // Check if input is valid
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  // Calculate average, min, max, and length
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let avg = sum / arr.length;
  let len = arr.length;
  // Return object with calculated properties
  return {
    average: avg,
    min: min,
    max: max,
    length: len,
  };
}
let numbers = [5, 2, 9, 1, 5];
let analysis = analyzeArray(numbers);
console.log(analysis); // Output: { average: 4.4, min: 1, max: 9, length: 5 }
module.exports = analyzeArray;
