/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.
***********************************************************************/

function countRepeats(str) {
  repeats = {};

  str.split('').forEach(element =>{
    if(repeats[element]){ repeats[element] ++
      }else{
        repeats[element] = 1;
      }
    });
    var result = 0;
    for(item in repeats) if (repeats[item] > 1) result++;
    return result;
}

console.log(countRepeats('alvin')); //=> 0
console.log(countRepeats('aaaalvin')); //=> 1
console.log(countRepeats('pops')); //=> 1
console.log(countRepeats('mississippi')); //=> 3
console.log(countRepeats('hellobootcampprep')); //=> 4
