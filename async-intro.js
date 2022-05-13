function sync() {
  console.log("I will have a");
  console.log("cup");
  console.log("of");
  console.log("ice cream.");
  console.time("syncFun");
  let sum = 0;
  for (let index = 0; index < 400000000; index++) {
    sum += index;
  }
  console.timeEnd("syncFun");
  console.log(sum);
}
console.log("Before SetTimeout");
console.time("ascynFun");
setTimeout(function () {
  console.log("In SetTimeout");
  console.timeEnd("ascynFun");
}, 3000);
sync();
console.log("After SetTimeout");
