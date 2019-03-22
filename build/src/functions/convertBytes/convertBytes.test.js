"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertBytes_1 = require("./convertBytes");
describe('test convertBytes function', () => {
    test('general', () => {
        const convertedBytesZero = convertBytes_1.convertBytes(0);
        const convertedBytesKb = convertBytes_1.convertBytes(2098);
        const convertedBytesMg = convertBytes_1.convertBytes(56232333);
        const convertedBytesGb = convertBytes_1.convertBytes(34234234554);
        const convertedBytesTb = convertBytes_1.convertBytes(786423455434234);
        expect(convertedBytesZero).toBe('0 Byte');
        expect(convertedBytesKb).toBe('2 Kb');
        expect(convertedBytesMg).toBe('54 Mb');
        expect(convertedBytesGb).toBe('32 Gb');
        expect(convertedBytesTb).toBe('715 Tb');
    });
});
//# sourceMappingURL=convertBytes.test.js.map