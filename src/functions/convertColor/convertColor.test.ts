import convertColor from './convertColor';
import {ColorTypes} from '../../../types';


describe('test convertColor function', () => {
    describe('hex to rgb', () => {
        test('color in uppercase', () => {
            const color = '#0033FF';

            const colorRGB = convertColor(color, ColorTypes.HEX, ColorTypes.RGB);

            expect(colorRGB).toBe('rgb(0, 51, 255)');
        });

        test('color in lowercase', () => {
            const color = '#0033ff';

            const colorRGB = convertColor(color, ColorTypes.HEX, ColorTypes.RGB);

            expect(colorRGB).toBe('rgb(0, 51, 255)');
        });

        test('shorthand color', () => {
            const color = '#03f';

            const colorRGB = convertColor(color, ColorTypes.HEX, ColorTypes.RGB);

            expect(colorRGB).toBe('rgb(0, 51, 255)');
        });
    });
});