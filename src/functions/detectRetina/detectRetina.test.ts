import detectRetina from './detectRetina';


describe('test detectRetina function', () => {
    test('default',  async () => {
        const result = detectRetina();

        expect(typeof result).toBe('boolean');
    });
});
