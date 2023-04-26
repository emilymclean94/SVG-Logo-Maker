class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }


    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error('Text cannot exceed 3 characters!');
        };

        // if (this.shapeElement === 'Circle') {
        //     this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        //   } else if (this.shapeElement === 'Triangle') {
        //     this.text = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        //   } else if (this.shapeElement === 'Square') {
        //     this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        //   };

        this.textElement = `<text x="50%" y="50%" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>`;
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;