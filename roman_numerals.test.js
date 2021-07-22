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
});
