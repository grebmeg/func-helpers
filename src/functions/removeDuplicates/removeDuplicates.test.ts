import {removeDuplicates} from './removeDuplicates';


describe('test removeDuplicates function', () => {
    test('number', () => {
        const items = [1, 1, 3, 4, 5];

        const itemsWithoutDuplicates = removeDuplicates(items);

        expect(itemsWithoutDuplicates).toEqual([1, 3, 4, 5]);
    });

    test('string', () => {
        const items = ['hello', 'world', 'world', 'hello'];

        const itemsWithoutDuplicates = removeDuplicates(items);

        expect(itemsWithoutDuplicates).toEqual(['hello', 'world']);
    });
});
