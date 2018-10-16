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
  for (let i = 0; i < arr.legnth; i++) {
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
