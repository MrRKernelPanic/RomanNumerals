const arabic_to_roman_numerals = require('./roman_numerals');

describe('Arabic to Roman', () => {
    describe('Numerals 1 to 3', () => { 
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
    describe('Numerals 4 to 8', () => { 
    
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
    
    describe('Numerals 9 to 39', () => { 
    
        test('9 in Roman Numerals is IX', () => {
            expect(arabic_to_roman_numerals(9)).toBe('IX');
        });
        
        test('10 in Roman Numerals is X', () => {
            expect(arabic_to_roman_numerals(10)).toBe('X');
        });

        test('12 in Roman Numerals is XII', () => {
            expect(arabic_to_roman_numerals(12)).toBe('XII');
        });

        test('14 in Roman Numerals is XIV', () => {
            expect(arabic_to_roman_numerals(14)).toBe('XIV');
        });

        test('16 in Roman Numerals is XVI', () => {
            expect(arabic_to_roman_numerals(16)).toBe('XVI');
        });

        test('18 in Roman Numerals is XVIII', () => {
            expect(arabic_to_roman_numerals(18)).toBe('XVIII');
        });

        test('20 in Roman Numerals is XX', () => {
            expect(arabic_to_roman_numerals(20)).toBe('XX');
        });

        test('23 in Roman Numerals is XXIII', () => {
            expect(arabic_to_roman_numerals(23)).toBe('XXIII');
        });

        test('29 in Roman Numerals is XXIX', () => {
            expect(arabic_to_roman_numerals(29)).toBe('XXIX');
        });
    });

    describe('Numerals 40 to 89', () => {
        test('40 in Roman Numerals is XL', () => {
            expect(arabic_to_roman_numerals(40)).toBe('XL');
        });
        
        test('49 in Roman Numerals is XLIX', () => {
            expect(arabic_to_roman_numerals(49)).toBe('XLIX');
        });
        
        test('79 in Roman Numerals is LXXIX', () => {
            expect(arabic_to_roman_numerals(79)).toBe('LXXIX');
        });

        test('87 in Roman Numerals is LXXXVII', () => {
            expect(arabic_to_roman_numerals(87)).toBe('LXXXVII');
        });
    });

    describe('Numerals 90 to 399', () => {
        test('90 in Roman Numerals is XC', () => {
            expect(arabic_to_roman_numerals(90)).toBe('XC');
        });
        
        test('149 in Roman Numerals is CXLIX', () => {
            expect(arabic_to_roman_numerals(149)).toBe('CXLIX');
        });

        test('384 in Roman Numerals is CCCLXXXIV', () => {
            expect(arabic_to_roman_numerals(384)).toBe('CCCLXXXIV');
        });

    });

    test.each([
        {number: 1, numerals: 'I'},
        {number: 15, numerals: 'XV'},
        {number: 22, numerals: 'XXII'},
      ])('.add($number, $numerals)', ({number, numerals}) => {
        expect(arabic_to_roman_numerals(number)).toBe(numerals);
      });
});
