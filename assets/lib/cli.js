// TODO: Refactor for SVG


const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your name',
        },
      ])
      .then(({ name }) => {
        this.title = `${name}'s Tasks`;
        return this.addTask();
      })
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        this.tasks.sort((a, b) =>
          a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
        );
        return writeFile(
          join(__dirname, '..', 'output', 'tasks.html'),
          createDocument(this.title, this.tasks)
        );
      })
      .then(() => console.log('Created tasks.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

// !
  logoQuestions() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'characters',
          message: 'Enter 3 characters you would like on your logo.',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like your text to be?',
        },
        {
            type: 'list',
            message: 'Which shape would you like your logo to be?',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square'],
    
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Would color would you like your shape to be?',
        },
      ])
      .then(() => console.log('Generated Logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
      .then(({ text, priority, confirmAddTask }) => {
        this.tasks.push({ text, priority });
        if (confirmAddTask) {
          return this.addTask();
        }
      });
  }
}

module.exports = CLI;