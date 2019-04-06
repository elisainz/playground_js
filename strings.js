function Reverse(str) /*un parametro, funcion fija*/ /*reverses a number OR text*/ {
  return str.split("").reverse().join("");
}
var reverse1 = ("32443");
console.log(Reverse(reverse1));



function Alphabet_order(str) /*alphabetical order*/ {
  return str.split('').sort().join('');
}
var alphabeth1 = ("webmaster")
console.log(Alphabet_order(alphabeth1));



function Uppercase(str) /*converts the first letter of every word to uppercase*/ {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
var uppercase1 = ("prince of persia")
console.log(Uppercase(uppercase1));



function Find_longest_word(str) /*mostrar la palabra mas larga de un string*/  {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
var longestword1 = ("Web Development Tutorial")
console.log(Find_longest_word(longestword1));
