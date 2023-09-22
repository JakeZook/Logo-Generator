const getInput = require('./lib/input');
const createObject = require('./lib/shapes');

const fs = require('fs');

//Waits for input from user than passes data to be rendered
async function init () {
    const data = await getInput();
    const renderData = await createObject(data);
    //Passes render data to be written
    generateFile(renderData, data);
}

function generateFile(renderData, data) {
    //Opening svg tag + rendered object data + closing svg atg
    const tag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderData}
    </svg>`;

    //Names the file off of the type of shape chosen and writes it into the assets folder
    fs.writeFile(`./Assets/${data.shapeType}.svg`, tag, (err) =>
    err ? console.error(err) : console.log('Success! Generated logo.svg!')
    );
}

//Function call
init();