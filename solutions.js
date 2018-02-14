// Final solution with the second highest benchmarks behind the implementation using indexOf
function onlyUnique(input){
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";
  // if there are more than 52 characters (upper and lower) they can't be unique
  if (input.length > 52) return false;

  for (var i = 0; i < input.length; i++){
    // set j to one index above i to start and then iterate by 1
    for (var j = i + 1; j < input.length; j++){
      // check current j index against current i index, if a match there is a duplicate
      if(input[j] === input[i]) {
        return false;
      }
    }
  }

  // if no duplicates return true
  return true;
}

/* no javascript functions and runs comparably for short inputs, falls behind in
  efficiency as the input grows*/
function isPalindrome(input) {
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  /* this line is optional if you want to represent the english value of Palindrome
    i.e. non letters and capitals aren't counted. toLowerCase() makes any capitals
    small and replace(/\W/g, '') matches any 'non word character' (not a letter or number)
    and removes it*/
  input = input.toLowerCase().replace(/\W/g, '');
  // can use input.length/2 since if you make it half way you have a palindrome
  for(var i = 0; i < input.length / 2; i++){
    // compare input current index to it's corresponding distance from the end of string
    // the +1 is to account for count from 0 indexing as length is 1 higher than the final index
    if(input[i] !== input[input.length - (i + 1)]){
      return false;
    }
  }
  return true;
}

// test the functions in node environment
module.exports.test = function() {
  console.log('running tests, all should print true');
  console.log(onlyUnique(20) === "please input a string");
  console.log(onlyUnique('abcdefg') === true);
  console.log(onlyUnique('abcba') === false);
  console.log(isPalindrome('ATOYOTA') === true);
  console.log(isPalindrome('ORANGE') === false);
  console.log(isPalindrome(20) === "please input a string");
}
