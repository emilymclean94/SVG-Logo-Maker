const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const Circle = require('./assets/lib/shapes.js');
const Triangle = require('./assets/lib/shapes.js');
const Square = require('./assets/lib/shapes.js');
const SVG = require('./assets/lib/svg.js');



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
      

        if (shape === 'circle') {
          shape = new Circle();
        } else if (shape === 'triangle') {
          shape = new Triangle()
        } else if (shape === 'square') {
          shape = new Square()
        } 

        const userSVG = new SVG();
        userSVG.setText()


        // TODO: return the writeFile method, passing in the file name and the rendered svg.
        function writeToFile(data) {
          fs.writeFile('./output/logo.svg', data, (error) => {
              error ? console.log(error) : console.log('success')
          })
      };

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