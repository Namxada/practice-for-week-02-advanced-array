/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

// let shortestWord = function(sentence) {
//   let words = sentence.split(' ');
//   let minLength = words.reduce(function(accumulator, currentVal){
//     if (currentVal.length < accumulator){
//       return currentVal.length;
//     } else {
//       return accumulator;
//     }
//   }, words[0].length);
//   let shortestWords = words.filter(function(word){
//     return word.length === minLength;
//   });
//   return shortestWords.pop();
// };

let shortestWord = function(sentence) {
  let words = sentence.split(' ');
  let shortest = words.reduce(function(accumulator, currentVal){
    if (currentVal.length <= accumulator.length){
      accumulator = currentVal;
    };
    return accumulator;
  });
  return shortest;
};


// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
