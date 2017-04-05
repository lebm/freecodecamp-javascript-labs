// Is it JSON format?
// '"' is optional?
var myDog = {
    "name": "Pluto",
    "legs": 4,
    "tails": 1,
    "friends": ["Goofy", "Donald"]
};

// accessing obj. properties
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


// property with space
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Use backets and ''
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// accessing property usinf variable
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
