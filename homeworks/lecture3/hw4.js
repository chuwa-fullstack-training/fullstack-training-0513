function Shape() {
  this.type = 'shape';
}

Shape.prototype.getType = function () {
  return this.type;
}

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
}

// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function () {
  let s = (this.a + this.b + this.c) / 2;
  return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
  this.type = 'Circle';
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
}

// 5. implement a method circumference for Circle class
Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius;
}

// 6. change all code above to use ES6 class syntax
class eShape {
  constructor(type = 'shape') {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

class eTriangle extends eShape {
  constructor(a, b, c) {
    super('triangle');
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

class eCircle extends eShape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}
