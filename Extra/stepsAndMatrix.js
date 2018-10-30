// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // Logic for adding hashes & spaces
      // i represents the amount of hashes we need on the current line
      // The remainder of j will represent how many spaces we need
      if (j <= i) {
        str += '#';
      } else {
        str += ' ';
      }

      //str += j <= i ? '#' : ' ';
    }
    console.log(str);
    str = '';
  }
}

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1) -> Length: 1
//       '#'
//   pyramid(2) -> Length: 3
//       ' # '
//       '###'
//   pyramid(3) -> Length: 5
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, midFiller = '#', outsideFiller = ' ') {
  let mid = n;

  let str = '';
  // How many lines/rows
  for (let row = 1; row <= n; row++) {
    // How many characters/columns per line
    for (let column = 1; column <= n * 2 - 1; column++) {
      // When to add a hash?
      if (
        // Check if valid range on left
        column - row < mid &&
        // Check if valid range on right
        column + row > mid
      ) {
        str += midFiller;
      } else {
        str += outsideFiller;
      }
    }
    console.log(str);
    str = '';
  }
}

function pyramid2(n, filler = '#', outside = ' ') {
  let mid = n - 1;

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (mid - row <= column && mid + row >= column) {
        level += filler;
      } else {
        level += outside;
      }
    }

    console.log(level);
  }
}

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // setup
  const result = [];

  for (let i = 0; i < n; i++) {
    // Generate the n arrays needed to fill our matrix
    result.push([]);
  }

  // Other vars needed

  // End setup
}
