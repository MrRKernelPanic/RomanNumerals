var roman_numeral_lookups = {
    '1000' : 'M',
    '900' : 'CM',
    '500' : 'D',
    '400' : 'CD',
    '100' : 'C',
    '90' : 'XC',
    '50' : 'L',
    '40' : 'XL', 
    '10' : 'X',
    '9' : 'IX',
    '5' : 'V',
    '4' : 'IV',
    '1' : 'I'
}

function arabic_to_roman_numerals(arabic_number) {
    var roman_numerals = '';
    var numeral_values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    numeral_values.forEach (function(value) {
        while(arabic_number - value >= 0){
            roman_numerals += roman_numeral_lookups[value];
            arabic_number -= value;
        }
    });

    return roman_numerals;
}

function roman_to_arabic_numerals(roman_num) {
    var arabic_number = 0;
    var numeral_values = [900,1000,400,500,90,100,40,50,9,10,4,5,1];

    numeral_values.forEach (function(value) {
        while (roman_num.indexOf(roman_numeral_lookups[value]) > -1){
            arabic_number += value;
            matching_pattern_found = roman_num.indexOf(roman_numeral_lookups[value]);
            var _string_upto_slice = roman_num.substr(0,matching_pattern_found)
            var _string_after_slice = roman_num.slice(matching_pattern_found+(roman_numeral_lookups[value].length)) 
            roman_num = _string_upto_slice + _string_after_slice;      
        }
    });

    return arabic_number;
}

module.exports.arabic_to_roman_numerals = arabic_to_roman_numerals;
module.exports.roman_to_arabic_numerals = roman_to_arabic_numerals;