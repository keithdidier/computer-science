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



// ****Problem 9****

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Solution #1
function steps(n) {
    for(let row = 0; row < n; row++) {
        let stair = "";

        for (let column = 0; column < n; column++) {
            if(column <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }

        console.log(stair);
    }
}


// Solution #2
function steps(n, row = 0, stair = "") {
    if(n === row) {
        return;
    }

    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if(stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }

    steps(n, row, stair);
}


//****Promlem 10****

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// Solution #1
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for(let row = 0; row < n; row++) {
        let level = "";

        for(let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                level += "#";
            } else {
                level += " ";
            }
        }

        console.log(level);
    }

}


// Solution #2
function pyramid(n, row = 0, level = "") {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }
    pyramid(n, row, level + add);
}


//****Problem 11****

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Solution #1
function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for(let char of str.toLowerCase()) {
        if(checker.includes(char)) {
            count++;
        }
    }

    return count;
}


// Solution #2
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}


//****Problem 12****

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    for(let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while(startColumn <= endColumn && startRow <= endRow) {
        // Top row 
        for(let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right column
        for(let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for(let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start column
        for(let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}


//****Problem 13****

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution #1
function fib(n) {
    const result = [0, 1];

    for(let i = 2; i <= n; i++) {
        const a = result[i -1];
        const b = result[i -2];

        result.push(a + b);
    }

    return result[n];
}


// Solution #2
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function fib(n) {
    if(n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);