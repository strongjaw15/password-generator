// Assignment Code
var generateBtn = document.querySelector("#generate");

var inputLowerCase;
var inputUpperCase;
var inputSpecialChar;
var inputNumbers;

var passwordArray = [];
var passwordText;
var password;

var passwordLength;
var passwordLengthNum;
var characterPool = [];
var characterPoolLength;

var randomCharacter;
var randomNumber;
var i;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function initPassword() {

  // This resets the character pool for the generation of a new password.
  characterPool.splice (0, [characterPool.length])
  passwordArray.splice (0, [passwordArray.length])

  getParameters()
}

// This will give prompts to get the desired parameters for the password.
function getParameters() {

  // This confirms lowercase.
  if (confirm("Would you like to include lower-case letters? This is recommended.")) {

    characterPool.push (...lowerCase);

    inputLowerCase = true
  }
  else {
    inputLowerCase = false
  };

  // This confirms uppercase.
  if (confirm("Would you like to include upper-case letters?  This is recommended.")) {

    characterPool.push (...upperCase)

    inputUpperCase = true
  }
  else {
    inputUpperCase = false
  };

  // This confirms numbers.
  if (confirm("Would you like to include numbers?  This is recommended.")) {

    characterPool.push (...numbers)

    inputNumbers = true
  }
  else {
    inputNumbers = false
  };

  // This confirms special characters.
  if (confirm("Would you like to include special characters?  This is recommended.")) {

    characterPool.push (...specialChar)

    inputSpecialChar = true
  }
  else {
    inputSpecialChar = false
  };
 
  // This requires at least one character set to be selected.
  if (!inputLowerCase && !inputUpperCase && !inputNumbers && !inputSpecialChar) {
    alert("Please try again and select at least one character set.")
    return
  };

  // This sets the password length.
  if (passwordLength = prompt("Please enter the length of the password. It must be at least 8 characters long and no more than 128. A minimum length of 12 is recommended.")) {
  }
  else {
    return
  };

  // This restricts the input to the allowable range of numbers.
  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength = prompt("Please enter the length of the password. It must be at least 8 characters long and no more than 128. A minimum length of 12 is recommended.")) {
    }
    else {
      return
    }
  };

  convertPasswordLength()
};

// This converts the password length from a string to a number.
function convertPasswordLength() {

  passwordLengthNum = parseInt(passwordLength);
  // console.log(typeof passwordLengthNum);

  generatePassword();
};

// This randomly generates the password using the prescirbed parameters and a random number generator, inside a for loop.
function generatePassword() {

  for(var i = 0; i <= passwordLengthNum -1; i++) {
    getRandomCharacter();
    passwordArray.push(randomCharacter)
  };

  writePassword();

  // console.log(passwordArray)
};

// This gets each random character for the generatePassword function.
function getRandomCharacter() {
  characterPoolLength = characterPool.length;
  randomCharacter = [characterPool[generateRandomNumber(0, [characterPoolLength - 1])]];
  return randomCharacter;
};

// This is the random number generator, used in the getRandomCharacter function for choosing characters from the characterPool array.
function generateRandomNumber(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};  

// This writes the generated password to the page.
function writePassword() {

  // This writes the newly generated password array as a string into the password variable.
  password = passwordArray.join("");

  // password = generatePassword(); <-- This is old code from the starter.
  passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", initPassword);