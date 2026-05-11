// 1 (Генератор логіну)

let fullName = "John Ronald Reuel Tolkien";
function generateLogin(fullName) {
  fullName = fullName.trim();
  let words = fullName.split(" ");
  let login = words[0].toLowerCase();
  login += "_";
  for (let i = 1; i < words.length; i++) {
    login += words[i][0].toLowerCase();
  }

  return login;
}

console.log(generateLogin(fullName));


// 2 (Аналізатор числа)

let number = 123407;
function analyzeNumber(number) {
    let numString = String(number);
    let sum = 0;
    let hasEven = false;
    let hasZero = false;
    
    for (let i = 0; i < numString.length; i++) {
    let digit = Number(numString[i]);

    sum += digit;

    if (digit % 2 === 0) {
      hasEven = true;
    }

    if (digit === 0) {
      hasZero = true;
    }
  }

  console.log("Sum:", sum);
  console.log("Digits:", numString.length);
  console.log("Has even:", hasEven);
  console.log("Has zero:", hasZero);
  console.log("Big number:", number > 1000);
  console.log("Divisible by 3:", number % 3 === 0);
}

analyzeNumber(number);