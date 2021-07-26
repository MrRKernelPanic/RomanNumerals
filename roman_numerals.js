function arabic_to_roman_numerals(arabic_number) {
    var roman_numerals = '';
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
    
    var numeral_values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    
    numeral_values.forEach (function(value) {
        while(arabic_number - value >= 0){
            roman_numerals += roman_numeral_lookups[value];
            arabic_number -= value;
        }
    });

    return roman_numerals;
}
module.exports = arabic_to_roman_numerals;