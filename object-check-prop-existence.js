var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

// .hasOwnProperty method (is it a method in JS?) checks if the obj has
// the property;
function checkObj(checkProp) {
    var value = "";
    if (myObj.hasOwnProperty(checkProp)) {
        value = myObj[checkProp];
    } else {
        value = "Not Found";
    }

    return value;
}

// Test your code by modifying these values
console.log(checkObj("gift"));
console.log(checkObj("pet"));
console.log(checkObj("house"));
