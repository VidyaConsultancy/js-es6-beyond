// Events
const titleEle = document.getElementById("title");
const handleClickOnTitle = (e) => {
  console.log("outside", e.target);
};
if (titleEle) {
  titleEle.addEventListener("click", (e) => {
    console.log("title clicked", e.target);
  });
  titleEle.addEventListener("click", handleClickOnTitle);
}
function handleMouseMoveOnTitle(e) {
  console.log("js");
}

const goToGoogleBtn = document.getElementById("goToGoogle");
goToGoogleBtn && goToGoogleBtn.addEventListener("click", goToGoogle);
function goToGoogle(e) {
  console.log(e);
  // window.location.href = "https://google.com";
  // window.location.replace("https://google.com");
}
// Form Controls
