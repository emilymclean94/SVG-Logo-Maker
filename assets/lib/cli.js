const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');
const SVG = require('./svg.js');

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
        const fileName = './output/logo.svg'
        const svg = new SVG()

        if (data.shape === 'circle') {
          shape = new Circle();
        } else if (data.shape === 'triangle') {
          shape = new Triangle()
        } else if (data.shape === 'square') {
          shape = new Square()
        };

        shape.setShapeColor(data.shapeColor);
        svg.createText(data.text, data.textColor)
        svg.createShape(data.shape);

        fs.writeFile(fileName, svg.render(), (err) => {
          if (err) {
            console.log(err)
          } console.log('SVG file has been created!')
        });
      }
      )
      .catch((err) => {
        if (err) {
        console.log('ERROR: idk man something went wrong');
        }
      })

  }

}


module.exports = CLI;