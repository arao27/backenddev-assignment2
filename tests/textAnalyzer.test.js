const path = require('path');
const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

const sampleFile = path.join(__dirname, '../data/sample-text.txt');

test('count total words', () => {
    expect(countWords(sampleFile)).toBe(14); // Adjust based on your sample-text.txt
});

test('find the longest word', () => {
    expect(findLongestWord(sampleFile)).toBe('backend'); // Adjust based on your sample-text.txt
});

test('count total lines', () => {
    expect(countLines(sampleFile)).toBe(3); // Adjust based on your sample-text.txt
});
