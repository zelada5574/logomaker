const Shapes = require('./shapes');
const Triangle = Shapes.Triangle;
const Square = Shapes.Square
const Circle = Shapes.Circle

describe('Shapes', () => {
    describe('Add', () => {
        it('should take 3 parameters and display the attributes', () => {
            const shape = new Triangle("SVG", 'red', 'darkblue');
            expect(shape.render()).toEqual('');
        });
        it('should take 3 parameters and display the attributes', () => {
            const shape = new Circle("EG", 'lightblue', 'black');
            expect(shape.render()).toEqual('');
        });
        it('should take 3 parameters and display the attributes', () => {
            const shape = new Square("IT", '#000', 'lightgreen');
            expect(shape.render()).toEqual('');
    });
})
});