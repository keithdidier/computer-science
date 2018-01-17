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
