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
Triangle.prototype.getPerimeter = function getPerimeterT() {
    return this.a + this.b + this.c;
}

// 2. implement a method getArea for Triangle class
Triangle.prototype.getPerimeter = function getPerimeterT() {
    const p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
}

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(r) {
    this.type = 'circle';
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.getArea = function () {
    return Math.PI * this.r * this.r;
}

// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function () {
    return 2 * Math.PI * this.r;
}

// 6. change all code above to use ES6 class syntax
class Shape {
    constructor() {
        this.type = 'shape';
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
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.type = 'circle';
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }

    getCircumference() {
        return 2 * Math.PI * this.r;
    }
}