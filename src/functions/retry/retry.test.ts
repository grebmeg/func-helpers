import retry from './retry';


describe('test retry function', () => {
    test('default', async () => {
        const func = jest.fn(() => {
            throw new Error();
        });

        await retry(func);

        expect(func).toHaveBeenCalledTimes(3);
    });
});
