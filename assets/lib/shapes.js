class Shape {
    constructor() {
        this.shapeColor = '';
    }
    setShapeColor(color) {
        this.shapeColor = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="20" width="150" height="150" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Circle, Triangle, Square };