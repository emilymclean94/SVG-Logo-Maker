const inquirer = require('inquirer');

class CLI {
    run() {
        return inquirer
            .prompt ([
                /*
                    Prompt the user for the specs they want displayed in the svg
                */
            ])
            .then(({text, textColor, shape, shapeColor}) => {
                /*
                Create some conditional logic to generate a new instance of the shape class, and pass in user input!
                */

                /*
                Create a new instance of the SVG class and set the text and shape.
                */

                 /*
                return the writeFile method, passing in the file name and the rendered svg.
                */
            })
            .then(() => {
                 /*
                Log a message to the console that the file has been generated.
                */
            })
            .catch((error) => {
                 /*
                Console.log(error) for debugging purposes
                */
            })
    }
}

module.exports = CLI;