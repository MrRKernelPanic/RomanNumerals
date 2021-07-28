const conversion = require('./roman_numerals');

describe('Arabic to Roman', () => {
    describe('Numerals 1 to 3', () => { 
        test('1 in Roman Numerals is I', () => {
            expect(conversion.arabic_to_roman_numerals(1)).toBe('I');
        });

        test('2 in Roman Numerals is II', () => {
            expect(conversion.arabic_to_roman_numerals(2)).toBe('II');
        });

        test('3 in Roman Numerals is III', () => {
            expect(conversion.arabic_to_roman_numerals(3)).toBe('III');
        });
    });
    
    describe('Numerals 4 to 8', () => { 
        test('4 in Roman Numerals is IV', () => {
            expect(conversion.arabic_to_roman_numerals(4)).toBe('IV');
        });

        test('5 in Roman Numerals is V', () => {
            expect(conversion.arabic_to_roman_numerals(5)).toBe('V');
        });

        test('6 in Roman Numerals is VI', () => {
            expect(conversion.arabic_to_roman_numerals(6)).toBe('VI');
        });

        test('8 in Roman Numerals is VIII', () => {
            expect(conversion.arabic_to_roman_numerals(8)).toBe('VIII');
        });
    });
    
    describe('Numerals 9 to 39', () => { 
        test('9 in Roman Numerals is IX', () => {
            expect(conversion.arabic_to_roman_numerals(9)).toBe('IX');
        });
        
        test('10 in Roman Numerals is X', () => {
            expect(conversion.arabic_to_roman_numerals(10)).toBe('X');
        });

        test('12 in Roman Numerals is XII', () => {
            expect(conversion.arabic_to_roman_numerals(12)).toBe('XII');
        });

        test('14 in Roman Numerals is XIV', () => {
            expect(conversion.arabic_to_roman_numerals(14)).toBe('XIV');
        });

        test('16 in Roman Numerals is XVI', () => {
            expect(conversion.arabic_to_roman_numerals(16)).toBe('XVI');
        });

        test('18 in Roman Numerals is XVIII', () => {
            expect(conversion.arabic_to_roman_numerals(18)).toBe('XVIII');
        });

        test('20 in Roman Numerals is XX', () => {
            expect(conversion.arabic_to_roman_numerals(20)).toBe('XX');
        });

        test('23 in Roman Numerals is XXIII', () => {
            expect(conversion.arabic_to_roman_numerals(23)).toBe('XXIII');
        });

        test('29 in Roman Numerals is XXIX', () => {
            expect(conversion.arabic_to_roman_numerals(29)).toBe('XXIX');
        });
    });

    describe('Numerals 40 to 89', () => {
        test('40 in Roman Numerals is XL', () => {
            expect(conversion.arabic_to_roman_numerals(40)).toBe('XL');
        });
        
        test('49 in Roman Numerals is XLIX', () => {
            expect(conversion.arabic_to_roman_numerals(49)).toBe('XLIX');
        });
        
        test('79 in Roman Numerals is LXXIX', () => {
            expect(conversion.arabic_to_roman_numerals(79)).toBe('LXXIX');
        });

        test('87 in Roman Numerals is LXXXVII', () => {
            expect(conversion.arabic_to_roman_numerals(87)).toBe('LXXXVII');
        });
    });

    describe('Numerals 90 to 399', () => {
        test('90 in Roman Numerals is XC', () => {
            expect(conversion.arabic_to_roman_numerals(90)).toBe('XC');
        });
        
        test('149 in Roman Numerals is CXLIX', () => {
            expect(conversion.arabic_to_roman_numerals(149)).toBe('CXLIX');
        });

        test('384 in Roman Numerals is CCCLXXXIV', () => {
            expect(conversion.arabic_to_roman_numerals(384)).toBe('CCCLXXXIV');
        });

    });

    describe('Numerals 400 to 899', () => {
        test('400 in Roman Numerals is CD', () => {
            expect(conversion.arabic_to_roman_numerals(400)).toBe('CD');
        });
        
        test('739 in Roman Numerals is DCCXXXIX', () => {
            expect(conversion.arabic_to_roman_numerals(739)).toBe('DCCXXXIX');
        });
        
        test('899 in Roman Numerals is DCCCXCIX', () => {
            expect(conversion.arabic_to_roman_numerals(899)).toBe('DCCCXCIX');
        });
    });

    describe('Numerals 900 to 3999', () => {
        test('900 in Roman Numerals is CM', () => {
            expect(conversion.arabic_to_roman_numerals(900)).toBe('CM');
        });
        
        test('2896 in Roman Numerals is MMDCCCXCVI', () => {
            expect(conversion.arabic_to_roman_numerals(2896)).toBe('MMDCCCXCVI');
        });
        
        test('3998 in Roman Numerals is MMMCMXCVIII', () => {
            expect(conversion.arabic_to_roman_numerals(3998)).toBe('MMMCMXCVIII');
        });
    });
});

describe ('Roman to Arabic', () => {
    describe('Roman Numeral I to III', () => {
        test('I in Arabic Numbers is 1', () => {
            expect(conversion.roman_to_arabic_numerals('I')).toBe(1);
        });
        
        test('II in Arabic Numbers is 2', () => {
            expect(conversion.roman_to_arabic_numerals('II')).toBe(2);
        });

        test('III in Arabic Numbers is 3', () => {
            expect(conversion.roman_to_arabic_numerals('III')).toBe(3);
        });
    });

    describe('Roman Numerals IV to VIII', () => {
        test('IV in Arabic Numbers is 4', () => {
            expect(conversion.roman_to_arabic_numerals('IV')).toBe(4);
        });

        test('V in Arabic Numbers is 5', () => {
            expect(conversion.roman_to_arabic_numerals('V')).toBe(5);
        });

        test('V in Arabic Numbers is 8', () => {
            expect(conversion.roman_to_arabic_numerals('VIII')).toBe(8);
        });
    });

    describe('Roman Numerals IX to XXXIX', () => {
        test('IX in Arabic Numbers is 9', () => {
            expect(conversion.roman_to_arabic_numerals('IX')).toBe(9);
        });

        test('X in Arabic Numbers is 10', () => {
            expect(conversion.roman_to_arabic_numerals('X')).toBe(10);
        });

        test('XIV in Arabic Numbers is 14', () => {
            expect(conversion.roman_to_arabic_numerals('XIV')).toBe(14);
        });

        test('XVIII in Arabic Numbers is 18', () => {
            expect(conversion.roman_to_arabic_numerals('XVIII')).toBe(18);
        });

        test('XXIII in Arabic Numbers is 23', () => {
            expect(conversion.roman_to_arabic_numerals('XXIII')).toBe(23);
        });

        test('XXXIX in Arabic Numbers is 39', () => {
            expect(conversion.roman_to_arabic_numerals('XXXIX')).toBe(39);
        });
    });

    describe('Roman Numerals XL to LXXXIX', () => {
        test('XL in Arabic Numbers is 40', () => {
            expect(conversion.roman_to_arabic_numerals('XL')).toBe(40);
        });
        test('XLIX in Arabic Numbers is 49', () => {
            expect(conversion.roman_to_arabic_numerals('XLIX')).toBe(49);
        });
        test('LXXXIX in Arabic Numbers is 89', () => {
            expect(conversion.roman_to_arabic_numerals('LXXXIX')).toBe(89);
        });
    });

    describe('Roman Numerals XC to CCCXCIX', () => {
        test('XC in Arabic Numbers is 90', () => {
            expect(conversion.roman_to_arabic_numerals('XC')).toBe(90);
        });
        test('CXLIX in Arabic Numbers is 149', () => {
            expect(conversion.roman_to_arabic_numerals('CXLIX')).toBe(149);
        });
        test('CCCLXXXIV in Arabic Numbers is 384', () => {
            expect(conversion.roman_to_arabic_numerals('CCCLXXXIV')).toBe(384);
        });
    });

    describe('Roman Numerals CD to DCCCXCIX', () => {
        test('CD in Arabic Numbers is 400', () => {
            expect(conversion.roman_to_arabic_numerals('CD')).toBe(400);
        });
        test('DCCXXXIX in Arabic Numbers is 739', () => {
            expect(conversion.roman_to_arabic_numerals('DCCXXXIX')).toBe(739);
        });
        test('DCCCXCIX in Arabic Numbers is 899', () => {
            expect(conversion.roman_to_arabic_numerals('DCCCXCIX')).toBe(899);
        });
    });

    describe('Roman Numerals CM to MMMCMXCIX', () => {
        test('CM in Arabic Numbers is 900', () => {
            expect(conversion.roman_to_arabic_numerals('CM')).toBe(900);
        });
        test('MMDCCCXCVI in Arabic Numbers is 2896', () => {
            expect(conversion.roman_to_arabic_numerals('MMDCCCXCVI')).toBe(2896);
        });
        test('MMMCMXCIX in Arabic Numbers is 3999', () => {
            expect(conversion.roman_to_arabic_numerals('MMMCMXCIX')).toBe(3999);
        });
    });
});
