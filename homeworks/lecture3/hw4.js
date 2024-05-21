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
    const p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
}
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class
// function Circle(r) {
//     this.type = 'circle';
//     this.r = r;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.getArea = function() {
//     return Math.PI * this.r * this.r;
// }

// Circle.prototype.getCircumference = function() {
//     return Math.PI * this.r * 2;
// }
function Circle(r) {
    const circle = {};
    circle.__proto__ = Shape.prototype;
    circle.type = 'circle';
    circle.r = r;

    circle.getArea = function() {
        return Math.PI * this.r * this.r;
    };

    circle.getCircumference = function() {
        return Math.PI * this.r * 2;
    };
    
    return circle;
}
// test
// const tri = new Triangle(3, 4, 5);
// console.log(tri.getArea());
// const cir = new Circle(2);
// console.log(cir.getCircumference())


// 6. change all code above to use ES6 class syntax
class Shape1 {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

class Triangle1 extends Shape1 {
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
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

class Circle1 extends Shape1 {
    constructor(r) {
        super();
        this.type = 'circle';
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }

    getCircumference() {
        return Math.PI * this.r * 2;
    }
}

// test
const tri = new Triangle1(3, 4, 5);
console.log(tri.getType());
console.log(tri.getArea());
console.log(tri.getPerimeter());
const cir = new Circle1(2);
console.log(cir.getType());
console.log(cir.getCircumference())
console.log(cir.getArea());