let string = "dimitar hristovski";

function capitalizeWords(string) {


  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalizeFirst(words[i]);
  }
  return words.join(" ");
}

function capitalizeFirst(string) {
  if (string.length === 0) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let capitalizedString = capitalizeWords(string);
console.log(capitalizedString);

module.exports = capitalizeWords;
module.exports = capitalizeFirst;
