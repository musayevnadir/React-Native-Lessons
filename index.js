/** @format */

// /** @format */

// // ! Task 1

// // Part 1

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// const [firstNumber, secondNumber] = numbers;

// console.log("FirstNumber:", firstNumber);
// console.log("SecondNumber", secondNumber);
// console.log("Number Array length:", numbers.length);

// // -------------------------------------------------

// // Part 2

// const myString = "Nadir";
// const myNumber = 77;
// const myBoolean = true;

// console.log("MyString:", typeof myString);
// console.log("MyNumber:", typeof myNumber);
// console.log("MyBoolean:", typeof myBoolean);

// // -------------------------------------------------

// // Part 3

// console.log("Sum:", firstNumber + secondNumber);
// console.log("Difference:", firstNumber - secondNumber);
// console.log("Product:", firstNumber * secondNumber);
// console.log("Quotient", firstNumber / secondNumber);
// console.log("Remainder", firstNumber % secondNumber);

// console.log("Result == :", firstNumber == secondNumber);
// console.log("Result === :", firstNumber === secondNumber);
// console.log("Result != :", firstNumber != secondNumber);
// console.log("Result !== :", firstNumber !== secondNumber);
// console.log("Result < :", firstNumber < secondNumber);
// console.log("Result > :", firstNumber > secondNumber);
// console.log("Result <= :", firstNumber <= secondNumber);
// console.log("Result >= :", firstNumber >= secondNumber);

// // -------------------------------------------------

// // Part 4

// const isEvenAndPositive = firstNumber % 2 === 0 && firstNumber > 0;
// console.log("isEvenAndPositive:", isEvenAndPositive);

// const isEitherEvenAndPositive = firstNumber % 2 === 0 || firstNumber > 0;
// console.log("isEvenAndPositive:", isEitherEvenAndPositive);

// const isNotNegative = firstNumber >= 0;
// console.log("isNotNegative:", isNotNegative);

// console.log("-------------------------------------------------------------");
// // ------------------------------------------------------------------------

// // ! Task 2

// // Part 1

// const scores = [213, 345, 564, 754, 756];

// const [firstScore, secondScore] = scores;
// console.log("FirstScore:", firstScore);
// console.log("SecondScore:", secondScore);

// const student = {
//   name: "Nadir",
//   age: 33,
//   isEnrolled: false,
// };

// const { name, age } = student;

// console.log("Name:", name);
// console.log("Age:", age);

// // Part 2

// console.log("TypeOf Scores:", typeof scores);
// console.log("TypeOf Name:", typeof name);
// console.log("TypeOf Age", typeof age);
// console.log("Scores Length:", scores.length);

// // Part 2

// console.log("Sum:", firstScore + secondScore);
// console.log("Difference::", firstScore - secondScore);

// console.log("Compare:", firstScore > secondScore);
// console.log("Compare:", firstScore < secondScore);

// console.log(firstScore > secondScore && secondScore > age);
// console.log(firstScore < secondScore || secondScore > age);

// console.log(student.isEnrolled !== true);

// ! Task: Automated Stock Alert System

// 1 Task:Description
// Part 1

const stocks = [
  {
    symbol: "Mercedes",
    price: 10.0,
    sector: "Car",
  },
  {
    symbol: "BMW",
    price: 30.0,
    sector: "Car",
  },
  {
    symbol: "Hyundai",
    price: 21.0,
    sector: "Car",
  },
  {
    symbol: "Vaz 2107",
    price: 1,
    sector: "Car",
  },
];

// Part 2:Price Update Simulation

const updatedPriceCar = () => {
  const randomIndex = Math.floor(Math.random() * stocks.length);
  const randomStock = stocks[randomIndex];

  const changePercentage = (Math.random() - 0.5) * 10;
  const priceChange = randomStock.price * (changePercentage / 100);

  randomStock.price += priceChange;
  console.log(
    `Updated price for ${randomStock.symbol}: $${randomStock.price.toFixed(2)}`
  );
};

setInterval(updatedPriceCar, 3000);

// Part 3: Sector Filter()

stocks.filter((elements) => console.log(elements));

// Part 4: Alert System

const checkStockPrice = () => {
  const randomNumber = 1000;

  stocks.forEach((elements) => {
    elements.price > randomNumber || elements.price < randomNumber * 0.5;
    console.log(
      `Alert: ${elements.symbol} price is ${elements.price.toFixed(2)}`
    );
    console.log("====================================================");
  });
};

const timeOut = setTimeout(checkStockPrice, 5000);
clearTimeout(timeOut);
