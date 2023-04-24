const inquirer = require('inquirer');
const {join} = require('path');
const {writeFile} = require('fs/promises');
const Shape = require('./assets/lib/shapes.js')
const SVG = require('./assets/lib/svg.js')



class CLI {
    run() {
        return inquirer
            .prompt ([
            // Prompt the user for the specs they want displayed in the svg
            {
                type: 'input',
                name: 'text',
                message: 'Please choose 3 characters to include in your logo.',
                // ! create error message for over 3 characters
              },
              {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like the text to be?',
              },
              {
                type: 'list',
                name: 'shape',
                message: 'Please enter your name',
                choices: ['Circle', 'Triangle', 'Square']
              },
              {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be?',
              },
            ])
            .then(({text, textColor, shape, shapeColor}) => {
                
                // TODO: Create some conditional logic to generate a new instance of the shape class, and pass in user input!
                // const userShape = new Shape();
                 
                
                // TODO: Create a new instance of the SVG class and set the text and shape.
                // const userSVG = new SVG();
                
                // TODO: return the writeFile method, passing in the file name and the rendered svg.
                return writeFile('logo.svg');
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

const cli = new CLI();
cli.run();

module.exports = CLI;