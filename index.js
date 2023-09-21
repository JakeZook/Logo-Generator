const getInput = require('./lib/input');
const createObject = require('./lib/shapes');

const fs = require('fs');

async function init () {
    const data = await getInput();
    const shapeData = await createObject(data);
    generateFile(shapeData);
}

function generateFile(shapeData) {
    const obj = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeData}

    </svg>
    `;


    fs.writeFile('logo.svg', obj, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

init();