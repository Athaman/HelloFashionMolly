function onlyUnique(input){
  if (typeof input !== "string") return "please input a string";

  for (var i = 0; i < input.length; i++){
    if(input.indexOf(input[i], i + 1) !== -1){
      return false;
    }
  }

  return true;

}

function onlyUnique1(input){
  if (typeof input !== "string") return "please input a string";

  for (var i = 0; i < input.length; i++){
    for (var j = i + 1; j < input.length; j++){
      if(input[j] === input[i]) {
        return false;
      }
    }
  }

  return true;
}

function onlyUnique2(input) {
  if (typeof input !== "string") return "please input a string";

  var hash = {};

  for (var i = 0; i < input.length; i++){
    if(hash.hasOwnProperty(input[i])){
      return false;
    }

    hash[input[i]] = true;
  }

  return true;
}

function onlyUnique3(input){
  if (typeof input !== "string") return "please input a string";

  return new Set(input).size === input.length;
}

function onlyUnique4(input){
  if (typeof input !== "string") return "please input a string";

  return !/(.).*\1/.test(input);
}

function isPalindrome1(input) {
  if (typeof input !== "string") return "please input a string";

  input = input.toLowerCase().replace(/\W/g, '');

  return input.split().reverse().join() === input;
}

function isPalindrome2(input) {
  if (typeof input !== "string") return "please input a string";

  input = input.toLowerCase().replace(/\W/g, '')

  for(var i = 0; i < input.length / 2; i++){
    if(input[i] !== input[input.length - (i + 1)]){
      return false;
    }
  }
  return true;
}








(function test() {
  console.time('onlyUnique');
  for(var i = 0; i < 10000000; i++){
    onlyUnique('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // Long Test onlyUnique: 3119.721ms
    onlyUnique('abcdefghijklmnopqrstuvwxyz') // Mid Test onlyUnique: 1272.796ms
    onlyUnique('abb'); // Short Test onlyUnique: 101.782ms
  }
  console.timeEnd('onlyUnique'); // onlyUnique: 3670.294ms

  console.time('onlyUnique1');
  for(var i = 0; i < 10000000; i++){
    onlyUnique1('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // Long Test onlyUnique1: 4159.240ms
    onlyUnique1('abcdefghijklmnopqrstuvwxyz') // Mid Test onlyUnique1: 1275.102ms
    onlyUnique1('abb'); // Short Test onlyUnique1: 27.486ms
  }
  console.timeEnd('onlyUnique1'); // onlyUnique1: 5412.218ms

  console.time('onlyUnique2');
  for(var i = 0; i < 1000000; i++){
    onlyUnique2('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // Long Test onlyUnique2: 14347.528ms
    onlyUnique2('abcdefghijklmnopqrstuvwxyz') // Mid Test onlyUnique2: 4490.617ms
    onlyUnique2('abb'); // Short Test onlyUnique2: 90.933ms
  }
  console.timeEnd('onlyUnique2'); // onlyUnique2: 18353.832ms

  console.time('onlyUnique3');
  for(var i = 0; i < 1000000; i++){
    onlyUnique3('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // Long Test onlyUnique3: 5708.615ms
    onlyUnique3('abcdefghijklmnopqrstuvwxyz') // Mid Test onlyUnique3: 3363.688ms
    onlyUnique3('abb'); // Short Test onlyUnique3: 392.538ms
  }
  console.timeEnd('onlyUnique3'); // onlyUnique3: 9151.668ms

  console.time('onlyUnique4');
  for(var i = 0; i < 1000000; i++){
    onlyUnique4('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // Long Test onlyUnique4: 6294.104ms
    onlyUnique4('abcdefghijklmnopqrstuvwxyz') // Mid Test onlyUnique4: 1963.844ms
    onlyUnique4('abb'); // Short Test onlyUnique4: 140.873ms
  }
  console.timeEnd('onlyUnique4'); // onlyUnique4: 8242.789ms

  console.time('isPalindrome1');
  for(var i = 0; i < 1000000; i++){
    isPalindrome1('ATOYOTA'); // Short test = isPalindrome1: 292.496ms
    isPalindrome1('Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod.') // Long test = isPalindrome1: 695.502ms
  }
  console.timeEnd('isPalindrome1'); // combined = isPalindrome1: 941.662ms

  console.time('isPalindrome2');
  for(var i = 0; i < 1000000; i++){
    isPalindrome2('ATOYOTA'); // Short test = isPalindrome2: 228.133ms
    isPalindrome2('Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod.') // Long test = isPalindrome2: 735.878ms
  }
  console.timeEnd('isPalindrome2'); // combined = isPalindrome2: 1205.584ms
})();
