//Parent object
class Shape {
    constructor(text, shapeColor, textColor){
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}

//Child objects
//Each objects render() function returns specific svg tag based off user input passed in
class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }

    render() {
        return `<rect x="73" y="40" width="150" height="150" fill="${this.shapeColor}" />
        <text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

async function createObject(data) {
    //Deconstructs data to get a reference to each
    const {shapeType, shapeText, shapeColor, textColor} = data;

    //Local variable to store the new shape user chose
    let shape;

    if (shapeType === 'Circle')
    {
        shape = new Circle(shapeText, shapeColor, textColor);
    }
    else if (shapeType === 'Triangle')
    {
        shape = new Triangle(shapeText, shapeColor, textColor);
    }
    else
    {
        shape = new Square(shapeText, shapeColor, textColor);
    }
    
    //Passes the new shape object with user input as arguments to generated
    const generatedShape = await generateShape(shape);

    //Returns to init()
    return generatedShape;
}

function generateShape(shape) {
    //Calls the render function inside the shape object
    const generatedShape = shape.render();
    
    //Returns to createObject()
    return generatedShape;
}

module.exports = createObject;
