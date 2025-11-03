const fs = require('fs');
const path = require('path');

// Count total words
function countWords(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const words = data.match(/\b\w+\b/g);
    return words ? words.length : 0;
}

// Find longest word
function findLongestWord(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const words = data.match(/\b\w+\b/g);
    if (!words || words.length === 0) return '';
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

// Count lines
function countLines(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split(/\r?\n/);
    return lines.length;
}

// Test the functions (optional)
if (require.main === module) {
    const quotesFile = path.join(__dirname, '../data/quotes.txt');
    console.log('Total words:', countWords(quotesFile));
    console.log('Longest word:', findLongestWord(quotesFile));
    console.log('Total lines:', countLines(quotesFile));
}

module.exports = { countWords, findLongestWord, countLines };
