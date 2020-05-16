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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

// solution is here
function reverseString(s) {
    try {
        var reversedStr = s.split('').reverse().join('');
    } 
    catch(err) {
       var error = err.message;
       console.log(error);
    }
    finally {
        if (error) {
            console.log(s);
        } else {
            console.log(reversedStr);
        }
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}