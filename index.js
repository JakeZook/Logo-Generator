const getInput = require('./lib/input');
const createObject = require('./lib/shapes');

const fs = require('fs');

async function init () {
    const data = await getInput();
    const renderData = await createObject(data);
    generateFile(renderData, data);
}

function generateFile(renderData, data) {
    const tag = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${renderData}
    </svg>`;

    fs.writeFile(`./Assets/${data.shapeType}.svg`, tag, (err) =>
    err ? console.error(err) : console.log('Success! Generated logo.svg!')
    );
}

init();