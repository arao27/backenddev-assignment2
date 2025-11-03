const path = require('path');
const { sumNumbers, maxNumber, minNumber, averageNumber } = require('../src/numberProcessor');

const numbersFile = path.join(__dirname, '../data/sample-numbers.txt');

test('calculate sum of numbers', () => {
    expect(sumNumbers(numbersFile)).toBe(2597); // Adjust based on sample-numbers.txt
});

test('find max number', () => {
    expect(maxNumber(numbersFile)).toBe(96); // Adjust based on sample-numbers.txt
});

test('find min number', () => {
    expect(minNumber(numbersFile)).toBe(73); // Adjust based on sample-numbers.txt
});

test('calculate average', () => {
    expect(averageNumber(numbersFile)).toBeCloseTo(86.566666666666); // Adjust based on sample-numbers.txt
});
