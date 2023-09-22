class Shape {
    constructor(text, shapeColor, textColor){
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}

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
    const shapeType = data.shapeType;
    const shapeText = data.text;
    const shapeColor = data.shapeColor;
    const textColor = data.textColor;

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
    
    const generatedShape = await generateShape(shape);

    console.log(generatedShape);
    return generatedShape;
}

function generateShape(shape) {
    const generatedShape = shape.render();
    return generatedShape;
}

module.exports = createObject;
