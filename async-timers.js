function normalFun(cb) {
  const res = setTimeout(() => {
    const sum = 10 + 20;
    cb(sum);
  }, 10000);
  console.log(res);
}

normalFun(function (sum) {
  console.log(sum);
});

const setIntervalId = setInterval(() => {
  console.log(new Date().toISOString());
}, 1000);

setTimeout(() => {
  clearInterval(setIntervalId);
}, 20000);
