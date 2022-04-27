const { returnTwo, greeting, add } = require('./functions.js');

describe('returnTwo', () => {
    test('should return two', () => {
        expect(returnTwo()).toBe(2);
    })
})

describe('greeting', () => {
    test('should greet person', () => {
        expect(greeting('James')).toBe("Hello, James.");
        expect(greeting('Jill')).toBe("Hello, Jill.");
    })
})

describe('add', () => {
    test('should add numbers together' , () => {
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    })
})

