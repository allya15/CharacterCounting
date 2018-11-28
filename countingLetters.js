var string = "Lighthouse in the house";

function countLetters (string) {
  var result = {};
  var newString = string.split(" ").join("");

  for (var i = 0; i < newString.length; i++) {
    if (!(newString[i] in result)) {
      result[newString[i]] =  1;
    }
    else {
      result[newString[i]] = result[newString[i]] + 1;
    }
  }
  return result;
}


console.log(countLetters(string));