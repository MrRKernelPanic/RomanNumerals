![Clock](clock.png)

# Roman Numerals from Denary Number
I really wanted to attempt this programming challenge to see how quickly I could familiarise myself with a new programming language and test framework.  With no previous experience of JavaScript this seemed like a fair challenge.

An implementation of Arabic numbers (from 1 to 3999) to Roman Numerals and vice versa using JavaScript and the ```Jest``` testing framework.

### Requirements
Ensure that npm is installed (```apt install npm```)

Carry out ```npm init``` to initialize the project

Install Jest - ```npm install --save-dev jest```

Finally to test the code use ```npm run test```

### Approach
This is my first attempt at writing anything in JavaScript. This required some initial setup for NPM (Node Package Manager) however this was fairly simple to integrate within VSCode (my IDE of choice). The ```Jest``` testing framework was installed which allowed for me to use ```TDD``` (Test Driven Design) for my solution.

The approach I took was to split the project in two halves, create one function for the arabic numbers to roman numerals then later attempt the reverse operation.

Initially I starting off by the simplest test where 1 should passed and 'I' returned. Following Red, Green, Refactor this got me started with my conversion function, additional tests were created for each Roman letter and then code produced to pass those tests. 

```describes``` were used to group the tests into sensible segments, e.g. 1-3, 4-8, 9-39, 40-89, 90-399, 400-899, 900-4999 and then individual tests nested amongst them. A similar approach was used for the translation back from Roman Numerals to Arabic number, these used the same boundaries to cater for the difficulties of subtractive methods used in Roman numerals (the 4s,9s,40s,90s,400s and 900s)

#### Decisions and Limitations

Roman Numerals : Numbers

I : 1

V : 5

X : 10

L : 50

C : 100

D : 500

M : 1000

Each time I included another letter representation resulted in a stacked approach to dealing with the letters, the first code to be run dealing with the the most significant letter (with the highest value) for the code at that point. 

This eventually end up with testing for 1000s (the biggest unit in this program), then 100s, and then 10s. The mid points of these such as 500, 50 and 5 behaving differently but again follow a pattern and the digits 1-3 needing their own set of rules.

The initial passed number ```arabic_number``` decrements repeatedly throughout the code, this requires using while loops for the 1000s, 100s and 10s. Which were later refactored into a single for loop using a dictionary for the Roman Numerals. The refactored code uses a dictionary to store all the Roman Numerals and there denary equivalents (as the keys)  The keys are exported into an array so they cab be stepped through accordingly to get to 1000s, 100s, and 10s.  Hence the variable name ```THT``` (Thousands, Hundreds and Tens)  I export the keys into an array, the program sorts them automatically based on value, however I reverse this as I want 1000 to be value 0 in the array, 500 value 1 etc.  The For loop used uses a step count of 2 to ignore 500,50 and 5 as they behave differently.  They are dealt with accordingly in the code for THT by using +1 to the For loop variable i.

Each letter or pattern of letters are amended to an initial blank string ```roman_numerals``` and then is eventually this is returned as a single complete string.  However after getting this section into working order by looking at the quotiets and remainder for each letter although working the code was complicated and hard to understand.  

I altered the approach that allowed the same process to be carried out for each letter, while still dealing with the pesky 4s and 9s.  This approach was to subtract the value for each letter from the running total until the result was less than zero, i.e. the remainder was less than that value then move onto the next.  I kept the dictionary in place for all the values however I created an array of values to cycle through with made the code more comprehendible and avoided Javascript incorrectly sorting the order of keys. Each of these values are repeatedly subtracted until the number can no longer be subtracted without the total going negative.

The second function converts arabic numbers into Roman numerals.  The approach for this was similar to the reverse operation.  Creating a series of tests grouped within ```describes``` and ensuring the function returned the correct values.  The code checks for each letter in the supplied string and adds this to a numeric value.  The single occurance of the letter is then removed from the string using the slice function and process repeated.  One difference with this routine is that the pesky 4s and 9s (the subtractive problem ones) have to be dealt with first.  i.e. CM(900) is checked before C(1000) on it's own.

### Dependencies

Carry out ```npm init``` to initialize the project

Install Jest - ```npm install --save-dev jest```

Finally to test your code use ```npm run test```

### Getting Started

- Clone this repo
- Ensure that you have npm and jest installed.
- Run ```npm run test```

### Testing

TDD was used throughout which allowed to slowly build up tests from the least significant letter ```I``` to eventually ```M``` Tests were grouped as listed above (1-3, 4-8, 9-39, 40-89, 90-399, 400-899, 900-4999) For each section tests were grouped depending upon the letters, the odd numberings are due behaviour of the ```subtractive``` principle e.g. 1 before 5, or 10 before 50. Each segment of tests includes at least one limit / boundary check and then at least one other to check the subtractive behaviour of the segment.

The project stops at 3999 as 4000 from what I could find is a not a standard letter (A-Z), but some sort of accented V and beyond the scope of this program.

### Reflections
This was an interesting first challenge in JavaScript, it allowed me to test my programming skills in an unfamiliar language and test framework, it took me a little while to get used the syntax but the commands were fairly familiar as were the results from the test framework. I did notice coming from python the need for lots and lots of ```{}``` and the use of semi-colons at the end of each command. It took me a little while to work out how to use a dictionary and the export the keys (numbers in this case) into an array which it seemed to sort automatically and required reversing.  Although I came up with an initial solution that worked it had to be reworked to become more comprehensible to who may look at the code in the future.  The refactoring dealt this and eventually produced quite a tidy amount of code that was fairly easy to understand and worked.  It also took me a while to work out how to export multiple functions from a file, but even longer to work out how to refernce them in my test code.
