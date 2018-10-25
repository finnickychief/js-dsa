// Searching

// Linear/Sequential search
/*
  A search where you look at every item until you find the one you want. Typically starts at the beginning

  Strengths:
    Really easy to write
    Works on unsorted arrays
    Good when you cannot modify the structure of the array
     - Structure of the array does not matter for primitive types
    

  Weaknesses:
    Has to look at every item, so time complexity is O(N)

  function linearSearch(ary, lookupVal){
    for(let i = 0; i < ary.length; i++){
      if(ary[i] === lookupVal){
        return i;
      }
    }

    return -1;
  }


  Selection sort:

   Algorithm:
    Find smallest value in array
    Move it to the front of the unsorted portion of the array
    Do until you reach end of array


*/
function selectionSort(arr) {
  // Loop to go through the entire arr: Each time the loop reaches the top it represents the beginning of the unsorted portion of the array
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;

    // This loop finds the smallest item in the unsorted portion of the array
    for (let j = smallestIndex + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    console.log(arr[smallestIndex], smallestIndex);

    // Swap the smallest item with the front item
    let temp = arr[smallestIndex];
    arr[smallestIndex] = arr[i];
    arr[i] = temp;
  }
}

let ary = [7, 4, 9, 5, 2, 3, 8];
selectionSort(ary);

/*
  Bubble sort:
    Loop through all the items
    If any of the adjacent items are in the wrong order, swap them
    Do this until you have not swapped any items

*/

function swap(ary, leftIndex, rightIndex) {
  let temp = ary[leftIndex];
  ary[leftIndex] = ary[rightIndex];
  ary[rightIndex] = temp;
}

function bubbleSort(arr) {
  let notSwapped = true;

  do {
    notSwapped = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        notSwapped = false;
        swap(ary, j, j + 1);
      }
    }
    // if (notSwapped) {
    //   return;
    // }
  } while (notSwapped === false);
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let notSwapped = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        notSwapped = false;
        swap(ary, j, j + 1);
      }
    }
    if (notSwapped) {
      return;
    }
  }
}

let ary = [7, 4, 9, 5, 2, 3, 8];
bubbleSort(ary);
console.log(ary);

/*
  Jump Search
    When you have a sorted array, you can skip or 'jump' over a number of items until you find the one you want.

      Start at front
        While you have not found the item, jump a number of items equal to the floor of the square root of the array's length
          When you pass where the item should be, backtrack to the spot you just jumped from
            If you find the item, return the index
            If you reach the spot you jumped from, you have not found the item so return -1



*/

function jumpSearch(arr, item) {
  let jumpSize = Math.floor(Math.sqrt(arr.length));

  // Go until you reach one jump past the end of the array
  for (let i = 0; i < arr.length + jumpSize; i += jumpSize) {
    // If you pass the item, or the end of the array, start walking backwards/decrementing
    if (arr[i] >= item || i >= arr.length) {
      // Find spot to stop decrementing
      let lastJump = i - jumpSize;
      // Decrement until you find the item or go too far.
      while (i > lastJump) {
        if (arr[i] === item) {
          return i;
        } else {
          i--;
        }
      }
      // If you haven't found the item, return -1
    }
  }

  return -1;
}

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}
arr.sort((a, b) => a - b);
// jumpSearch([2, 8, 16, 30, 40, 60, 70, 80, 90, 100], 64);

function jumpSearch2(arr, item) {
  let jumpSize = Math.floor(Math.sqrt(arr.length));
  let i = 0;

  while (true) {
    if (i > arr.length) {
      while (arr[i] >= item || arr[i] === undefined) {
        i--;
        if (arr[i] === item) return i;
      }
      return -1;
    } // Jump out of the function if we've reached the end of the array

    if (arr[i] >= item) {
      // Start backtracking when we've gone past the item

      while (arr[i] >= item) {
        i--;
        if (arr[i] === item) return i;
      }
      return -1;
    }

    i += jumpSize;
  }
}

/*
  Binary Search


    Algorithm:
      Start in the middle
        Base case for recursive binary search: If there is nothing left in the part you *should* search next, you know it doesn't exist
        
        If you found the item, return the index
        If the item is less than the item in the middle, search the left half of the array
        If the item is greater than the item in the middle, search the right half of the array




*/

/*
  Recursion:
    When a function calls itself

    Goes forever unless you include a base case

    Base cases are the instruction telling your function when to stop.




*/

function recursionExample(n) {
  console.log(n);

  setTimeout(() => {
    if (n === 0) {
      console.log('Blast off');
      return; // Break out of the function
    }
    recursionExample(n - 1);
  }, 1000);
}
recursionExample(10);

// Recursively generate a factorial number
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  // Find the answer
  return n * factorial(n - 1);
}

function iterativeFactorial(n) {
  let val = 1;
  for (let i = 1; i <= n; i++) {
    val *= i;
  }

  return val;
}

/*
  Check is a string is a palindrome, using recursion
  

*/

function checkPalindrome(str) {
  for (let i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function checkPalindromeTwo(str) {
  let i = 0;
  let j = str.length - 1;

  while (j > i) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function checkPalindromeRecursive(str, i = 0, j = str.length) {
  if (typeof str !== 'string') {
    return false;
  }

  return recursivePalindrome(str, 0, str.length - 1);
}

function recursivePalindrome(str, i = 0, j = str.length - 1) {
  console.log(`String is ${str}`);
  console.log(`Comparing ${str[i]} to ${str[j]}`);
  if (j <= i) {
    console.log(
      `We've actually reached all of our characters, so lets get out and return true`
    );
    return true;
  } else if (str[i] !== str[j]) {
    console.log('They are not the same, so get out and return false.');
    return false;
  }

  return recursivePalindrome(str, i + 1, j - 1);
}

console.log(recursivePalindrome('racecar'));
console.log(recursivePalindrome('toot'));
console.log(recursivePalindrome('hello'));

function recursiveI(i) {
  if (i === 100) return;
  console.log(`i is currently ${i}`);
  recursiveI(++i);
}

/*
  
  Formula to calculate a fibonacci number:
    Need at least 2 numbers to the left of the number
      This number is equal to the number 1 space before it, plus the number 2 spaces before it


      [1,1,2,3,5,8,13,21,34,55]
       1,2,3,4,5,6, 7, 8, 9,10


*/

let memo = {};

function fib(n) {
  if (memo[n]) {
    console.log(
      `We know what ${n} is because we already did this work! returning ${
        memo[n]
      }`
    );
    return memo[n];
  }

  if (n <= 1) {
    console.log(`We know what the first number is! Returning 1`);
    return 1;
  }

  console.log(`We don't know what fib(${n}) is, lets go deeper.`);

  let thisNum = fib(n - 1) + fib(n - 2);

  memo[n] = thisNum;
  return memo[n];
}

let numOps = 0;
function badFib(n) {
  if (n <= 1) {
    return 1;
  }
  numOps++;
  return badFib(n - 1) + badFib(n - 2);
}
badFib(20);
console.log(numOps);
