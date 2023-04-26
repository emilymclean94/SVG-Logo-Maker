class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    // Combines setText and setShape to render the full SVG logo
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    // Sets text attributes of the logo
    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error('Text cannot exceed 3 characters!');
        };

        this.textElement = `<text x="50%" y="50%" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>`;
    }

    // Sets shape attributes of the logo
    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;