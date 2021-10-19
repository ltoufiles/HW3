var password=document.getElementById("button"); 
 
 var plength = prompt("How many characters would you like?");

  while (plength < 6 || plength > 128) {
    plength = prompt("Length must be 6-128 characters");
  }

 var uppercase = confirm("Would you like to use uppercase letters?");
 var lowercase = confirm("Would you like to use lowercase letters?");
 var numbers = confirm("would you like to use numbers?");
 var symbols = confirm("would you like to use special characters?");

 while (!(uppercase || lowercase || numbers || symbols)) {
    alert("Sorry! You need to pick at least one character ...");

    uppercase = confirm("Do you want any uppercase letters?");
    lowercase = confirm("Any lowercase letters?");
    numbers = confirm("How about numbers?");
    symbols = confirm("Special characters?");
 }

 //DOM elements
 const resultEl = document.getElementById('password');

 document.getElementById('button').addEventListener('click', () => {
  resultEl.value = generatePassword(lowercase, uppercase, numbers, symbols, plength);


document.getElementById('clipboard').addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.value;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
 });
});

 const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
 };

 function generatePassword(lower, upper, number, symbol, length) {
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
   for (let i = 0; i < length; i += typesCount) {
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

 };