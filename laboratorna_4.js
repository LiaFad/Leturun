// 1

let password = "Hello123";

let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;

for (let i = 0; i < password.length; i++) {
  let char = password[i];

  if (char >= "A" && char <= "Z") {
    hasUppercase = true;
  }

  if (char >= "a" && char <= "z") {
    hasLowercase = true;
  }

  if (char >= "0" && char <= "9") {
    hasNumber = true;
  }
}

let conditions = 0;

if (password.length >= 8) {
  conditions++;
}

if (hasUppercase) {
  conditions++;
}

if (hasLowercase) {
  conditions++;
}

if (hasNumber) {
  conditions++;
}

if (password.length < 6) {
  console.log("Password strength: Too weak");
} else if (conditions >= 2 && conditions <= 3) {
  console.log("Password strength: Medium");
} else if (conditions === 4) {
  console.log("Password strength: Strong");
}


// 2 

let text = "Hello123 world45 9test";

let currentNumber = "";
let numbersCount = 0;
let sum = 0;
let evenCount = 0;
let greaterThan50 = 0;

for (let i = 0; i <= text.length; i++) {
  let char = text[i];

  if (char >= "0" && char <= "9") {
    currentNumber += char;
  } else {
    if (currentNumber !== "") {
      let number = Number(currentNumber);

      numbersCount++;
      sum += number;

      if (number % 2 === 0) {
        evenCount++;
      }

      if (number > 50) {
        greaterThan50++;
      }

      currentNumber = "";
    }
  }
}

console.log("Numbers found:", numbersCount);
console.log("Sum:", sum);
console.log("Even:", evenCount);
console.log("Greater than 50:", greaterThan50);


// 3

let balance = "1000";
let withdraw = "370";

balance = Number(balance);
withdraw = Number(withdraw);

if (withdraw > balance) {
  console.log("Not enough money");
} else if (withdraw % 10 !== 0) {
  console.log("Invalid amount");
} else {
  let currentWithdraw = withdraw;

  let hundreds = Math.floor(currentWithdraw / 100);
  currentWithdraw = currentWithdraw % 100;

  let fifties = Math.floor(currentWithdraw / 50);
  currentWithdraw = currentWithdraw % 50;

  let twenties = Math.floor(currentWithdraw / 20);
  currentWithdraw = currentWithdraw % 20;

  let tens = Math.floor(currentWithdraw / 10);

  if (hundreds > 0) {
    console.log("100 x", hundreds);
  }

  if (fifties > 0) {
    console.log("50 x", fifties);
  }

  if (twenties > 0) {
    console.log("20 x", twenties);
  }

  if (tens > 0) {
    console.log("10 x", tens);
  }

  let newBalance = balance - withdraw;

  console.log("New balance:", newBalance);
}