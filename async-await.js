function async1(shouldReject = false) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async1"));
      resolve(1);
    }, 1000);
  });
  return promise;
}
function async2(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async2"));
      resolve(n * 2);
    }, 1000);
  });
}
function async3(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async3"));
      resolve(n * 3);
    }, 1000);
  });
}
function async4(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async4"));
      resolve(n * 4);
    }, 1000);
  });
}

async1(false)
  .then((n) => async2(n, false))
  .then((n) => async3(n, false))
  .then((n) => async4(n, false))
  .then((n) => console.log(n))
  .catch((error) => console.error(error));

// async/await - introduced in ES8
async function handlePromises() {
  try {
    const res1 = await async1();
    const res2 = await async2(res1);
    const res3 = await async3(res2);
    const res4 = await async4(res3);
    console.log("resolved", res4);
  } catch (error) {
    console.error(error);
  }
}
handlePromises();
// const handleP = async function() {}
// const handleAP = async () => {}
