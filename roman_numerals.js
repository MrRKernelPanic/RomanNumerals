function arabic_to_roman_numerals(num) {
    var roman_numerals = '';

    while(Math.floor(num/100) <= 3 && Math.floor(num/100) != 0) {
        roman_numerals += 'C';
        num -= 100;
    }

    if (num % 100 >= 90) {
        roman_numerals +='XC';
        num -= 90;
    }

    if (Math.floor(num/50) == 1) {
        roman_numerals += 'L';
        num -= 50;
    }

    if (num%50 >= 40) {
        roman_numerals += 'XL';
        num -= 40;
    }

    while(Math.floor(num/10) <= 3 && Math.floor(num/10) != 0) {
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