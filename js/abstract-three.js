// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);
// numbers.forEach(el, idx, arr) => {
//     console.log(el);
//     console.log(idx);
//     console.log(arr);
// };
//повна версія//
// const numbers = [5, 10, 15, 20, 25];
// const numbersTwo = numbers.map((el, idx, arr) => {
//   return el * 2;
// });
// console.log(numbers);
// console.log(numbersTwo);
//скорочена версія//
// const numbers = [5, 10, 15, 20, 25];
// const numbersTwo = numbers.map((el) => el * 2);
// console.log(numbers);
// console.log(numbersTwo);
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.map((el, idx, arr) => {
//   if (el >= 15) {
//     return el;
//   }
// });
// console.log(numbers);
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter((el, idx, arr) => {
//   return el >= 15;
// });
// console.log(numbers);

const getUserNames = (users) => users.map((user) => user.name);

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
