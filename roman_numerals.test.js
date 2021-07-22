const arabic_to_roman_numerals = require('./roman_numerals');

describe('Arabic to Roman', () => {
    test('1 in Roman Numerals is I', () => {
        expect(arabic_to_roman_numerals(1)).toBe('I');
    });

    test('2 in Roman Numerals is II', () => {
        expect(arabic_to_roman_numerals(2)).toBe('II');
    });

    test('3 in Roman Numerals is III', () => {
        expect(arabic_to_roman_numerals(3)).toBe('III');
    });

    test('4 in Roman Numerals is IV', () => {
        expect(arabic_to_roman_numerals(4)).toBe('IV');
    });

    test('5 in Roman Numerals is V', () => {
        expect(arabic_to_roman_numerals(5)).toBe('V');
    });

    test('6 in Roman Numerals is VI', () => {
        expect(arabic_to_roman_numerals(6)).toBe('VI');
    });

    test('8 in Roman Numerals is VIII', () => {
        expect(arabic_to_roman_numerals(8)).toBe('VIII');
    });
});