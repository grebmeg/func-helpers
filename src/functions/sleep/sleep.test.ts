import {sleep} from './sleep';


describe('test sleep function', () => {
    test('sync', () => {
        const ms = 200;

        const gotPromiseResult = sleep(ms);

        expect(gotPromiseResult).toBe(ms)
    });

    test('async',  async () => {
        const ms = 200;

        const gotPromiseResult = await sleep(ms, true);

        expect(gotPromiseResult).toBe(ms)
    });
});
