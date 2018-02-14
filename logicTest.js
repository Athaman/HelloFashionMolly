/*Create a function which when given a string input, checks if the input contains
only unique characters (characters which do not repeat) or not. Bonus points if
 you can achieve this without using an array/hash map structure */

 /* first thought, uses indexOf (a javascript method). Also inefficient at O=n log(n)
    since it has to run through the string from the current i value to the end for
    each loop */
function onlyUnique(input){
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  for (var i = 0; i < input.length; i++){
    /* check for the character located at index in any point of the string
    further than index + 1 and return false if found*/
    if(input.indexOf(input[i], i + 1) !== -1){
      return false;
    }
  }

// if no duplicates return true
  return true;

}

// rewriting above without the indexOf function still O=n log(n)
function onlyUnique(input){
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

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

/* second option, uses a hash table (JS Object) which is against the bonus points but has an
   efficiency of O=(n) */
function onlyUnique(input) {
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  // instantiate an empty object
  var hash = {};

  for (var i = 0; i < input.length; i++){
    /* if the object has a key that matches the current letter of the string return false
      since you have found a duplicate*/
    if(hash.hasOwnProperty(input[i])){
      return false;
    }

    // add the current character as a key to the object
    hash[input[i]] = true;
  }

  //  if no duplicates found return true
  return true;
}

/* alternatively use javascript Sets which are also array objects I'd need to investigate
   set efficiency for the big O of this one */
function onlyUnique(input){
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  // convert the string into a Set (unique values array) and
  // return the comparison of the set length and input length
  return new Set(input).size === input.length;
}

/* A regex solution maybe? I would also have to investigate for big O */
function onlyUnique(input){
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  /* the regex searches for any individual character, at any point in a string and
    stores it as a capture group, it then checks if that capture group is present at
    all in the remaining string disregarding any number of any characters between the
    first and second instance of the character*/
  return !/(.).*\1/.test(input);
}


/* Given a string input, write a function to check if it is a palindrome.
  A palindrome is a string which reads the same when reversed. For instance,
  ATOYOTA is a Palindrome while ORANGE is not. */

// the classic javascript palindrome check
function isPalindrome(input) {
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  /* this line is optional if you want to represent the english value of Palindrome
    i.e. non letters and capitals aren't counted. toLowerCase() makes any capitals
    small and replace(/\W/g, '') matches any 'non word character' (not a letter or number)
    and removes it*/
  input = input.toLowerCase().replace(/\W/g, '')

  /* split() turns the string into an array, reverse runs the array backwards and join
    forms it back into a string, you then compare this to the input for a palindrome check*/
  return input.split().reverse().join() === input;
}

// Without javascript methods and a O=n/2
function isPalindrome(input) {
  // type check the input to avoid errors from calling string methods
  if (typeof input !== "string") return "please input a string";

  /* this line is optional if you want to represent the english value of Palindrome
    i.e. non letters and capitals aren't counted. toLowerCase() makes any capitals
    small and replace(/\W/g, '') matches any 'non word character' (not a letter or number)
    and removes it*/
  input = input.toLowerCase().replace(/\W/g, '')
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
