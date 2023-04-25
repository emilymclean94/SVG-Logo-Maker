const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./shapes');
const SVG = require('./svg.js');

function writeToFile(data) {
    fs.writeFile('./output/logo.svg', data, (error) => {
        error ? console.log(error) : console.log('success')
    })}

class CLI {
  run() {
    return inquirer
      .prompt([
        // Prompt the user for the specs they want displayed in the svg
        {
          type: 'input',
          name: 'text',
          message: 'Please choose 3 characters to include in your logo.',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like the text to be?',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like your logo to be?',
          choices: ['Circle', 'Triangle', 'Square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color would you like your shape to be?',
        },
      ])
      .then((data) => {
      let shape;

        if (data.shape === 'circle') {
          shape = new Circle();
        } else if (data.shape === 'triangle') {
          shape = new Triangle()
        } else if (data.shape === 'square') {
          shape = new Square()
        } 
        console.log(data.shape);
        // shape.setShapeColor(data.shapeColor);

        const userSVG = new SVG();
        userSVG.setText(data.text, data.textColor);
        userSVG.setShape(shape);

        return writeToFile(data)

        // TODO: return the writeFile method, passing in the file name and the rendered svg.

      })
      .then(() => {
        console.log('Logo has been generated!');
      })
      .catch((error) => {
        console.log(error);
        console.log('ERROR: idk man something went wrong');
      })
  }
}



module.exports = CLI;