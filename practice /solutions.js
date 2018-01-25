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



//****Problem 6****

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution #1
function chunk(array, size) {
    const chunked = [];

    for(let element of array) {
        const last = chunked[chunked.length -1];

        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    
    return chunked;
}


// Solution #2
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}



//****Problem 7****

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for(let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

// Solution #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}



//****Problem 8****

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
function capitalize(str) {
    const words = [];

    for(let word of str.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

   return words.join(" ");
}

// Solution #2
function capitalize(str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}