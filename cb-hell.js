function async1(cb) {
  setTimeout(() => {
    cb(1);
  }, 1000);
}
function async2(n, cb) {
  setTimeout(() => {
    cb(n * 2);
  }, 1000);
}
function async3(n, cb) {
  setTimeout(() => {
    cb(n * 3);
  }, 1000);
}
function async4(n, cb) {
  setTimeout(() => {
    cb(n * 4);
  }, 1000);
}

async1((a1) => {
  async2(a1, (a2) => {
    async3(a2, (a3) => {
      async4(a3, (a4) => {
        console.log(a4);
      });
    });
  });
});
