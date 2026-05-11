// 1: Середнє число

let a = "10";
let b = "20";
let c = "30";

a = Number(a);
b = Number(b);
c = Number(c);

let average = (a + b + c) / 3;

console.log("Average:", average);


// 2: Чайові в ресторані

let bill = "275";
let tipPercent = "15";

bill = Number(bill);
tipPercent = Number(tipPercent);

let tip = bill * tipPercent / 100;
let total = bill + tip;

console.log("Tip:", tip);
console.log("Total:", total);


// 3: Вартість пального

let distance = "350";
let fuelPer100km = "8";
let fuelPrice = "60";

distance = Number(distance);
fuelPer100km = Number(fuelPer100km);
fuelPrice = Number(fuelPrice);

let fuelNeeded = distance * fuelPer100km / 100;
let tripCost = fuelNeeded * fuelPrice;

console.log("Fuel needed:", fuelNeeded);
console.log("Trip cost:", tripCost);