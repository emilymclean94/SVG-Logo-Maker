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
      // Will create a new instance of the shape class and SVG class
      .then((data) => {
        let shape;
        const svg = new SVG()

        // If/else to loop through shape options
        if (data.shape === 'Circle') {
          shape = new Circle();
        } else if (data.shape === 'Triangle') {
          shape = new Triangle()
        } else if (data.shape === 'Square') {
          shape = new Square()
        };

        shape.setShapeColor(data.shapeColor);
        svg.setText(data.text, data.textColor)
        svg.setShape(shape);

        // Writes the svg file and logs an error if there's an issue in creating it
        fs.writeFile('./assets/output/logo.svg', svg.render(), (err) => {
          if (err) {
            console.log(err)
          } console.log('SVG file has been created!')
        });
      }
      )
      // Will log any errors in inquirer.prompt
      .catch((err) => {
        if (err) {
        console.log(err);
        }
      })

  }

}


module.exports = CLI;