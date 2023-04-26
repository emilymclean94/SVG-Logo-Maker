const SVG = require(`../lib/svg.js`);
const CLI = require('../lib/cli.js');
const { Circle } = require('../lib/shapes.js');

test('should throw an error if text is more than 3 characters', () => {
    const expectedError = new Error('Text cannot exceed 3 characters!');
    const svg = new SVG();
    expect(() => svg.setText('wooo', "#333")).toThrow(expectedError);
});

// test('should set text message and color', () => {
//     const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;

//     const svg = new SVG();
//     // svg.setText("SVG", "#333");
//     expect(svg.render()).toEqual(expectedSvg);
// });

test('should render a 300 x 200 svg element', () => {
    const expectedSvgSize = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvgSize);
});

test('should render svg', () => {
    const expectedSvg = new SVG()
    expectedSvg.setText('blue', 'WOO')
    const shape = new Circle()
    shape.shapeColor('grey')
    expectedSvg.setShape(shape)
    expect(svg.render()).toEqual(expectedSvg);
})