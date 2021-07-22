function arabic_to_roman_numerals(num) {
    var roman_numerals = '';
    
    while(Math.floor(num/10) <= 9 && Math.floor(num/10) != 0) {
        roman_numerals += 'X';
        num -= 10;
    }

    if (num % 10 == 9) {
        roman_numerals +='IX';
        num -= 9;
    }

    if (Math.floor(num/5) == 1) {
        roman_numerals += 'V';
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