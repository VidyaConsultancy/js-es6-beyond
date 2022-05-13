function first() {
  console.log("Before First fun");
  second();
  console.log("After First fun");
}

function second() {
  console.log("Before Second fun");
  third();
  console.log("After Second fun");
}

function third() {
  console.log("Before Third fun");
  fourth();
  console.log("After Third fun");
}

function fourth() {
  console.log("Before Fourth fun");
  //   throw new Error("Custom error message");
}

class CustomException extends Error {
  constructor(message, code, type) {
    super(message);
    this.code = code;
    this.type = type;
  }
}

try {
  first();
  const customErrorObject = new CustomException(
    "An error occurred",
    400,
    "TypeError"
  );
  throw customErrorObject;
} catch (error) {
  console.error(`Error! ${error.message}`, error.code, error.type);
  console.error(error);
} finally {
  console.log("I run always");
}
