![Clock](clock.png)

# Roman Numerals from Denary Number

An implementation of Arabic numbers (from 1 to 4999) to Roman Numerals using JavaScript and the ```Jest``` testing framework.

### Requirements
Ensure that npm is installed (```apt install npm```)

Carry out ```npm init``` to initialize the project

Install Jest - ```npm install --save-dev jest```

Finally to test your code use ```npm run test```

Optional install JSHint Linter ```npm install jshint```

### Approach
This is my first attempt at writing anything in JavaScript. This required some initial setup for NPM (node package manager) however this was fairly simple to integrate within VSCode (my IDE of choice). The ```Jest``` Testing framework was installed which allowed for me to use ```TDD``` (Test Drive Design) for my solution.

Initially starting off small with a single simple test to return 'I' for the number 1. Following Red, Green, Refactor this got me started with my conversion function, additional tests were created for each letter and code produced. 

```describes``` were added to group the number of tests into sensible segments, e.g. 1-3, 4-8, 9-39, 40-89, 90-399, 400-899, 900-4999 and then individual tests nested amongst them.

#### Decisions and Limitations

Roman Numerals : Numbers

I : 1

V : 5
X : 10

L : 50

C : 100

D : 500

M : 1000

Each time I went up a letter this resulted in a stacked approach, the first code to be run dealing with the the Most Significant Letter (with the highest value) for the code at that point. 

This eventually end up with testing for 1000s (the biggest unit in this program), then 100s, and then 10s. The mid points of these such as 500, 50 and 5 behaving differently but again follow a pattern and the digits 1-3 needing their own set of rules. 

The initial passed number ```num``` decremented repeatedly throughout the code, this required using while loops for the 1000s, 100s and 10s. Which were later refactored into a single for loop using a dictionary for the Roman numerals. Each letter or pattern of letters were amended to an initial blank string ```roman_numerals``` and then is eventually this is returned.

### Dependencies

Carry out ```npm init``` to initialize the project

Install Jest - ```npm install --save-dev jest```

Finally to test your code use ```npm run test```

This is anything that needs to be installed or configured to make your project run.
A simple list of dependencies (if short, some node projects can have literally hundreds of dependencies).
This can be python versions and external modules.

### Getting Started

- Clone this repo
- Ensure that you have npm and jest installed.
- Run ```npm run test```

#### Usage

### Testing

TDD was used throughout which allowed to slowly build up tests from the least significant letter ```I``` to eventually ```M``` Tests were grouped as listed above (1-3, 4-8, 9-39, 40-89, 90-399, 400-899, 900-4999) For each section tests were grouped depending upon the letters, the odd numberings are due behaviour of the ```subtractive``` principle e.g. 1 before 5, or 10 before 50. Each segment of tests included at least one limit / boundary check and then at least one other to deal with the subtractive behaviour of that segment.

The project stops at 4999 as 5000 from what I could find is a not a standard letter (A-Z), but some sort of accented V and beyond the scope of this program.

### Reflections
This was an interesting first challenge in JavaScript, it allowed me to test my programming in skills in an unfamiliar language, it took me a little while to get used the syntax but the commands were fairly familiar. I did notice coming from python the need for lots and lots of ```{}``` and the use of semi-colon at the end of each command. It took me a little while to work out how to use a dictionary and the export the keys (numbers in this case) into an array which it seemed to sort automatically and required reversing.
