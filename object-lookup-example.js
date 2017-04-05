// Original lookup
function phoneticLookup(val) {
    var result = "";
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }
    return result;
}

// Object lookup version
function phoneticObjLookup(val) {
    var result = "";
    var map = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };
    result = map[val];

    return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticObjLookup("charlie"));
