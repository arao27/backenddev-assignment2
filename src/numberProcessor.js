const fs = require('fs');
const path = require('path');

// Read numbers from file
function readNumbers(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split(/\r?\n/).filter(line => line.trim() !== '').map(Number);
}

// Sum of numbers
function sumNumbers(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.reduce((sum, n) => sum + n, 0);
}

// Max number
function maxNumber(filePath) {
    const numbers = readNumbers(filePath);
    return Math.max(...numbers);
}

// Min number
function minNumber(filePath) {
    const numbers = readNumbers(filePath);
    return Math.min(...numbers);
}

// Average
function averageNumber(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.length ? sumNumbers(filePath) / numbers.length : 0;
}

// Test the functions (optional)
if (require.main === module) {
    const sampleFile = path.join(__dirname, '../data/sample-numbers.txt');
    console.log('Sum:', sumNumbers(sampleFile));
    console.log('Max:', maxNumber(sampleFile));
    console.log('Min:', minNumber(sampleFile));
    console.log('Average:', averageNumber(sampleFile));
}

module.exports = { sumNumbers, maxNumber, minNumber, averageNumber };
