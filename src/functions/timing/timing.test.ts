import {timing} from './timing';


describe('test timing function', () => {
    test('timing.log', () => {
        const spy = jest.spyOn(timing, 'log');

        timing.log();

        expect(spy).toHaveBeenCalled();
    });
});
