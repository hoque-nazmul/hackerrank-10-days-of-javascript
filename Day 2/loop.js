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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

// solution is here
function vowelsAndConsonants(s) {
    const vowel = [];
    const consonant = [];
    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        if (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u') {
            vowel.push(ele);
        } else {
            consonant.push(ele);
        }
    }
    for (let i = 0; i < vowel.length; i++) {
        console.log(vowel[i]);
    }
    for(let i = 0; i < consonant.length; i++) {
        console.log(consonant[i]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}