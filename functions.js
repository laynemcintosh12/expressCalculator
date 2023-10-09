
function calculateMean(nums) {
    const numArray = nums.split(',').map(Number);
    if (numArray.some(isNaN)) return NaN;
    const mean = numArray.reduce((acc, val) => acc + val, 0) / numArray.length;
    return mean;
}
  
function calculateMedian(nums) {
    const numArray = nums.split(',').map(Number);
    if (numArray.some(isNaN)) return NaN;
    numArray.sort((a, b) => a - b);
    const middle = Math.floor(numArray.length / 2);
    const median = numArray.length % 2 === 0
      ? (numArray[middle - 1] + numArray[middle]) / 2
      : numArray[middle];
    return median;
}
  
function calculateMode(nums) {
    const numArray = nums.split(',').map(Number);
    if (numArray.some(isNaN)) return NaN;
    const numCounts = {};
    let mode = null;
    let maxCount = 0;
    numArray.forEach((num) => {
      numCounts[num] = (numCounts[num] || 0) + 1;
      if (numCounts[num] > maxCount) {
        mode = num;
        maxCount = numCounts[num];
      }
    });
    return mode;
}
  
module.exports = {
    calculateMean,
    calculateMedian,
    calculateMode,
};
