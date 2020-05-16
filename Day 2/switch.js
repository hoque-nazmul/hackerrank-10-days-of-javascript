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

// solution is here
function getLetter(s) {
    let letter;
    let char = s.charAt(0);
    // Write your code here
    switch (char) {
        case "a":
        letter = "A";
        break;

        case "b":
        letter = "B";
        break;

        case "h":
        letter = "C";
        break;

        default:
        letter = "D";

    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}