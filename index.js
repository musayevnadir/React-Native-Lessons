/** @format */

// ! Task 1

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

console.log("-------------------------------------------------------------");
// ------------------------------------------------------------------------

// ! Task 2

// Part 1

const scores = [213, 345, 564, 754, 756];

const [firstScore, secondScore] = scores;
console.log("FirstScore:", firstScore);
console.log("SecondScore:", secondScore);

const student = {
  name: "Nadir",
  age: 33,
  isEnrolled: false,
};

const { name, age } = student;

console.log("Name:", name);
console.log("Age:", age);

// Part 2

console.log("TypeOf Scores:", typeof scores);
console.log("TypeOf Name:", typeof name);
console.log("TypeOf Age", typeof age);
console.log("Scores Length:", scores.length);

// Part 2

console.log("Sum:", firstScore + secondScore);
console.log("Difference::", firstScore - secondScore);

console.log("Compare:", firstScore > secondScore);
console.log("Compare:", firstScore < secondScore);

console.log(firstScore > secondScore && secondScore > age);
console.log(firstScore < secondScore || secondScore > age);

if (!student.isEnrolled) {
  console.log("Student is not enrolled");
} else {
  console.log("Student is enrolled");
}
