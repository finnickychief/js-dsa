/*
  Take a string and reverse the words while keeping them in the same order.

*/

// No bonus: Split is allowed
function reverseString(str) {
  let words = str.split(' ');

  let returnStr = '';

  for (let i = 0; i < words.length; i++) {
    returnStr +=
      words[i]
        .split('')
        .reverse()
        .join('') + ' ';
  }

  return returnStr.slice(0, returnStr.length - 1);
}

console.log(reverseString('Good day sir!'));
console.log(reverseString('How was your weekend?'));
console.log(reverseString('This problem is a warmup.'));

// No split - using two pointer
function reverseString2(str) {
  let returnStr = '';
  let nextWord = 0;

  // Go through the entire string
  for (let i = 0; i < str.length; ) {
    let j = i;
    // While the next character for j is a valid character
    while (str[j + 1] !== ' ' && str[j + 1] !== undefined) {
      j++;
    }
    // Keep track of where the next word begins
    nextWord = j + 2;
    // Go backwards to build up the word in reverse
    while (j >= i) {
      returnStr += str[j];
      j--;
    }
    // Add space for the word.
    returnStr += ' ';
    // Restart loop at next word
    i = nextWord;
  }

  return returnStr.slice(0, returnStr.length - 1);
}

console.log(reverseString2('Good day sir!'));
console.log(reverseString2('How was your weekend?'));
console.log(reverseString2('This problem is a warmup.'));
