// var is function scoped
function fun() {
  xyz = 20;
  {
    var abc = 10;
    var abc = "hello";
    let def = 30;
    def = 40;
    const tuv = 40;
    tuv = 50;
  }
  console.log(abc);
  // console.log(def, tuv);
}
fun();
// Javascript
// DOM - Document Object Model
// BOM - Browser Object Model
const arr = [2, 4, 6];
arr[0] = 1;

const obj = { key: "value" };
obj["k2"] = "v2";
obj["key"] = "v2";

console.log(window.abc, window.xyz, window.def, window.tuv);
