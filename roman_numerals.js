function arabic_to_roman_numerals(num) {
    var roman_numerals = '';
    let dict= {
        1000 : 'M',
        500 : 'D',
        100 : 'C',
        50 : 'L',
        10 : 'X',
        5 : 'V',
        1 : 'I'
       }
    
    const THT = Object.keys(dict);
    THT.reverse();
    for (let i = 0; i < 5; i+=2) {

        while(Math.floor(num/THT[i]) <= 4 && Math.floor(num/THT[i]) != 0) {
            roman_numerals += dict[THT[i]];
            num -= THT[i];
        }
        if (num % THT[i] >= (THT[i]-THT[i+2])) {
            roman_numerals += dict[THT[i+2]] + dict[THT[i]];
            num -= (THT[i]-THT[i+2]);
        }

        if (Math.floor(num/THT[i+1]) == 1) {
            roman_numerals += dict[THT[i+1]];
            num -= THT[i+1];
        }
        if (num % THT[i+1] >= (THT[i+1] - THT[i+2])) {
            roman_numerals += dict[THT[i+2]] + dict[THT[i+1]];
            num -= THT[i+1] - THT[i+2];
        }
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