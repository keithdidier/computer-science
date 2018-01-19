// ***Problem 1***

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution #1
function reverse(str) {
    return str.split("").reverse().join("");
}


// Solution #2
function reverse(str) {
    var reversed = "";

    for(let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}


// Solution #3
function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}




// ***Problem 2***

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution 1
function palindrome(str) {
    var reversed = str.split("").reverse().join("");
 
    return str === reversed;
 }


 // Solution 2
 function palindrome(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length - i - 1];
    });
 }




 // ***Problem 3***

 // --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// Solution #1
function reverseInt(n) {
    const reversed = n.toString().split("").reverse().join("");

    if(n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}


// Solution #2
function reverseInt(n) {
    const reversed = n.toString().split("").reverse().join("");

    return parseInt(reversed) * Math.sign(n);
}




// ***Problem 4***

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const charMap = {};
    let count = 0;
    let maxChar = "";

    for(let char of str) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > count) {
            count = charMap[char];
            maxChar = char;
        }
    }
    
    return maxChar;

}



// ***Problem 5***

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        // Is the number a multiple of 3 and 5?
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");

        // Is the number a multiple of 3?
        } else if(i % 3 === 0) {
            console.log("fizz");

        // Is the number a multiple of 5?
        } else if(i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}