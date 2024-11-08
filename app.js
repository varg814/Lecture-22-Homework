// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.

const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function (num) {
  console.log(num * num);
});

// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.

const fruits = ["apple", "banana", "peach"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.

const numbers2 = [1, 2, 3, 4, 5];
let sum = 0;

numbers2.forEach(function (num) {
  sum += num;
});
console.log(sum);

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.

const students = ["student1", "student2", "student3"];

students.forEach(function (student, index) {
  console.log(`${student}  ${index}`);
});

// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.

const numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

const numbers4 = [1, 2, 3, 4, 5];

let newNumbers4 = numbers4.map((num) => {
  return num * num;
});
console.log(newNumbers4);

// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.

const names = ["KJHGkhaj", "LLYFkgfJD", "KHGjhgHKJHV"];

let newNames = names.map((name) => {
  return name.toLowerCase();
});
console.log(newNames);

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.

const numbers5 = [1, 2, 3, 4, 5];

let newNumbers5 = numbers5.map((num) => {
  return (num += 10);
});
console.log(newNumbers5);

// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.

const students2 = [
  { name: "student1", score: 85 },
  { name: "student2", score: 92 },
  { name: "student3", score: 78 },
];

let newStudents2 = students2.map((student) => {
  return student.name;
});
console.log(newStudents2);

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.

const numbers6 = [1, 2, 3, 4, 5];

let newNumbers6 = numbers6.map((num) => {
  if (num % 2 === 0) {
    return (num *= 2);
  }
  return num;
});
console.log(newNumbers6);

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.

const numbers7 = [1, 2, 3, 4, 5];

const newNumbers7 = numbers7.filter((num) => {
  return num % 2 == 0;
});

console.log(newNumbers7);

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

const names2 = ["123456", "123", "12345"];

let newNames2 = names2.filter((name) => {
  return name.length > 5;
});
console.log(newNames2);

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.

const numbers8 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const newNumbers8 = numbers8.filter((num) => {
  return num > 0;
});

console.log(newNumbers8);

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.

const products = [
  { name: "product1", price: 85 },
  { name: "product2", price: 101 },
  { name: "product3", price: 102 },
];

let newProducts = products.filter((product) => {
  return product.price > 100;
});

console.log(
  newProducts.map((product) => {
    return product.name;
  })
);

// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.

const numbers9 = [-5, -4, -34, -2, -12, 10, 14, 121, 13, 114, 51];

const newNumbers9 = numbers9.filter((num) => {
  return num > 50;
});

console.log(newNumbers9);

// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.

const numbers10 = [1, 2, 3, 4, 5];
let sum2 = 0;
let i2 = 0;

while (i2 < numbers10.length) {
  sum2 += numbers10[i2];
  i2++;
}

console.log(sum2);

// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.

let number = 1;
while (number < 18) {
  number += 2;
}
console.log(number);

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.

let number2 = 20;
while (number2 >= 10) {
  console.log(number2);
  number2--;
}

// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.

const products2 = [
  { name: "product1", price: 85 },
  { name: "product2", price: 101 },
  { name: "product3", price: 102 },
];

let i3 = 0;

while (i3 < products2.length) {
  console.log(products2[i3].name);
  i3++;
}