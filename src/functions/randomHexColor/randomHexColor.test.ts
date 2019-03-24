import {randomHexColor} from './randomHexColor';


describe('test randomHexColor function', () => {
    test('number', () => {
        const hexColor = randomHexColor();

        expect(hexColor).toHaveLength(7);
        expect(hexColor).toMatch(/^#/);
    });
});
