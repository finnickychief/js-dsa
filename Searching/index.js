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
