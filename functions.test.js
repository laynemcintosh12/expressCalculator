const { calculateMean, calculateMedian, calculateMode } = require('./functions');

describe('calculateMean', () => {
  it('should calculate the mean of numbers', () => {
    const nums = '1,3,5,7';
    const mean = calculateMean(nums);
    expect(mean).toBe(4);
  });

  it('should return NaN for invalid numbers', () => {
    const nums = 'foo,2,3';
    const mean = calculateMean(nums);
    expect(isNaN(mean)).toBe(true);
  });
});

describe('calculateMedian', () => {
  it('should calculate the median of numbers', () => {
    const nums = '1,3,5,7';
    const median = calculateMedian(nums);
    expect(median).toBe(4);
  });

  it('should calculate the median for even number of elements', () => {
    const nums = '1,2,3,4';
    const median = calculateMedian(nums);
    expect(median).toBe(2.5);
  });

  it('should return NaN for invalid numbers', () => {
    const nums = 'foo,2,3';
    const median = calculateMedian(nums);
    expect(isNaN(median)).toBe(true);
  });
});

describe('calculateMode', () => {
  it('should calculate the mode of numbers', () => {
    const nums = '1,2,2,3,3,3,4,4,4,4';
    const mode = calculateMode(nums);
    expect(mode).toBe(4);
  });

  it('should return NaN for invalid numbers', () => {
    const nums = 'foo,2,3';
    const mode = calculateMode(nums);
    expect(isNaN(mode)).toBe(true);
  });

  it('should return null if no mode exists', () => {
    const nums = '1,2,3,4,5';
    const mode = calculateMode(nums);
    expect(mode).toBeNull();
  });
});
