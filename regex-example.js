// A few regex examples
// More at https://mzl.la/2nHVBBE
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;

console.log(testString.match(expressionToGetSoftware));
console.log(testString + " " + softwareCount);
var expression = /and/gi;  // Change this Line

var andCount = testString.match(expression).length;
console.log(testString.match(expression));
console.log(testString + " " + andCount);

// Using "+"
// \d: 0 - 9
var testString = "There are 3 cats but 4 dogs.";
var expression = /\d+/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// \s: whitespaces: " ", \n, \r, \t, \r
var testString = "There are 3 cats but 4 dogs.";
var expression = /\s+/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// \D: not 0 - 9
var testString = "There are 3 cats but 4 dogs.";
var expression = /\D+/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// \S: not whitespaces: " ", \n, \r, \t, \r
var testString = "There are 3 cats but 4 dogs.";
var expression = /\S+/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// Without "+"
// \d: 0 - 9
var testString = "There are 3 cats but 4 dogs.";
var expression = /\d/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// \s: whitespaces: " ", \n, \r, \t, \r
var testString = "There are 3 cats but 4 dogs.";
var expression = /\s/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// \D: not 0 - 9
var testString = "There are 3 cats but 4 dogs.";
var expression = /\D/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);

// \S: not whitespaces: " ", \n, \r, \t, \r
var testString = "There are 3 cats but 4 dogs.";
var expression = /\S/g;  // Change this line
var digitCount = testString.match(expression).length;
console.log(testString.match(expression), testString.match(expression).length);
