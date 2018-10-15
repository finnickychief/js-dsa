// Challenge 1
/*
  Write a method that takes a string and create then returns a map which stores the frequency for each character in the string

  let string = 'This is a string'

  We identified 2 separate operations for our algorithm:
      If the character is not in our map already: Add it
      code:
        if(charMap[char] === undefined) // If the current character does not exist in our map yet, set the value to 1
          charMap[char] = 1; // This sets the value for a key

      If the character is in the map: Increment the value associated with that key
      code:
        else
          charMap[char] += 1;
          charMap[char]++;

  To look through every character within our string, we can use a loop
    for(let i = 0; i < string.length; i++){

    }

    Altogether:

    function createCharMap(string){

      //let string = 'This is a string';
      let charMap = {};
      for(let i = 0; i < string.length; i++){
        let char = string[i]; // get the current character

        if(charMap[char] === undefined){
          charMap[char] = 1;
        }else{
          charMap[char]++;
        }
      }
      return charMap;
    }


    // Using split/reduce
    function createCharMap(string){
      let stringArr = string.split('');
      console.log(stringArr);

      // Reduce - Takes in a callback and an initial value for your accumulator
      // Callback - Takes in 2 to 4 parameters, we're only going to use the first 2

      // More similar to the way done on the board
      let charMap = stringArr.reduce((acc, char) =>{
        if(acc[char] === undefined){
          acc[char] = 1;
        }else{
          acc[char]++;
        }

        // More succinct
        // if(acc[char]){
        //   acc[char]++
        // }else{
        //   acc[char] = 1;
        // }

        // Ternary: If the char exists in our accumulator, increment it. Otherwise, set it to 1
        // acc[char] ? acc[char]++ : acc[char] = 1;


        return acc;
      }, {});

      return charMap;

    }



    // Used before in our anagrams problem



*/

// Challenge 2:
/*
    Write a method that takes a map structured similarly to the one in the previous question, and returns the number of vowels.

    Example:
      {e: 4, E: 2, i: 7, t: 8, u: 9} should give 22 vowels

    // Starter
    // By hand:
    let count = 0;
    count+= charMap['e'];
    count+= charMap['E'];
    count+= charMap['i'];
    count+= charMap['u'];
    // THIS DOES NOT WORK FOR ALL CHARMAPS
    

    let exampleMap = {e: 4, E: 2, i: 7, t: 8, u: 9};
    function vowelCount(charMap){
      let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
      let count = 0; 

      for(let i = 0; i < vowels.length; i++){
        let currVowel = vowels[i];

        // Check if the current vowel exists in the map
        if(charMap[currVowel]){
          // If it exists, add the value on it to the count
          count += charMap[currVowel];
        }

      }
      return count;

    }
    vowelCount(exampleMap);

*/

// Challenge #3
/*
    Create an index map for a string.
    The keys should be the characters within the string
    The values for these keys should be an array that contains the index of each occurence of the character in the string

    Example:
      'Hello' should give the map:
      {
        h: [0],
        e: [1],
        l: [2, 3],
        o: [4]
      }

      'This string' should give the map:
      {
        T: [0],
        h: [1],
        i: [2, 8],
        s: [3, 5],
        ' ': [4],
        t: [6],
        r: [7],
        n: [9],
        g: [10]
      }

      'repeater':
      {
        r: [0,7],
        e: [1,3,6],
        p: [2],
        a: [4],
        t: [5]
      }

      Operations:
       If the current character already exists in the map, add the index to the array
       If the current character does not exist in the map, create a new array with the index

      function createIndexMap(string){
        let indexMap = {};
        
        for(let i = 0; i < string.length; i++){
          let char = string[i]; // Get current character
         // If the current character already exists in the map, add the index to the array
          if(indexMap[char]){
            indexMap[char].push(i);
          }else{
            //If the current character does not exist in the map, create a new array with the index
            // let newArr = [];
            // newArr.push(i)
            // indexMap[char] = newArr;
            indexMap[char] = [i]; 
          }
        }

        return indexMap;

      }
*/

/*
  Challenge 4:
      Write a method that takes a string and returns the number of unique characters in the string.


      I recommend using a map

      function countUniqueChars(string){
       // string = string.replace(/[^'a-z]+/gi, ''); // If we want to remove punctuation/digits

        let charMap = createIndexMap(string); // Generate the map(a map will give you unique keys for all of the characters)

        let keyArray = Object.keys(charMap); // Get all of the keys of the map

        return keyArray.length; // Give the caller back how many keys there were

        //return Object.keys(createIndexMap(string)).length // 1-liner





      }

*/

/*
Challenge #5: Write a method that takes a string and returns the characters that have been repeated as an array
Example: ‘Hello’ should return [‘l’]
‘Wonderful world’ should return [‘o’, ‘r’, ‘l’, ’d’]

  function returnDuplicates(str){
    let result = [];
    let seenChars = {};

    for(let i = 0; i < str.length; i++){
      let currentChar = str[i]

      // If we've seen the current character:
      if(seenChars[currentChar]){
        // Push to results
        result.push(currentChar);
      }else{
        // If we have NOT seen the current character, add it to our seenChars list
        seenChars[currentChar] = true;
      }

    }

    return result;
  }

  // using an array, and only returning one of the duplicates for each character instead of all
  function returnDuplicatesArr(str){
    let result = [];
    let seenChars = [];

    for(let i = 0; i < str.length; i++){
      let currChar = str[i];
      if(seenChars.includes(currChar) && !result.includes(currChar)){
        result.push(currChar);
      }else{
        seenChars.push(currChar);
      }
    }

    return result;
  }



*/
