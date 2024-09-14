/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// let hasThreeVowels = function(string) {
//     // Your code here
//     let vowels = "aeiou";
//     let letters = string.split('');
//     let uniqueVowels = letters.filter(function(letter, index){
//         return vowels.includes(letter) && letters.indexOf(letter) === index;
//     });
//     return uniqueVowels.length >= 3;
// };

// let hasThreeVowels = function(string) {
//     let vowels = "aeiou";
//     let uniqueVowels = [];
//     let letters = string.split('');
//     letters.forEach(function(letter){
//         if (vowels.includes(letter) && !uniqueVowels.includes(letter)) {
//             uniqueVowels.push(letter);
//         };
//     });
//     return uniqueVowels.length >= 3;
// };

let hasThreeVowels = function(string) {
    let vowels = "aeiou";
    let letters = string.split('');
    let initialValue = [];
    let uniqueVowels = letters.reduce(function(accumulator, currentValue){
        if (vowels.includes(currentValue) &&
            !accumulator.includes(currentValue)){
            accumulator.push(currentValue);
        };
        return accumulator;
    },initialValue);
    return uniqueVowels.length >= 3;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
