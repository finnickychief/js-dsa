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
