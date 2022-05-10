const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element)
// }
// for (const num of numbers) {
//     console.log(num)
// }
// function forEach(paramFun) {
//     console.log(paramFun(10))
//     // paramFun();
// }

// forEach(function test(a) {
//   console.log("test function", a);
// });

const forEachReturn = numbers.forEach(function (element) {
  //   console.log(element);
  return element;
});
console.log(forEachReturn);

const mapReturn = numbers.map(function (element) {
  // console.log(element);
  return element * element;
});
console.log(mapReturn);

const filterReturn = numbers.filter(function (element) {
  const isEven = element % 2 === 0;
  return isEven;
});
console.log(filterReturn);

console.log(numbers);
const reduceReturn = numbers.reduce(function (
  prevValue,
  currentValue,
  index,
  array
) {
  return prevValue * currentValue;
},
1);
console.log(reduceReturn);

const sortedArray = [].concat(numbers).sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
});
console.log(sortedArray, numbers);

const reversedArray = [].concat(numbers).reverse();
console.log(reversedArray, numbers);
