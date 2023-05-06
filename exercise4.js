function caesarCipher(str, shift) {
  shift = shift % 26;
  return str
    .split("")
    .map(function (char) {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shift) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        code = ((code - 97 + shift) % 26) + 97;
      }
      return String.fromCharCode(code);
    })
    .join("");
}

let message = "Dimitar Hristovski";
let encodedMessage = caesarCipher(message, 3);
console.log(encodedMessage);

module.exports = caesarCipher;
