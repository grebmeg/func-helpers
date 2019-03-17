"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excludeProperty_1 = require("../functions/excludeProperty");
test('excludeProperty', () => {
    const testObject = {
        first: 'value',
        second: [1, 2, 3],
        third: {}
    };
    expect(excludeProperty_1.excludeProperty(testObject, 'first'))
        .toHaveProperty('second');
    expect(excludeProperty_1.excludeProperty(testObject, 'first'))
        .toHaveProperty('third');
    expect(excludeProperty_1.excludeProperty(testObject, 'first'))
        .not
        .toHaveProperty('first');
});
//# sourceMappingURL=excludeProperty.test.js.map