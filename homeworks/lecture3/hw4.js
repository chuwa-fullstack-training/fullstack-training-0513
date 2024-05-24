// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax

// ES5
// function Shape() {
//   this.type = "shape";
// }

// Shape.prototype.getType = function () {
//   return this.type;
// };

// function Triangle(a, b, c) {
//   this.type = "triangle";
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// Triangle.prototype.getPerimeter = function () {
//   return this.a + this.b + this.c;
// };
// Triangle.prototype.getArea = function () {
//   const s = (this.a + this.b + this.c) / 2;
//   return (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5;
// };

// function Circle(radius) {
//   this.type = "circle";
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius * this.radius;
// };
// Circle.prototype.getCircumference = function () {
//   return Math.PI * this.radius * 2;
// };

// ES6
class Shape {
  constructor() {
    this.type = "shape";
  }
  getType() {
    return this.type;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.type = "triangle";
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    return (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "circle";
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return Math.PI * this.radius * 2;
  }
}
const triangle = new Triangle(3, 4, 5);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log(triangle.getType());

const circle = new Circle(10);
console.log(circle.getArea());
console.log(circle.getCircumference());
console.log(circle.getType());
