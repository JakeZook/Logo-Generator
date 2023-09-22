const inquirer = require("inquirer");

//Question to prompt user
const questions = [
    {
        type: 'input',
        name: 'shapeText',
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

//Runs on load and returns answers object to init()
function getInput() {
    return inquirer
        .prompt(questions)

        .then((answers) => {
            //Validates that user did not input more than 3 characters
            if (answers.shapeText.length > 3)
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