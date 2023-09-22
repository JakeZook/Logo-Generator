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
        message: 'Enter text color:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:'
    }
];

function getInput() {
    return inquirer
        .prompt(questions)

        .then((answers) => {
            if (answers.text.length > 3)
            {
                console.log("Text must be under 3 characters!");
                return getInput();
            }
            else 
            {
                return (answers);             
            }
        });
}

module.exports = getInput;