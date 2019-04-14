import {pipe} from './pipe';


describe('test pipe function', () => {
    test('default',  async () => {
        const addTwo = (num: number) => num + 2;
        const cube = (num: number) => num ** 3;

        const result = pipe(
            cube,
            addTwo
        )(2);

        expect(result).toBe(10);
    });
});
