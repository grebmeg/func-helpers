const {excludeProperty} = require('../index');

test('excludeProperty', () => {
    const testObject = {
        first: 'value',
        second: [1, 2 ,3],
        third: {}
    };


    expect(excludeProperty(testObject, 'first'))
        .toHaveProperty('second');
    expect(excludeProperty(testObject, 'first'))
        .toHaveProperty('third');
    expect(excludeProperty(testObject, 'first'))
        .not
        .toHaveProperty('first');
});
