'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

// solution is here
function getSecondLargest(nums) {
    // Complete the function
    let secondLargestNum;
    const sortedNums = nums.sort((a, b) => b - a);
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[0] > sortedNums[i]) {
            secondLargestNum = sortedNums[i];
            break;
        }
    }
    return secondLargestNum;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}