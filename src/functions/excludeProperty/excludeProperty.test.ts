import {excludeProperty} from './excludeProperty';


describe('test excludeProperty function', () => {
    test('immutable', () => {
        const testObject = {
            first: 'value',
            second: [1, 2 ,3],
            third: {}
        };

        const testObjectWithoutProperty = excludeProperty(
            testObject,
            'first',
            {
                immutable: true
            }
        );

        expect(testObjectWithoutProperty)
            .toBe(testObject);
        expect(testObjectWithoutProperty)
            .toHaveProperty('second');
        expect(testObjectWithoutProperty)
            .toHaveProperty('third');
        expect(testObjectWithoutProperty)
            .not
            .toHaveProperty('first');
    });

    test('mutable', () => {
        const testObject = {
            first: 'value',
            second: [1, 2 ,3],
            third: {}
        };

        const testObjectWithoutProperty = excludeProperty(
            testObject,
            'first'
        );

        expect(testObjectWithoutProperty)
            .not
            .toBe(testObject);
        expect(testObjectWithoutProperty)
            .toHaveProperty('second');
        expect(testObjectWithoutProperty)
            .toHaveProperty('third');
        expect(testObjectWithoutProperty)
            .not
            .toHaveProperty('first');
    });
});
