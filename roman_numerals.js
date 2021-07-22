function arabic_to_roman_numerals(num) {
    var roman_numerals = ''
    
    if (Math.floor(num/5) == 1) {
        roman_numerals += 'V'
    }

    if (num % 5 <= 3) {
        for (var i = 1; i <= num % 5 ; i++) {
            roman_numerals += 'I';
        }
    }
    if (num % 5 == 4) {
        roman_numerals += 'IV';
    }    

    return roman_numerals;
}
module.exports = arabic_to_roman_numerals;