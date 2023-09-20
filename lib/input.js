const inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
    }
];

function getInput() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            console.log(answers);
        });
}

module.exports = getInput;