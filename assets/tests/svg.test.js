const SVG = require("../lib/svg");

test('should throw an error if text is more than 3 characters', () => {
    const expectedError = new Error('Text cannot exceed 3 characters dummy!');
    const svg = new SVG();
    expectedError(() => svg.detText('yeahhh', '#fff')).toThrow(expectedError);
});

test('should set text message and color', () => {
    const expectedSvg =
    '<svg version="1.1" width="300 height="200 xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    expectedSvg(svg.render()).toEqual(expectedSvg);
});

test('should render a 300 x 200 svg element', => {
    const expectedSvgSize = ;
    const svg = new SVG();

});

test('should append text element', () => {
    const expectAppend = ;
    const svg = new SVG();
});

test('should include a shape', () => {
    const expectShape = ;
    const svg = new SVG();
});