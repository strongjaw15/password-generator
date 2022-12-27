// Assignment Code
var generateBtn = document.querySelector("#generate");

var inputLowerCase
var inputUpperCase
var inputSpecialChar
var inputNumbers

var passwordArray
var passwordText
var password

var passwordLength
var characterPool = []

var randomNumber
var i

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = password;

  // This resets the character pool for the generation of a new password.
  characterPool.splice (0, [characterPool.length])

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
  }
  // This restricts the input to the allowable range of numbers.
  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength = prompt("Please enter the length of the password. It must be at least 8 characters long and no more than 128. A minimum length of 12 is recommended.")) {
    }
    else {
      return
    }
  };

// generateRandomNumber(0, [characterPool.length - 1])

// console.log(characterPool[5]);

generatePassword();
};

function generatePassword() {

  for(var i = 0; i <= [passwordLength]; i++) {
    
  }

  // for( var i = 0; i < students.length; i++ ){
  //   console.log(`welcome to the team ${students[i]}`)
  //   }
    
  //   i = 0 means the counter starts at 0
    
  //   i < students.length tells it to go as long as i is less than the length of the array
    
  // i++ tells it to increment i by 1 each time. change the increment by saying i+2 (or whatever number.
  
};

function generateRandomNumber(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);