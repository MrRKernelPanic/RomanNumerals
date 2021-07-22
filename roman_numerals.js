function arabic_to_roman_numerals(num) {
    var roman_numerals = ''
    
    for (var i = 1; i <=num ; i++) {
        roman_numerals += 'I';
    }
      
    return roman_numerals;
}
module.exports = arabic_to_roman_numerals;