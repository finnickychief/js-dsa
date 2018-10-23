// Challenge 1: Rotate arrays

let arr = [0, 1, 2, 3, 4, 5];

function rotateArray(arr, n) {
  // Rotate the arr by n places

  // Iteratively
  // for n times
  // for(let i = 0; i < n; i++){
  //   // Move item at front to back
  //   let item = arr.shift();
  //   arr.push(item);
  // }

  // Slice/Splice + concat - Destructive to original array
  // let newFront = arr.splice(arr.length - n);
  // newFront = newFront.concat(arr);

  // return newFront;

  let frontSlice = arr.slice(arr.length - n); // Get current rear
  let rearSlice = arr.slice(0, arr.length - n); // Get current front

  return frontSlice.concat(rearSlice);
  //return [...frontSlice, ...rearSlice]; // Same as line above

  //return [...arr.slice(arr.length - n), ...arr.slice(0, arr.length-n)]; // 1 line
}

// Challenge #2: Find sum of 3 largest values in an array - Assume that the array always has at least 3 items

function findSumOfThree(arr) {
  // Set the values to -Infinity to ensure that no data too small gets passed
  let large = -Infinity;
  let mid = -Infinity;
  let small = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      // Replace largest
      small = mid; // Get rid of smallest
      mid = large; //
      large = arr[i];
    } else if (arr[i] > mid) {
      // Replace mid
      small = mid;
      mid = arr[i];
    } else if (arr[i] > small) {
      // Replace small
      small = arr[i];
    }
  }

  return large + mid + small;
}

// Challenge 3: Quarantine elements
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 2, 3, 4, 5];
function quarantineElements(arr, badElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'Triage') break;
    if (arr[i] === badElement) {
      if (!arr.includes('Triage')) arr.push('Triage'); // Add 'Triage' to the end if it isn't already within the array
      arr.splice(i, 1); // Remove the bad item
      arr.push(badElement); // Add the bad item to the end
      i--; // Decrement i to make sure we don't skip this position the next time around.
    }
  }
  return arr;
}
quarantineElements(arr, 2);

// Problem 4

function hasDuplicate(arr) {
  let map = {}; // Create the map we are going to use as a set
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // See if the map contains the item
    if (map[num]) {
      return true; // We have found a duplicate, return true
    } else {
      map[num] = 1; // Set the val equal to a truthy value
    }
  }
  return false; // If we have not foun any duplicates, return false.
}

// Add firstIndex for no sorting and no additional vars

// Add sort for no additional vars

// Problem 5:
// 4 Solutions
// Basic
// Sort + walkthrough
function findMissing(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }
}

// Two maps - Loop through complete map and see which one is missing
function findMissing(arr) {
  let incompleteMap = {};
  let completeMap = {};

  for (let i = 0; i < arr.length + 1; i++) {
    completeMap[i] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    incompleteMap[arr[i]] = true;
  }

  for (let key in completeMap) {
    if (incompleteMap[key] === undefined) {
      return Number(key);
    }
  }
}

// Bonus
// Includes
/*
  Why it performs worse:
    Includes has to do a search on the items, so you're looking at each item multiple times as you go through the array
*/
function findMissing(arr) {
  // Loop through all items that SHOULD be within the array
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      // If the array does NOT include the current number
      return i; // Return the current number
    }
  }
}
// Difference of sums
// Optimal performance: We look at each item exactly once
function findMissing(arr) {
  let completeSum = 0;
  let incompleteSum = 0;
  // Obtain the sum of what the complete sequence WOULD be
  for (let i = 0; i <= arr.length; i++) {
    completeSum += i;
  }
  // Obtain the sum of what the sequence ACTUALLY is
  for (let i = 0; i < arr.length; i++) {
    incompleteSum += arr[i];
  }
  // Return the difference
  return completeSum - incompleteSum;
}

// Challenge 6:
// indexOf
function findDistance(arr, item1, item2) {
  let firstIndex = arr.indexOf(item1);
  let secondIndex = arr.indexOf(item2);
  return Math.abs(firstIndex - secondIndex);
}

// Searching for the item(not allowed to use indexOf)
function findDistance(arr, item1, item2) {
  let firstIndex = -1,
    secondIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item1) {
      if (firstIndex === -1) {
        firstIndex = i;
      }
    }
    if (arr[i] === item2) {
      if (secondIndex === -1) {
        secondIndex = i;
      }
    }
  }
  return Math.abs(firstIndex - secondIndex);
}
