let stars = "";
for (let index = 0; index < 11; index++) {
  for (let j = 0; j < index; j++) {
    stars += "\t";
  }
  for (let innerIndex = index; innerIndex < 21 - index; innerIndex++) {
    stars += "*\t";
  }
  stars += "\n";
}
console.log(stars);
