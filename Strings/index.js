// Challenge 1

// 'bad url';
// 0123456;

function urlify(str) {
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (currChar === ' ') {
      // Grab first half
      let firstHalf = str.slice(0, i);
      // Grab second half
      let secondHalf = str.slice(i + 1);
      // Rebuild the string.
      str = firstHalf + '%20' + secondHalf;
      i += 2; // Don't look at the 20 we just added on the next increment of the loop
    }

    //str = currChar === ' ' ? str.slice(0, i) + '%20' + str.slice(i + 1) : str; // 1 liner
  }

  return str;
}

urlify('bad url');

function urlify2(str) {
  let repStr = '';

  for (let char of str) {
    if (char === ' ') {
      repStr += '%20';
    } else {
      repStr += char;
    }

    //repStr += char === ' ' ? '%20' : char;
  }

  return repStr;
}

urlify2('The quick brown fox jumps over the lazy dog.');

// Challenge 2

function removeNeedle(str, item) {
  // 1 line:
  //str.replace(/item/g, '');

  for (let i = 0; i < str.length; i++) {
    if (item === str.slice(i, i + item.length)) {
      // Get left half
      let firstHalf = str.slice(0, i);
      // Get right half
      let secondHalf = str.slice(i + item.length);
      // Merge them with no extra character in between
      return firstHalf + secondHalf;
    }
  }
}

// Challenge 3
function compressString(str) {
  let count = 1; // Counter for our current letter streak is
  let returnStr = ''; // Str to return

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      // If the letter is the same as the next letter, increment it
      count++;
    } else {
      // Otherwise, print out current letter and its count
      returnStr += str[i] + count;
      count = 1;
    }
  }
  return returnStr;
}

compressString('aaabbcccc'); // gives a3b2c4

function compressString2(str) {
  let rStr = '';

  for (let i = 0; i < str.length; ) {
    let j = i + 1; // Setup second pointer
    while (str[i] === str[j]) {
      j++; // Move j to the right until we find a new character
    }
    console.log(j, i);
    rStr += str[i] + (j - i); // Output the character and how many spaces j moved
    i = j; // Move i to where j ended
  }

  return rStr;
}

// Challenge 4
// Find the last space, starting from the beginning
function lastLength(str) {
  let currSpace = 0; // Index for the most recent space we've found

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      currSpace = i;
    }
  }

  return str.length - currSpace - 1; // Return the difference, minus one for the indexing of a str/array
}
lastLength('It is a good day');

// Find the first space from the end
function lastLength2(str) {
  // Loop through sentence from the end
  for (let i = str.length - 1; i >= 0; i--) {
    // As soon as you find a space, return the difference of the current index and the length of the sentence.
    if (str[i] === ' ') {
      return str.length - i - 1;
    }
  }
}
lastLength2('It is a good day');

// Challenge 5

function missingCloses(str) {
  // Generate map with our input
  let charMap = generateMap(str);

  // Generate ouput string
  // Out of order, but proper amounts:
  let output = '';
  // let parens = charMap['('] - (charMap[')'] ? charMap[')'] : 0);
  // let bracks = charMap['['] - (charMap[']'] ? charMap[']'] : 0);
  // let braces = charMap['{'] - (charMap['}'] ? charMap['}'] : 0);
  // console.log(charMap)
  // if(parens > 0){
  //   output += ')' + parens;
  // }
  // if(bracks > 0){
  //   output += ']' + bracks;
  // }
  // if(braces > 0){
  //   output += '}' + braces;
  // }

  // Find differences
  let diffMap = {};
  diffMap['('] = charMap['('] - (charMap[')'] ? charMap[')'] : 0);
  diffMap['['] = charMap['['] - (charMap[']'] ? charMap[']'] : 0);
  diffMap['{'] = charMap['{'] - (charMap['}'] ? charMap['}'] : 0);

  // Build the corresponding relationship between opening and closing pieces
  let corresponding = {};
  corresponding['('] = ')';
  corresponding['['] = ']';
  corresponding['{'] = '}';

  // Generate string in right order(the order that the opening tags were input)
  let keyAry = Object.keys(charMap);
  // Loop through all keys
  for (let key of keyAry) {
    // Check if our key is an opening tag
    if ('([{'.includes(key)) {
      // Find how many more closing tags you need for that opening tag
      if (diffMap[key] > 0) {
        output += `${corresponding[key]}${diffMap[key]}`;
      }
    }
  }

  return output;
}

function generateMap(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    let currItem = input[i];

    map[currItem] ? map[currItem]++ : (map[currItem] = 1);
  }
  return map;
}

missingCloses('{}(([[])');

// Andrew's solution

const paraFinder = parens => {
  let paraLegend = {
    '(': [0, ')'],
    ')': [0, '('],
    '{': [0, '}'],
    '}': [0, '{'],
    '[': [0, ']'],
    ']': [0, '[']
  };

  // (() (: -1, ): 0

  for (char of parens) {
    if (paraLegend[char]) {
      paraLegend[char][0]--;
      paraLegend[paraLegend[char][1]][0]++;
    }
  }
  console.log(paraLegend);
  return Object.keys(paraLegend).reduce((acc, char) => {
    paraLegend[char][0] > 0 ? (acc += `${char + paraLegend[char][0]}`) : null;
    return acc;
  }, '');
};

console.log('(ab()', paraFinder('(ab()'));
console.log('(()))', paraFinder('(()))'));
console.log('((({{[', paraFinder('((({{['));
console.log('{}(([[])', paraFinder('{}(([[])'));

// Fahad's solution
const findMissingPunc = str => {
  let out = '';

  let op = 0,
    cp = 0,
    oc = 0,
    cc = 0,
    ob = 0,
    cb = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') op++;
    if (str[i] == ')') cp++;
    if (str[i] == '{') oc++;
    if (str[i] == '}') cc++;
    if (str[i] == '[') ob++;
    if (str[i] == ']') cb++;
  }

  if (op > cp) out += ')' + (op - cp);
  if (oc > cc) out += '}' + (oc - cc);
  if (ob > cb) out += ']' + (ob - cb);

  return out;
};

// 5! = 5*4*3*2*1

// 10! = 10*9*8*7*6*5*4*3*2*1
