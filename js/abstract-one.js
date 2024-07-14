// callback //

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// const multy = function (arrayEl) {
//   return arrayEl * 2;
// };

// console.log([64, 49, 35, 25, 16]); // Виведення початкового масиву
// console.log(each([64, 49, 35, 25, 16], multy)); // Виклик функції each з масивом і колбеком multy

// або такий варіант //
function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log([64, 49, 35, 25, 16]);
console.log(
  each([64, 49, 35, 25, 16], function (arrayEl) {
    return arrayEl * 2;
  })
);
