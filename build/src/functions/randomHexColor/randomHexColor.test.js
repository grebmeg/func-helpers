"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomHexColor_1 = require("./randomHexColor");
describe('test randomHexColor function', () => {
    test('number', () => {
        const hexColor = randomHexColor_1.randomHexColor();
        expect(hexColor).toHaveLength(7);
        expect(hexColor).toMatch(/^#/);
    });
});
//# sourceMappingURL=randomHexColor.test.js.map