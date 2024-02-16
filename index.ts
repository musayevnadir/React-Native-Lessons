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

// const stocks = [
//   {
//     symbol: "Mercedes",
//     price: 10.0,
//     sector: "Car",
//   },
//   {
//     symbol: "BMW",
//     price: 30.0,
//     sector: "Car",
//   },
//   {
//     symbol: "Hyundai",
//     price: 21.0,
//     sector: "Car",
//   },
//   {
//     symbol: "Vaz 2107",
//     price: 1,
//     sector: "Car",
//   },
// ];

// Part 2:Price Update Simulation

// const updatedPriceCar = () => {
//   const randomIndex = Math.floor(Math.random() * stocks.length);
//   const randomStock = stocks[randomIndex];

//   const changePercentage = (Math.random() - 0.5) * 10;
//   const priceChange = randomStock.price * (changePercentage / 100);

//   randomStock.price += priceChange;
//   console.log(
//     `Updated price for ${randomStock.symbol}: $${randomStock.price.toFixed(2)}`
//   );
// };

// setInterval(updatedPriceCar, 3000);

// Part 3: Sector Filter()

// stocks.filter((elements) => console.log(elements));

// const filterBySector = (sector) => {
//   const filteredStocks = stocks.filter((stock) => stock.sector === sector);
//   console.log(`Stocks in ${sector} Sector:`, filteredStocks);
// };

// Part 4: Alert System

// const checkStockPrice = () => {
//   const randomNumber = 1000;

//   stocks.forEach((elements) => {
//     elements.price > randomNumber || elements.price < randomNumber * 0.5;
//     console.log(
//       `Alert: ${elements.symbol} price is ${elements.price.toFixed(2)}`
//     );
//     console.log("====================================================");
//   });
// };

// const timeOut = setTimeout(checkStockPrice, 5000);
// clearTimeout(timeOut);

// Sinif tapshiriqlari------------------------------------------------

// const numbers = [2, 4, 65, 1, 56, 7, 123, 68, 234, 52, 12, 3, 4, 6];

// const newArray = numbers.map((el) => el * 2);

// -----------------------------------------------------------------

// const users = [
//   {
//     name: "Alice",
//     age: 30,
//     interests: ["coding", "hiking"],
//     email: "alice@example.com",
//   },
//   {
//     name: "Bob",
//     age: 25,
//     interests: ["gaming", "reading"],
//     email: "bob@example.com",
//   },
//   {
//     name: "Charlie",
//     age: 35,
//     interests: ["coding", "cooking", "reading"],
//     email: "charlie@example.com",
//   },
//   {
//     name: "Diana",
//     age: 28,
//     interests: ["yoga", "reading", "gardening"],
//     email: "diana@example.com",
//   },
//   {
//     name: "Ethan",
//     age: 40,
//     interests: ["hiking", "photography"],
//     email: "ethan@example.com",
//   },
//   {
//     name: "Fiona",
//     age: 22,
//     interests: ["music", "gaming"],
//     email: "fiona@example.com",
//   },
//   {
//     name: "George",
//     age: 32,
//     interests: ["coding", "gaming", "reading"],
//     email: "george@example.com",
//   },
//   {
//     name: "Hannah",
//     age: 27,
//     interests: ["writing", "yoga"],
//     email: "hannah@example.com",
//   },
//   {
//     name: "Ian",
//     age: 30,
//     interests: ["photography", "cooking"],
//     email: "ian@example.com",
//   },
//   {
//     name: "Julia",
//     age: 24,
//     interests: ["coding", "yoga"],
//     email: "julia@example.com",
//   },
// ];

// const nameAge = users.map((element) => `${element.name} is ${element.age}`);
// console.log(nameAge);

// ---------------------------------------------------------------------------

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Book", price: 20 },
//   { id: 3, name: "Smartphone", price: 500 },
//   { id: 4, name: "Tablet", price: 300 },
//   { id: 5, name: "Headphones", price: 150 },
//   { id: 6, name: "Keyboard", price: 50 },
//   { id: 7, name: "Mouse", price: 25 },
//   { id: 8, name: "Monitor", price: 200 },
//   { id: 9, name: "Camera", price: 400 },
//   { id: 10, name: "Charger", price: 30 },
// ];

// const newArray = products.map((element) => {
// element.tax = "Hello";
// element.name = `${element.name} (${element.id})`;
// return element;
// const tax = element.price * 0.1;
// return {
//   ...element,
//   tax,
//   name: `${element.name} (${element.id})`,
// };
// });

// console.log(newArray);

// -----------------------------------------------------------------------

// const users = [
//   {
//     name: "Alice",
//     age: 30,
//     interests: ["coding", "hiking"],
//     email: "alice@example.com",
//   },
//   {
//     name: "Bob",
//     age: 25,
//     interests: ["gaming", "reading"],
//     email: "bob@example.com",
//   },
//   {
//     name: "Charlie",
//     age: 35,
//     interests: ["coding", "cooking", "reading"],
//     email: "charlie@example.com",
//   },
//   {
//     name: "Diana",
//     age: 28,
//     interests: ["yoga", "reading", "gardening"],
//     email: "diana@example.com",
//   },
//   {
//     name: "Ethan",
//     age: 40,
//     interests: ["hiking", "photography"],
//     email: "ethan@example.com",
//   },
//   {
//     name: "Fiona",
//     age: 22,
//     interests: ["music", "gaming"],
//     email: "fiona@example.com",
//   },
//   {
//     name: "George",
//     age: 32,
//     interests: ["coding", "gaming", "reading"],
//     email: "george@example.com",
//   },
//   {
//     name: "Hannah",
//     age: 27,
//     interests: ["writing", "yoga"],
//     email: "hannah@example.com",
//   },
//   {
//     name: "Ian",
//     age: 30,
//     interests: ["photography", "cooking"],
//     email: "ian@example.com",
//   },
//   {
//     name: "Julia",
//     age: 24,
//     interests: ["coding", "yoga"],
//     email: "julia@example.com",
//   },
// ];

// const newArray = users.filter((user) => user.age >= 30);

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Book", price: 20 },
//   { id: 3, name: "Smartphone", price: 500 },
//   { id: 4, name: "Tablet", price: 300 },
//   { id: 5, name: "Headphones", price: 150 },
//   { id: 6, name: "Keyboard", price: 50 },
//   { id: 7, name: "Mouse", price: 25 },
//   { id: 8, name: "Monitor", price: 200 },
//   { id: 9, name: "Camera", price: 400 },
//   { id: 10, name: "Charger", price: 30 },
// ];

// const newArray = products.filter(({ price }) => price >= 50 && price <= 300);
// console.log(newArray);

// ----------------------------------------------------------------------------

// const users = [
//   {
//     name: "Alice",
//     age: 30,
//     interests: ["coding", "hiking"],
//     email: "alice@example.com",
//   },
//   {
//     name: "Bob",
//     age: 25,
//     interests: ["gaming", "reading"],
//     email: "bob@example.com",
//   },
//   {
//     name: "Charlie",
//     age: 35,
//     interests: ["coding", "cooking", "reading"],
//     email: "charlie@example.com",
//   },
//   {
//     name: "Diana",
//     age: 28,
//     interests: ["yoga", "reading", "gardening"],
//     email: "diana@example.com",
//   },
//   {
//     name: "Ethan",
//     age: 40,
//     interests: ["hiking", "photography"],
//     email: "ethan@example.com",
//   },
//   {
//     name: "Fiona",
//     age: 22,
//     interests: ["music", "gaming"],
//     email: "fiona@example.com",
//   },
//   {
//     name: "George",
//     age: 32,
//     interests: ["coding", "gaming", "reading"],
//     email: "george@example.com",
//   },
//   {
//     name: "Hannah",
//     age: 27,
//     interests: ["writing", "yoga"],
//     email: "hannah@example.com",
//   },
//   {
//     name: "Ian",
//     age: 30,
//     interests: ["photography", "cooking"],
//     email: "ian@example.com",
//   },
//   {
//     name: "Julia",
//     age: 24,
//     interests: ["coding", "yoga"],
//     email: "julia@example.com",
//   },
// ];

// const MIN_AGE = 25;
// const MAX_AGE = 35;

// users.map(({ name, age }) => {
//   if (age >= MIN_AGE && age <= MAX_AGE) {
//     console.log(`${name} ${age}`);
//   }
// });

// const sendEmailNotification = () => {};

// Task at Home-----------------------------------

interface Customer {
  id?: number;
  name?: string;
  email?: string;
  location?: {
    city?: string;
    country?: string;
  };
}

interface Orders {
  orderId?: number;
  customerId?: number;
  product?: string;
  quantity?: number;
  price?: number;
}

const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    location: { city: "New York", country: "USA" },
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    location: { city: "Paris", country: "France" },
  },
  {
    id: 3,
    name: "Fazil",
    email: "bob@example.com",
    location: { city: "Madrid", country: "Span" },
  },
  {
    id: 4,
    name: "BobBobBip",
    email: "bob@example.com",
    location: { city: "Baku", country: "Azerbaijan" },
  },
  {
    id: 5,
    name: "Mary",
    email: "bob@example.com",
    location: { city: "Barcelona", country: "Spain" },
  },
  {
    id: 6,
    name: "Bork",
    email: "bob@example.com",
    location: { city: "Roma", country: "Italy" },
  },
  {
    id: 7,
    name: "Lob",
    email: "bob@example.com",
    location: { city: "Milan", country: "Italy" },
  },
  {
    id: 8,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 9,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 10,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 11,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 12,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 13,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 14,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
  {
    id: 15,
    name: "Pika",
    email: "bob@example.com",
    location: { city: "Rio", country: "Brazil" },
  },
];

const orders = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 2, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
  { orderId: 103, customerId: 3, product: "Tablet", quantity: 1, price: 600 },
  {
    orderId: 104,
    customerId: 4,
    product: "Headphones",
    quantity: 1,
    price: 200,
  },
  { orderId: 105, customerId: 5, product: "Camera", quantity: 5, price: 1500 },
  { orderId: 106, customerId: 6, product: "Monitor", quantity: 1, price: 1000 },
  { orderId: 107, customerId: 7, product: "Keyboard", quantity: 3, price: 150 },
  { orderId: 108, customerId: 8, product: "Printer", quantity: 2, price: 700 },
  { orderId: 109, customerId: 9, product: "Mouse", quantity: 10, price: 50 },
  {
    orderId: 110,
    customerId: 10,
    product: "External Hard Drive",
    quantity: 1,
    price: 300,
  },
  {
    orderId: 111,
    customerId: 11,
    product: "Wireless Earbuds",
    quantity: 3,
    price: 120,
  },
  { orderId: 112, customerId: 12, product: "Speaker", quantity: 1, price: 250 },
  { orderId: 113, customerId: 13, product: "Desk", quantity: 4, price: 400 },
  { orderId: 114, customerId: 14, product: "Router", quantity: 8, price: 80 },
  {
    orderId: 115,
    customerId: 15,
    product: "Printer Paper",
    quantity: 3,
    price: 20,
  },
];

// 1) Customer Email List: Use map to create an array of all customer emails.

const emailList: string[] = customers.map(({ email }) => email);
console.log(emailList);

// 2) High-Value Orders: Use filter to find all orders with a total value (quantity * price) greater than $1000.

const highValueOrders: Orders[] = orders.filter(
  ({ quantity, price }) => quantity * price <= 1000
);
console.log("-----", highValueOrders);

// 3) To find the customer object for a customer named "Alice" using the find method in JavaScript, assuming you have an array of customer objects, you can do the following:

const searchAlice: Customer | undefined = customers.find(
  ({ name }) => name === "Alice"
);
console.log(searchAlice);

//  4) Index of a Specific Order: Use findIndex to find the index of the order with orderId 102.

const customerId: number = orders.findIndex(({ orderId }) =>
  orderId === 102 ? orders : null
);
console.log(customerId);

// 5 ) Check for Orders in a Specific Country: Use some to check if there are any orders from customers located in "USA".

const ordersInUSA: boolean = customers.some(
  ({ location }) => location.country === "USA"
);
console.log("There are orders from customers located in USA", ordersInUSA);

// 6 )Print Order Summaries: Use forEach to print a summary for each order in the format "Order [orderId] by [customerName]: [quantity] x [product] for $[price] each."

orders.forEach((order) => {
  const { orderId, customerId, product, quantity, price } = order;
  const customer: Customer | undefined = customers.find(
    (customer) => customer.id === customerId
  );
  const customerName: string | undefined | null = customer
    ? customer.name
    : null;
  console.log(
    `Order ${orderId} by ${customerName}: ${quantity} x ${product} for $${price} each.`
  );
});

// 7)Sort Customers by Name: Use sort to create a new array of customers sorted alphabetically by name.

const sortedCustomers: Customer[] = customers.sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(sortedCustomers);
