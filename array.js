const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const emptyArr = [];
const mixedArray = [
  1,
  true,
  "John Doe",
  null,
  undefined,
  [1, 2],
  function () {
    console.log("array element");
  },
  { name: "John Doe", age: 28 },
];
console.log(numbers[numbers.length]);
console.log(mixedArray[5][1]);
mixedArray[6]();
console.log(mixedArray[mixedArray.length - 1]["name"]);
console.log(mixedArray[mixedArray.length - 1].name);
