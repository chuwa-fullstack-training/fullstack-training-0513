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
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function () {
    const sp = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(sp * ((sp - this.a) * (sp - this.b) * (sp - this.c)));
    return area;
}

//Test for 1, 2
// const triangle = new Triangle (2, 3, 4);
// console.log(triangle.getPerimeter()); //Expected: 9
// console.log(triangle.getArea()); //Expected 2.905 (Obtained from the online calculator)

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// 4. implement a method area for Circle class
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}
// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function () {
    return 2 * Math.PI * this.radius;
}

// const circle = new Circle(2);
// console.log(circle.getArea()); //Expected: Approximately 4 * \pi 12.6
// console.log(circle.getCircumference()); //Expected the same since 2 * r * \pi here just 4*\pi

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
        const sp = (this.a + this.b + this.c) / 2;
        const area = Math.sqrt(sp * ((sp - this.a) * (sp - this.b) * (sp - this.c)));
        return area;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

//Test for the ES6 class syntax method

// const triangle = new Triangle (2, 3, 4);
// console.log(triangle.getPerimeter()); //Expected: 9
// console.log(triangle.getArea()); //Expected 2.905 (Obtained from the online calculator)

// const circle = new Circle(2);
// console.log(circle.getArea()); //Expected: Approximately 4 * \pi 12.6
// console.log(circle.getCircumference()); //Expected the same since 2 * r * \pi here just 4*\pi
