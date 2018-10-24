// Resources:
// discrete.gr/complexity
//

let myAry = [];
let arySize = 100;
let numOperations = 0;

// the complexity of this algorithm is N, where N is the number of items you want in your array: Notated as O(N)
// for (let i = 0; i < arySize; i++) {
//   myAry.push(i);
//   numOperations++;
// }

// console.log(numOperations);

// 75^2 - 50^2

// The complexity of this algorithm is N*N, where N is the arySize. Notated as either O(N*N) -> O(N^2). So when you double the size of N, you actually get 4x as many operations
// for (let i = 0; i < arySize; i++) {
//   for (let j = 0; j < arySize; j++) {
//     numOperations++;
//   }
// }
// console.log(numOperations);

// Complexity: O(N+N+N) -> O(3N)
function doStuff(N) {
  for (let i = 0; i < N; i++) {
    numOperations++;
  }
  for (let i = 0; i < N; i++) {
    numOperations++;
  }
  for (let i = 0; i < N; i++) {
    numOperations++;
  }
}
// doStuff(100);
// console.log(numOperations);

// 3N + (N * 10) -> 3N + 10N -> O(13N)
function doStuff2(N) {
  for (let i = 0; i < N * 3; i++) {
    numOperations++;
  } //60->3N

  // N * 10
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < 10; j++) {
      numOperations++;
    }
  }
}

// doStuff2(20);

// console.log(numOperations);

// N + 4 -> O(N+4) -> O(N)
function doStuff3(N) {
  let val = 3;
  numOperations++;

  val = val * 2;
  numOperations++;

  val = val * 3;
  numOperations++;

  val = N * val;
  numOperations++;

  for (let i = 0; i < N; i++) {
    numOperations++;
  }
}

// doStuff3(100);
// console.log(numOperations);

// O(N+N+4+2) -> O(2N+6)
// Remove constants: O(2N+6) -> O(N+1)
// Because of dominant terms, we take the term that experiences the most amount of growth: O(N)
function doStuff4(N) {
  let myNum = 2;
  myNum = myNum * myNum * myNum;

  doStuff3(N); // O(N+4) + 2

  for (let i = 0; i < N; i++) {
    // O(N)
  }
}
doStuff4(100);

// Basic: O(0.5N) -> O(N)
function doStuff5(N) {
  for (let i = 0; i < N / 2; i++) {
    //code
  }
}

// O(1) because at most we perform 10 operations, which is a constant that gets converted to 1
// for (let i = 0; i < N; i++) {
//   // code
//   if (i > 10) {
//     i = N+1;
//   }
// }

// O(N*K+N+K) O(NK) where N and K are not 0
function doStuff6(N, K) {
  // N * K
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      // code
    }
  }
  // K
  for (let i = 0; i < K; i++) {
    // code
  }
  // N
  for (let i = 0; i < N; i++) {
    // code
  }
}

// O(K+N^2)
function doStuff7(N, K) {
  // K
  for (let i = 0; i < K; i++) {
    // code
  }
  // N^2
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // code
    }
  }
}

// meaningless O(1)
function doStuff8(N) {
  console.log('Hi ' + N);
}

// Sum comparison for a list of numbers from 1 to N
// O(N) algorithm to find sum
function sumOne(N) {
  let sum = 0;
  for (let i = 0; i <= N; i++) {
    sum += i;
  }

  return sum;
}

// O(1) algorithm to find sum
function sumTwo(N) {
  let sum = ((N + 1) / 2) * N;

  return sum;
}

console.log(sumOne(100));
console.log(sumTwo(100));

// N^2 is better than 10N so long as N is less than 10

// Algorithm analysis of past problems:
/*
  Maps/sets:

  createCharMap:
  3N: 3 operations in our for loop, and our loop runs through every item in the string

  2: A variable declaration, and a return statement

  O(3N+2) -> First rule: Find dominant term: O(3N) -> Second rule: remove constants: O(N)

  split/reduce:
    Split: O(N)
    Reduce: O(N)
    Return: O(1)

    O(2N + 1)
    First rule: Find dominant term
    O(2N)
    Second rule: remove constants
    O(N)



  Map problem 2:
    Count vowels

    Create a static array: 1
    Create count: 1

    Loops: 10 times
    O(10 * 3)
    Return statement: 1
    O(3+30) -> O(1)


    Challenge 3
    Index map

    Go through all items in the string
    create map: 1
    for loop: N * 3
    return: 1

    O(3N+2)
    First rule:
      O(3N)
    Second rule:
      O(N)


    Challenge 4:

    1+ N + N, 2N + 1 -> 2N -> O(N)


    Challenge 5: 

    3 + 2N -> 2N -> O(N)

      Analyze the complexity of the array problems

    Challenge 6:
      3 + 2N * 2N

      4N^2 + 3 -> 4N^2
      O(N^2)

  Arrays:

    Challenge 1:

      Iterative: N*M where N isthe length of the array, and M is the number of places to rotate
      Slice+Concat: N where N is the length of the array, O(1) is also fine as an answer for the moment

    Challenge 2:
      4 + 3N -> 3N -> O(N)

    Challenge 3: 
      2(return + triage push) + N(for loop) * (2N + 2)(includes/splice + push/decrement)
      2N^2 + 2N + 2 -> 2N^2 -> O(N^2)

    Challenge 4:
      2+2N -> 2N -> O(N)

    Challenge 5:

      Solution 1: NlogN + N -> O(NlogN)
      Solution 2: 3N -> O(N)
      Solution 3: N^2(includes within for-loop) -> O(N^2)
      Solution 4: 2N + 3 -> 2N -> O(N)

    Challenge 6: 
      Solution 1: 2N + 1 -> 2N -> O(N)
      Solution 2: 2N + 3 -> 2N -> O(N)


  Strings:
    Challenge 1
      Solution 1: 
        Inside loop(multiply by N):
          3 - Let/if/increment 
          3N - Two slice methods/concat
        

        1 - Return statement

        4N + 3N^2 + 1 -> 3N^2 -> O(N^2)

      Solution 2:
        Inside loop:
          1 - if statement
          N - one of two concats

      2 - let/return

      N^2 + N + 2 -> N^2 -> O(N^2)

    Challenge 2:
      Solution:
        Inside for loop(multiply by N where N is the length of the entire string):
          K - slice where K is the length of the item we are looking for

        3N - 2 slices + concat, Inside the if statement will only run once, because we return out of the function at the end
    
        N*K + 3N -> N*K -> O(NK)

    
    Challenge 3: 
      Solution 1:
        In the loop(multiply all inside by N):
          2 - successful if statement
          2 - Failed if statement comparison/ increment
          N - Concat in else

          N + 2(only one of the if/else will ever happen)

        3 - Two variables + return

        N^2 + 2N + 3 -> N^2 -> O(N^2) (at worst: in this case most of the time it will perform better)

      Solution 2:
        In the loop:
          2N - While loop/concat
          2 - i/j increment/reset
          2N^2 + 2N
        2 - Var / return

        2N^2 + 2N + 2 -> 2N^2 -> O(N^2)

      
    Challenge 4:
      Solution 1:  
        In the loop
          2 - Comparison + variable reset
          2N

        2 - variable + return

        2N + 2 -> 2N -> O(N)
      
      Solution 2:
        In the loop(this loop only runs for the length of the last word)
          1 - For comparison
          K

        1 - return

        K + 1 -> K -> O(K) (Where K is the length of the last word)

    Challenge 5:
      Constants:
        N - generateMap
        11 - Variables/Return

      In the loop:
        3 - Includes
        2 - Second if statement/operation(we know how long the concat can be, so we treat it as constant
        5N

      6N + 11 -> 6N -> O(N)

      Fahad's solution:
          Constants:
            7 - Variables
            3 - Ifs/assignments
            1 - Return
            11

          For loop:
            6 - ifs
            1 - Only one if will hit, so only one increment will happen
            7N
          7N + 11 -> 7N -> O(N)

      Andrew's solution:
          For loop:
            3 - Comparison + 2 operations
            3N

          Constants:
            6 - Object declaration
            6 - Reduce
            1 - Keys
            13

          3N + 13 -> 3N -> O(N)







  Tuesday 10-23 problems:

  Step 1: Figure out the overall complexity
  Step 2: Find the dominant term(s)
  Step 3: Remove the constants

  1: 5N + 12 -> 5N -> O(N)

  2: 0.002N^2 + sqrt(N) + 42 -> 0.002N^2 - > O(N^2)

  3: 78N^1.5 + 1800N + 19 -> 78N^1.5 -> O(N^1.5)

  4: 4N^3 + 2K^2 + 8M -> 4N^3 + 2K^2 + 8M -> 
  O(N^3 + K^2 + M)

  5: 17N! + 2^N -> 17N! -> O(N!)

  
  Sample for example 1:
  function example1(N){
    // code for 6 operations
    for(let i = 0; i < N; i++){
      // code for 5 operations
    }
    // code for 6 operations
  }

  Sample for example 2:
  function example2(N) {

    for(let i = 0; i <= N*N; i++){
      if(i % 500 === 0){ // Once every 500 items = .002% of the time
        // code for 1 operation
      }
    }
    for(let i = 0; i < N**0.5; i++){
      // code for 1 operation
    }
    // code for 42 operations
  }

  Sample for example 3:
  function example3(N){
    for(let i = 0; i < N**1.5; i++){
      // code for 78 operations
    }
    for(let i = 0; i < N; i++){
      // code for 1800 operations
    }
    //code for 19 operations
  }


  Sample for example 4:
  function example4(N, K, M){
    for(let i = 0; i < N**3; i++){
      // code for 4 operations
    }
    
    for(let i = 0; i < K**2; i++){
      // code for 2 operations
    }
    
    for(let i = 0; i < M; i++){
      // code for 8 operations
    }
  }

  let numOperations = 0;
  Same for example 5:
  function example5(N){

    let val = findFactorial(N)

    for(let i = 0; i < val; i++){
      // code for 17 operations
    }

    let ary = [1,2];

    for(let i = 0; i < N; i++){
      ary = ary.concat(ary);
    }
  }

  function findFactorial(n){
    if(n === 1){
      return 1;
    }else{
      // 17 operations
      numOperations++;
      console.log(numOperations)
      return n * findFactorial(n-1);
    }
  }

*/
