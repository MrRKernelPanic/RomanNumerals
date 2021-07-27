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

function roman_to_arabic_numerals(roman_num) {
    var arabic_number = 0;
    while (roman_num.indexOf("CM") > -1){
        arabic_number += 900;
        roman_num = roman_num.substr(0,roman_num.indexOf("CM")) + roman_num.slice(roman_num.indexOf("CM")+2) 
    };

    while (roman_num.indexOf("M") > -1){
        arabic_number += 1000;
        roman_num = roman_num.substr(0,roman_num.indexOf("M")) + roman_num.slice(roman_num.indexOf("M")+1) 
    };



    while (roman_num.indexOf("CD") > -1){
        arabic_number += 400;
        roman_num = roman_num.substr(0,roman_num.indexOf("CD")) + roman_num.slice(roman_num.indexOf("CD")+2) 
    };

    while (roman_num.indexOf("D") > -1){
        arabic_number += 500;
        roman_num = roman_num.substr(0,roman_num.indexOf("D")) + roman_num.slice(roman_num.indexOf("D")+1) 
    };
    
    while (roman_num.indexOf("XC") > -1){
        arabic_number += 90;
        roman_num = roman_num.substr(0,roman_num.indexOf("XC")) + roman_num.slice(roman_num.indexOf("XC")+2) 
    };

    while (roman_num.indexOf("C") > -1){
        arabic_number += 100;
        roman_num = roman_num.substr(0,roman_num.indexOf("C")) + roman_num.slice(roman_num.indexOf("C")+1) 
    };

    while (roman_num.indexOf("XL") > -1){
        arabic_number += 40;
        roman_num = roman_num.substr(0,roman_num.indexOf("XL")) + roman_num.slice(roman_num.indexOf("XL")+2) 
    };

    while (roman_num.indexOf("L") > -1){
        arabic_number += 50;
        roman_num = roman_num.substr(0,roman_num.indexOf("L")) + roman_num.slice(roman_num.indexOf("L")+1) 
    };

    while (roman_num.indexOf("IX") > -1){
        arabic_number += 9;
        roman_num = roman_num.substr(0,roman_num.indexOf("IX")) + roman_num.slice(roman_num.indexOf("IX")+2) 
    };

    while (roman_num.indexOf("X") > -1){
        arabic_number += 10;
        roman_num = roman_num.substr(0,roman_num.indexOf("X")) + roman_num.slice(roman_num.indexOf("X")+1) 
    };

    while (roman_num.indexOf("IV") > -1){
        arabic_number += 4;
        roman_num = roman_num.substr(0,roman_num.indexOf("IV")) + roman_num.slice(roman_num.indexOf("IV")+2) 
    };

    while (roman_num.indexOf("V") > -1){
        arabic_number += 5;
        roman_num = roman_num.slice(roman_num.indexOf("V")+1) 

    };
    while (roman_num.indexOf("I") > -1){
        arabic_number += 1;
        roman_num = roman_num.slice(roman_num.indexOf("I")+1) 

    };

    return arabic_number;
}

module.exports.arabic_to_roman_numerals = arabic_to_roman_numerals;
module.exports.roman_to_arabic_numerals = roman_to_arabic_numerals;