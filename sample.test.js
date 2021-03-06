import {
    arrayLenght,
    push,
    pop,
    shift,
    unshift,
    some,
    every,
    find,
    // filter,
} from './sample.js';

describe('Given the function arrayLenght ', () => {
    describe('When receive []', () => {
        test('Then should be 0', () => {
            const parameter1 = arrayLenght([]);
            expect(parameter1).toBe(0);
        });
    });
    describe('When receive [5, 7]', () => {
        test('Then should be 2', () => {
            const parameter1 = arrayLenght([5, 7]);
            expect(parameter1).toBe(2);
        });
    });
});

describe('Given the function push ', () => {
    describe('When receive ([], 1)', () => {
        test('Then should be 1', () => {
            const parameter1 = push([], 1);
            expect(parameter1).toBe(1);
        });
        test('Then should return [1]', () => {
            const array = [];
            push(array, 1);
            expect(array).toContain(1);
        });
    });
});

describe('Given the function pop ', () => {
    describe('When receive [1, 3, 5]', () => {
        test('Then should be 5', () => {
            const parameter1 = pop([1, 3, 5]);
            expect(parameter1).toBe(5);
        });
    });
    describe('When receive [1, 3, 5]', () => {
        test('Then array.length should be 2', () => {
            let array = [1, 3, 5];
            pop(array);
            expect(array.length).toBe(2);
        });
    });
});

describe('Given the function shift ', () => {
    describe('When receive [1, 2, 3]', () => {
        test('Then should be 1', () => {
            const parameter1 = shift([1, 2, 3]);
            expect(parameter1).toBe(1);
        });
    });
    describe('When receive [1, 2, 3]', () => {
        test('Then array.length should be 2, 3', () => {
            let array = [1, 2, 3];
            shift(array);
            expect(array).toContain(2, 3);
        });
    });
});

describe('Given the function unshift ', () => {
    describe('When receive [(7, 77, 777], 8)', () => {
        test('Then should be 4', () => {
            const parameter1 = [7, 77, 77];
            const parameter2 = 8;
            const newUnshift = unshift(parameter1, parameter2);
            expect(newUnshift).toBe(4);
        });
    });

    test('Then it should return 8, 7, 77, 777', () => {
        const parameter1 = [7, 77, 77];
        const parameter2 = 8;
        unshift(parameter1, parameter2);
        expect(parameter1).toContain(8, 7, 77, 77);
    });
});

describe('Given the function some ', () => {
    describe('When receive ([1, 2, 3, 4], (algo) => algo > 5)', () => {
        test('Then should return true', () => {
            const parameter1 = [1, 2, 3, 4];
            const parameter2 = (algo) => algo > 5;
            expect(some(parameter1, parameter2)).toBe(false);
        });
    });

    describe('When receive ([1, 2, 3, 4, 7], (algo) => algo > 5;)', () => {
        test('Then should return true', () => {
            const parameter1 = [1, 2, 3, 4, 7];
            const parameter2 = (algo) => algo > 5;
            expect(some(parameter1, parameter2)).toBe(true);
        });
    });
});

describe('Given the function every ', () => {
    describe('When receive ([7, 8, 9, 10], (algo) => algo > 5)', () => {
        test('Then should return false', () => {
            const parameter1 = [7, 8, 9, 10];
            const parameter2 = (algo) => algo > 5;
            expect(every(parameter1, parameter2)).toBe(true);
        });
    });

    describe('When receive ([1, 2, 3, 4, 7], (algo) => algo > 5;)', () => {
        test('Then should return false', () => {
            const parameter1 = [1, 2, 3, 4];
            const parameter2 = (algo) => algo > 5;
            expect(every(parameter1, parameter2)).toBe(false);
        });
    });
});

describe('Given the function find ', () => {
    describe('When receive ([4, 3, 7, 8, 9, 10], (algo) => algo > 5)', () => {
        test('Then should return 7', () => {
            const parameter1 = [4, 3, 7, 8, 9, 10];
            const parameter2 = (algo) => algo > 5;
            expect(find(parameter1, parameter2)).toBe(7);
        });
    });

    describe('When receive ([1, 2, 3, 4], (algo) => algo > 5;)', () => {
        test('Then should return false', () => {
            const parameter1 = [1, 2, 3, 4];
            const parameter2 = (algo) => algo > 5;
            expect(every(parameter1, parameter2)).toBe(false);
        });
    });
});
