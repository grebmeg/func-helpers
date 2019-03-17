"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test('excludeProperty', () => {
    const testObject = {
        first: 'value',
        second: [1, 2, 3],
        third: {}
    };
    expect(index_1.excludeProperty(testObject, 'first'))
        .toHaveProperty('second');
    expect(index_1.excludeProperty(testObject, 'first'))
        .toHaveProperty('third');
    expect(index_1.excludeProperty(testObject, 'first'))
        .not
        .toHaveProperty('first');
});
//# sourceMappingURL=index.test.js.map