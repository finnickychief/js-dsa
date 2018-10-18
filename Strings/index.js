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
  //str.replace(item, '');

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
