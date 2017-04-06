// A sample example using array, objects and loops
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop) {
    var i = 0;
    while (i < contacts.length) {
        if (contacts[i].firstName === firstName) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
        i++;
    }
    return "No such contact";
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Bravo", "gender"));
