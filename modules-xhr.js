// ES6 Modules
import CircleClass, {
  circleArea as ca,
  circlePerimeter,
} from "./circle/circle-functions.js";
import * as circle from "./circle/circle-functions.js";
import { area, perimeter } from "./square/square.js";
import { renderBooksData, apiUrl } from "./books.js";

console.log(ca(40));
console.log(circlePerimeter(40));
console.log(circle.circleArea(40));
console.log(circle.circlePerimeter(40));
console.log(new CircleClass(10));
console.log(circle);

const obj = {
  fname: "John",
  lname: "Doe",
  fullName: "John Doe",
};
const jsonString = JSON.stringify(obj);
console.log(jsonString, typeof jsonString);
const arr = [1, 2, 3, 4, 5, 6, 7];
const arrString = JSON.stringify(arr);
console.log(arrString, typeof arrString);
const jsonObj = JSON.parse(jsonString);
const arrObj = JSON.parse(arrString);
console.log(jsonObj, arrObj);

const goToGoogleBtn = document.getElementById("goToGoogle");
goToGoogleBtn && goToGoogleBtn.addEventListener("click", goToGoogle);
function goToGoogle() {
  window.location.href = "https://google.com";
  // window.location.replace("https://google.com");
}

// console.log(navigator.userAgent);
// console.log(navigator.geolocation.getCurrentPosition((s) => {
//   console.log(s)
// }, (e) => console.error(e)))

// const container = document.querySelector(".container");
// const btnsInContainer = container.querySelectorAll("button");
// console.log(container, btnsInContainer);

const getBooksBtn = document.getElementById("getBooks");
getBooksBtn &&
  getBooksBtn.addEventListener("click", () => {
    // XHR / AJAX request
    // XMLHttpRequest
    const handleXHRReadyStateChange = (e) => {
      if (e.target.readyState === xhr.DONE) {
        const { response } = e.target;
        const responseData = JSON.parse(response);
        const { data: books } = responseData;
        renderBooksData(books);
      }
    };

    const xhr = new XMLHttpRequest();
    console.log(xhr);
    // xhr.addEventListener("readystatechange", handleXHRReadyStateChange);
    xhr.onreadystatechange = handleXHRReadyStateChange;

    xhr.open("GET", apiUrl);
    xhr.send();
  });
