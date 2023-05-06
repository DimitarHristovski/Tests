function reverseString(string) {
    return string.split("").reverse().join("");
  }
  let inputString = "Dimitar Hristovski";
  let reversedString = reverseString(inputString);
  console.log(reversedString); 
  
  module.exports = reverseString;