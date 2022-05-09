let str1 = "quick \r lazy 'fox' \t jump \"over\" the \n box";
let str2 = 'hey "there", \n he\'s good';
let fname = "John";
let lname = "Doe";
let fullname = `${fname} ${lname} ${10 + 20}`;
console.log(str1[0]);
str2[0] = "H";
console.log(str2);
console.log(fullname);
const str = "quick lazy fox jump over the box";
console.log(str.length);
console.log(str.toUpperCase());
console.log("QUICK LAZY FOX JUMP OVER THE BOX".toLowerCase());
const hey = "hello";
console.log(hey[0].toUpperCase() + hey.substring(1));
console.log(str.includes("fox"));
console.log(str.indexOf("ox"));
console.log(str.indexOf("jukebox"));
console.log(str.lastIndexOf("ox"));
console.log(str.lastIndexOf("jukebox"));
console.log(str.charAt(4));
console.log(str.charCodeAt(7));
console.log("a  adfad   a".trim());
console.log(str.split("ox"));
console.log(str.slice(2, 10));

// 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const alphaStr =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy? The dog says, that I am not lazy. The dog says, that I am not lazy.";

console.log(
  alphaStr.replaceAll(alphaStr.substring(52), "monkey") + alphaStr.substring(55, 84)
);

let t = 0;
const result = alphaStr.replace(/DOG/gi, function (match) {
  t++;
  console.log(match, t);
  return t === 2 ? "monkey" : match;
});
console.log(result);

const lastIndex = alphaStr.lastIndexOf("dog");
const updatedStr =
  alphaStr.slice(0, lastIndex) +
  alphaStr.slice(lastIndex, lastIndex + 4).replace("dog", "monkey") +
  alphaStr.slice(lastIndex + 4);
console.log(updatedStr);
