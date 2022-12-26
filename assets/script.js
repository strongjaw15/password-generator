// Assignment Code
var generateBtn = document.querySelector("#generate");

var inputLowerCase
var inputUpperCase
var inputSpecialChar
var inputNumbers
var passwordLength
var characterPool

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  parameters()
}

// This will give prompts to get the desired paramters for the password.
function parameters() {

  // This confirms lowercase.
  if (confirm("Would you like to include lower-case letters? This is recommended.")) {
    inputLowerCase = (true)
  }
  else {
    inputLowerCase = (false)
  };

  // This confirms uppercase.
  if (confirm("Would you like to include upper-case letters?  This is recommended.")) {
    inputUpperCase = (true)
  }
  else {
    inputUpperCase = (false)
  };

  // This confirms numbers.
  if (confirm("Would you like to include numbers?  This is recommended.")) {
    inputNumbers = (true)
  }
  else {
    inputNumbers = (false)
  };

  // This confirms special characters.
  if (confirm("Would you like to include special characters?  This is recommended.")) {
    inputSpecialChar = (true)
  }
  else {
    inputSpecialChar = (false)
  };
 
  // This requires at least one character set to be selected.
  if (!inputLowerCase && !inputUpperCase && !inputNumbers && !inputSpecialChar) {
    alert("Please try again and select at least one character set.")
    return
  };

  passwordLength = prompt("Please enter the length in characters of the password. It must be at least 8 and no more than 128. A minimum length of 12 is recommended.")
  
    while (passwordLength < 8) {
      passwordLength = prompt("Please enter the length in characters of the password. It must be at least 8 and no more than 128. A minimum length of 12 is recommended.")
    }
    while (passwordLength > 128) {
      passwordLength = prompt("Please enter the length in characters of the password. It must be at least 8 and no more than 128. A minimum length of 12 is recommended.")
    };


  mergeParamters()
};

// This will merge the selected character arrays into one array for the password to be generated from, using the inputLowerCase, inputUpperCase, inputSpecialChar, and inputNumber arrays.
function mergeParamters() {
  if (inputLowerCase && inputUpperCase && inputNumbers && inputSpecialChar) {
    characterPool = [...lowerCase, ...upperCase, ...numbers, ...specialChar]
  }
  else if (!inputLowerCase && inputUpperCase && inputNumbers && inputSpecialChar) {
    characterPool = [...upperCase, ...numbers, ...specialChar]
  }
  else if (inputLowerCase && !inputUpperCase && inputNumbers && inputSpecialChar) {
    characterPool = [...lowerCase, ...numbers, ...specialChar]
  }
  else if (inputLowerCase && inputUpperCase && !inputNumbers && inputSpecialChar) {
    characterPool = [...lowerCase, ...upperCase, ...specialChar]
  }
  else if (inputLowerCase && inputUpperCase && inputNumbers && !inputSpecialChar) {
    characterPool = [...lowerCase, ...upperCase, ...numbers]
  }
  else if (!inputLowerCase && !inputUpperCase && inputNumbers && inputSpecialChar) {
    characterPool = [...numbers, ...specialChar]
  }
  else if (inputLowerCase && !inputUpperCase && !inputNumbers && inputSpecialChar) {

  }
};

function generatePassword() {

};

function randomNumber() {

};







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
