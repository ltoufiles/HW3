 //DOM elements
 //const resultEl = document.getElementById('password');

 //document.getElementById('generate').addEventListener('click', () => {
 // resultEl.value = generatePassword(lowercase, uppercase, numbers, symbols, plength);
 // const textarea = document.createElement("textarea").placeholder = ps;
 // const password = resultEl.value;

  //if (!password) {
  //  return;
  //}

 // textarea.value = password;
//  document.body.appendChild(textarea);
  
 //});


 //const randomFunc = {
  // lower: getRandomLower,
  // upper: getRandomUpper,
  // number: getRandomNumber,
  // symbol: getRandomSymbol
 // };
 var specialCharacters = "!@#$%^&*()"
 var generatebtn = document.querySelector("#generate");
 
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 generatebtn.addEventListener("click", function () {
 
 function generatePassword() {
  enter = parseInt(prompt("Choose between 6 and 128 characters for your password."));

if (!enter) {
  alert("Sorry! You must make a selection.")
} else if (enter < 6 || enter > 128) {

    enter = parseInt(prompt("Length must be 6-128 characters"));

} else {
  //asks additional criteria questions after validated input
 var uppercase = confirm("Would you like to use uppercase letters?");
 var lowercase = confirm("Would you like to use lowercase letters?");
 var numbers = confirm("would you like to use numbers?");
 var symbols = confirm("would you like to use special characters?");

 var functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },

  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },

  getSpecialCharacters: function() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }

};

 while (!(uppercase || lowercase || numbers || symbols)) {
    alert("Sorry! You need to pick at least one character ...");

    uppercase = confirm("Do you want any uppercase letters?");
    lowercase = confirm("Any lowercase letters?");
    numbers = confirm("How about numbers?");
    symbols = confirm("Special characters?");
 }

  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);

   // create a loop
   for (let i = 0; i < entr; i++) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
    }

 const finalPassword = generatedPassword.slice(0, length);

 return finalPassword; {
}

// Generator functions
function getRandomLower() {
return rando("qwertyuiopasdfghjklzxcvbnm");
}

function getRandomUpper() {
return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
return rando(9);
}

function getRandomSymbol() {
return rando('!@#$%^&*(){}[]=<>/,.');
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}
 };