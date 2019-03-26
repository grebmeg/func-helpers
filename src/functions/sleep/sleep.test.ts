import {sleep} from './sleep';


describe('test sleep function', () => {
    test('async', async () => {
        const ms = 200;

        const gotPromiseResult = await sleep(ms);

        expect(gotPromiseResult).toBe(ms)
    });
});
