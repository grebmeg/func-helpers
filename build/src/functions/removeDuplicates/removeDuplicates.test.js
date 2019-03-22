"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates_1 = require("./removeDuplicates");
describe('test removeDuplicates function', () => {
    test('number', () => {
        const items = [1, 1, 3, 4, 5];
        const itemsWithoutDuplicates = removeDuplicates_1.removeDuplicates(items);
        expect(itemsWithoutDuplicates).toEqual([1, 3, 4, 5]);
    });
    test('string', () => {
        const items = ['hello', 'world', 'world', 'hello'];
        const itemsWithoutDuplicates = removeDuplicates_1.removeDuplicates(items);
        expect(itemsWithoutDuplicates).toEqual(['hello', 'world']);
    });
});
//# sourceMappingURL=removeDuplicates.test.js.map