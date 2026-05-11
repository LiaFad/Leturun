"use strict";

// Задача 1
// Розрахунок вартості покупки

let price = 250;
let quantity = 2;
let discount = 10;

// Загальна сума без знижки
let totalPrice = price * quantity;

// Сума зі знижкою
let discountedPrice = totalPrice - (totalPrice * discount / 100);

// Перевірка чи сума після знижки більша за 1000
let isExpensive = discountedPrice > 1000;

// Виведення результату
console.log(`Загальна сума: ${totalPrice} грн. Зі знижкою: ${discountedPrice} грн.`);
console.log(`Дорога покупка: ${isExpensive}`);


// Задача 2
// Перевірка віку користувача

let age = 20;
let name = "Олег";

// Перевірка повноліття
let isAdult = age >= 18;

// Виведення результату
console.log(`Ім'я: ${name}. Вік: ${age}. Повнолітній: ${isAdult}`);