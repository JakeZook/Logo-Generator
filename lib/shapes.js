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
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColorolor}" />`;
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }

    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}


// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

// </svg>`

