import {replaceAll} from './replaceAll';

const PROCESSED_STR = 'hi everyone hi everyone';

describe('test replaceAll function', () => {
    test('default', () => {
        const str = 'hello world hello world';

        const strNext = replaceAll(str, {
            'hello': 'hi',
            'world': 'everyone'
        });

        expect(strNext).toBe(PROCESSED_STR);
    });
});
