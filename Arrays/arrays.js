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

// Challenge #2: Find sum of 3 largest values in an array

function findSumOfThree(arr) {
  let large = 0;
  let mid = 0;
  let small = 0;

  for (let i = 0; i < arr.length; i++) {
    // Replace largest
    // Replace mid
    // Replace small
  }
}
