class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }


    render() {
        return `<svg version="1.1" width="300 height="200 xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;

        // template literal for shapes/color
        // switch case
   
    }

    // We need to create a setText method that takes in a message and a color and sets the textElement property to a string that represents a text element, using literal to pass in the message and color.

    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error('Text cannot exceed 3 characters dummy!');
        }

        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    // We need to create a setShape method that takes in a shape and sets the shapeElement property to the shape's render method.

    setShape() {
        this.shapeElement = 
    }
    
}

module.exports = SVG;