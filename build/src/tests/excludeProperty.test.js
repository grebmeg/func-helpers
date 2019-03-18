"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excludeProperty_1 = require("../functions/excludeProperty");
describe('test excludeProperty function', () => {
    test('immutable', () => {
        const testObject = {
            first: 'value',
            second: [1, 2, 3],
            third: {}
        };
        const testObjectWithoutProperty = excludeProperty_1.excludeProperty(testObject, 'first', {
            immutable: true
        });
        expect(testObjectWithoutProperty)
            .toBe(testObject);
        expect(testObjectWithoutProperty)
            .toHaveProperty('second');
        expect(testObjectWithoutProperty)
            .toHaveProperty('third');
        expect(testObjectWithoutProperty)
            .not
            .toHaveProperty('first');
    });
    test('mutable', () => {
        const testObject = {
            first: 'value',
            second: [1, 2, 3],
            third: {}
        };
        const testObjectWithoutProperty = excludeProperty_1.excludeProperty(testObject, 'first');
        expect(testObjectWithoutProperty)
            .not
            .toBe(testObject);
        expect(testObjectWithoutProperty)
            .toHaveProperty('second');
        expect(testObjectWithoutProperty)
            .toHaveProperty('third');
        expect(testObjectWithoutProperty)
            .not
            .toHaveProperty('first');
    });
});
//# sourceMappingURL=excludeProperty.test.js.map