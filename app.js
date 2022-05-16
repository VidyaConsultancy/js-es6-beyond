// ES6 Modules
import CircleClass, {
  circleArea as ca,
  circlePerimeter,
} from "./circle/circle-functions.js";
import * as circle from "./circle/circle-functions.js";
import { area, perimeter } from "./square/square.js";

console.log(ca(40));
console.log(circlePerimeter(40));
console.log(circle.circleArea(40));
console.log(circle.circlePerimeter(40));
console.log(new CircleClass(10));
console.log(circle);
