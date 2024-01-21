/** @format */

// Part 1

const numbers = [10, 20, 30, 40, 50];
console.log(numbers);

const [firstNumber, secondNumber] = numbers;

console.log("FirstNumber:", firstNumber);
console.log("SecondNumber", secondNumber);
console.log("Number Array length:", numbers.length);

// -------------------------------------------------

// Part 2

const myString = "Nadir";
const myNumber = 77;
const myBoolean = true;

console.log("MyString:", typeof myString);
console.log("MyNumber:", typeof myNumber);
console.log("MyBoolean:", typeof myBoolean);

// -------------------------------------------------

// Part 3

console.log("Sum:", firstNumber + secondNumber);
console.log("Difference:", firstNumber - secondNumber);
console.log("Product:", firstNumber * secondNumber);
console.log("Quotient", firstNumber / secondNumber);
console.log("Remainder", firstNumber % secondNumber);

console.log("Result == :", firstNumber == secondNumber);
console.log("Result === :", firstNumber === secondNumber);
console.log("Result != :", firstNumber != secondNumber);
console.log("Result !== :", firstNumber !== secondNumber);
console.log("Result < :", firstNumber < secondNumber);
console.log("Result > :", firstNumber > secondNumber);
console.log("Result <= :", firstNumber <= secondNumber);
console.log("Result >= :", firstNumber >= secondNumber);

// -------------------------------------------------

// Part 4

const isEvenAndPositive = firstNumber % 2 === 0 && firstNumber > 0;
console.log("isEvenAndPositive:", isEvenAndPositive);

const isEitherEvenAndPositive = firstNumber % 2 === 0 || firstNumber > 0;
console.log("isEvenAndPositive:", isEitherEvenAndPositive);

const isNotNegative = firstNumber >= 0;
console.log("isNotNegative:", isNotNegative);
