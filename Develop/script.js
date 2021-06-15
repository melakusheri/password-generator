// Assignment Code
var generateBtn = document.querySelector("#generate");


//Generating Random values
function getRandomUpperCase(){
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[Math.floor(Math.random()*uppercase.length)];
 }
 function getRandomLowerCase(){
  var lowercse = "bcdefghijklmnopqrstuvwxyz";
  return lowercse[Math.floor(Math.random()*lowercse.length)];
}
function getRandomNumber(){
  var number = "1234567890"

  return number[Math.floor(Math.random()*number.length)];
}

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}
//communicating with our DOM with selected ID
var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");

//declare a constant object where we could store

const randomFunc = {
  upper : getRandomUpperCase,
  lower : getRandomLowerCase,
  number: getRandomNumber,
  symbol : getRandomSymbol
};


//Generating  an event 

generateEl.addEventListener('click', () =>{
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  //Generating Password Function by Writing  password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});
  function generatePassword(upper, lower, number, symbol, length){
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  console.log(typesCount);

  const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
  return '';
  }

  for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          generatedPassword += randomFunc[funcName]();
      });
  }

  const finalPassword = generatedPassword.slice(0, length);


  return finalPassword;

}
