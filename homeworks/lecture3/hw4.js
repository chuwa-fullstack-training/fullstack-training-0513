
function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
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
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    let semp = (this.a + this.b + this.c) / 2;
    return Math.sqrt(semp * (semp - this.a) * (semp - this.b) * (semp - this.c));
}
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
}
// 5. implement a method circumference for Circle class
Circle.prototype.circumference = function() {
    return Math.PI * this.radius * 2;
}

// -----------------TEST--------------------
// let t = new Triangle(2, 2, 2);
// console.log(t.getType());
// console.log(t.getPerimeter());
// console.log(t.getArea());
// let c = new Circle(2);
// console.log(c.getType());
// console.log(c.area());
// console.log(c.circumference());

// 6. change all code above to use ES6 class syntax
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
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semp = (this.a + this.b + this.c) / 2;
        return Math.sqrt(semp * (semp - this.a) * (semp - this.b) * (semp - this.c));
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;;
    }

    circumference() {
        return Math.PI * this.radius * 2;
    }
}

// ----------------TEST-------------
// let t = new Triangle(2, 2, 2);
// console.log(t.getType());
// console.log(t.getPerimeter());
// console.log(t.getArea());
// let c = new Circle(2);
// console.log(c.getType());
// console.log(c.area());
// console.log(c.circumference());