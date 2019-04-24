import convertColor from './convertColor';
import {ColorTypes} from '../../../types';


describe('test convertColor function', () => {
    test('general', () => {
        const color = '#B7B7B7';

        const colorRGB = convertColor(color, ColorTypes.RGB);

        expect(colorRGB).toBe('rgb(183, 183, 183)');
    });
});
