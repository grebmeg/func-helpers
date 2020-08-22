import cn from './cn';

const modificators = { modificator: true, theme: 'dark', opacity: 0 };
const mixin = 'mixin-block';

describe('cn generations:', () => {
    test('block', () => {
        const b = cn('block');
        const shoudBe = ['block'].join(' ');

        expect(b()).toBe(shoudBe);
    });

    test('block-modificator', () => {
        const b = cn('block');
        const shoudBe = [
            'block',
            'block_modificator',
            'block_theme_dark',
            'block_opacity_0',
        ].join(' ');

        expect(b(null, modificators)).toBe(shoudBe);
    });

    test('block-element', () => {
        const b = cn('block');
        const shoudBe = ['block', 'block__element'].join(' ');

        expect(b('element')).toBe(shoudBe);
    });

    test('block-element-modificator', () => {
        const b = cn('block');
        const shoudBe = [
            'block',
            'block__element',
            'block__element_modificator',
            'block__element_theme_dark',
            'block__element_opacity_0',
        ].join(' ');

        expect(b('element', modificators)).toBe(shoudBe);
    });

    test('block-element-modificator and mixin', () => {
        const b = cn('block');
        const shoudBe = [
            'block',
            'block__element',
            'block__element_modificator',
            'block__element_theme_dark',
            'block__element_opacity_0',
            mixin,
        ].join(' ');

        expect(b('element', modificators, mixin)).toBe(shoudBe);
    });

    test('block-element and mixin', () => {
        const b = cn('block');
        const shoudBe = ['block', 'block__element', mixin].join(' ');

        expect(b('element', mixin)).toBe(shoudBe);
    });
});
