const MATH_PI = Math.PI;

export const circleArea = (radius) => MATH_PI * radius * radius;
export const circlePerimeter = (radius) => 2 * MATH_PI * radius;
class Circle {
    constructor(r) {
        this.radius = r;
    }
}

export default Circle;