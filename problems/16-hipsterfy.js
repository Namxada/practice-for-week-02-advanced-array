/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
    let vowels = "aeiou";
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        if (vowels.includes(word[i])){
            newWord = word.slice(0,i) + word.slice (i + 1);
            i = -1;
        };
    };
    return newWord;
};

let hipsterfy = function(sentence) {
    // Your code here
    let words = sentence.split(' ');
    let hipsterArray = words.map(function(word){
        return removeLastVowel(word);
    });
    return hipsterArray.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
