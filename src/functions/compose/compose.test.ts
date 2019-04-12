import {compose} from './compose';


describe('test compose function', () => {
    test('default',  async () => {
        const addTwo = (num: number) => num + 2;
        const cube = (num: number) => num ** 3;

        const result = compose(
            cube,
            addTwo
        )(2);

        expect(result).toBe(64);
    });
});
