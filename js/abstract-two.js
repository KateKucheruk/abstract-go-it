//function expression//
// const sum = function (numA, numB) {
//   return numA + numB;
// };
// console.log(sum(1, 2));
//замість function ставимо =>//
// const sum = (numA, numB) => {
//   return numA + numB;
// };
// console.log(sum(1, 2));
//замість такого запису//
// const sum = (numA, numB) => {
//   return numA + numB;
// };
//пишемо такий//
// const sum = (numA, numB) => numA + numB;
// console.log(sum(1, 2));
//function expression//
// const greeting = function (firstName) {
//   console.log(`Welcome ${firstName}!`);
// };
// greeting(`Kate`);
//стрілочна функція//
// const greeting = (firstName) => {
//   console.log(`Welcome ${firstName}!`);
// };
// greeting(`Kate`);
//якщо параметр не зазначається круглі дужки всеодно ставляться//
// const greeting = () => {
//   console.log(`Hello world!`);
// };
// greeting();
//arguments, rest//
// const sum = function () {
//   console.log(arguments);
// };
// console.log(sum(1, 2, 3, 4));
//в стрілочних функціях є тільки метод rest//
// const sum = (...args) => {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(sum(1, 2, 3, 4));
// console.log(sum(10, 20, 30, 40));
//неявне повернення//
//в такому випадку ми неявне повернення використати не можемо//
// const sum = (numA, numB) => {
//   const result = numA + numB;
//   return result;
// };
// console.log(sum(1, 2));
