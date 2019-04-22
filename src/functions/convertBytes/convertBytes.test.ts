import convertBytes from './convertBytes';


describe('test convertBytes function', () => {
    test('general', () => {
        const convertedBytesZero = convertBytes(0);
        const convertedBytesKb = convertBytes(2098);
        const convertedBytesMg = convertBytes(56232333);
        const convertedBytesGb = convertBytes(34234234554);
        const convertedBytesTb = convertBytes(786423455434234);

        expect(convertedBytesZero).toBe('0 Byte');
        expect(convertedBytesKb).toBe('2 Kb');
        expect(convertedBytesMg).toBe('54 Mb');
        expect(convertedBytesGb).toBe('32 Gb');
        expect(convertedBytesTb).toBe('715 Tb');
    });
});
