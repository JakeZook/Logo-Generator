const createObject = require('./shapes');

describe('Validation', () => {
    describe('Circle validation', () => {
        it('Should return true when the color red, text color blue, and the text "FOO" is passed to a circle object.', async () => {
            const data = {
                shapeType: 'Circle',
                shapeText: 'FOO',
                shapeColor: 'Red',
                textColor: 'Blue'
            };

            const result = `<circle cx="150" cy="100" r="80" fill="Red" />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="Blue">FOO</text>`;

            expect(await createObject(data)).toBe(result);
        })
    });
    
    describe('Triangle validation', () => {
        it('Should return true when the color blue, text color green, and the text "FOO" is passed to a Triangle object.', async () => {
            const data = {
                shapeType: 'Triangle',
                shapeText: 'FOO',
                shapeColor: 'Blue',
                textColor: 'Green'
            };

            const result = `<polygon points="150, 18 244, 182 56, 182" fill="Blue" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="Green">FOO</text>`;

            expect(await createObject(data)).toEqual(result);
        })
    });
    
    describe('Square validation', () => {
        it('Should return true when the color Purple, text color Yellow, and the text "FOO" is passed to a Square object.', async () => {
            const data = {
                shapeType: 'Square',
                shapeText: 'FOO',
                shapeColor: 'Purple',
                textColor: 'Yellow'
            };

            const result = `<rect x="73" y="40" width="150" height="150" fill="Purple" />
        <text x="150" y="135" font-size="60" text-anchor="middle" fill="Yellow">FOO</text>`;

            expect(await createObject(data)).toEqual(result);
        })
    });
});