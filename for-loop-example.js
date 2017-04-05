var myArray = [];

function showArray(array){
    for (var i = 0; i < array.length; i++){
        console.log(i + " " + array[i]);
    }
    console.log("=========");
}

function fillArray(i,f,s) {
    myArray = [];
    var j = 0;
    if (s > 0){
        for (j = i; j <= f; j += s) {
            myArray.push(j);
        }
    }
    else {
        for (j = i; j >= f; j += s) {
            myArray.push(j);
        }
    }
}


fillArray(1,5,1);
showArray(myArray);

fillArray(1,9,2);
showArray(myArray);

fillArray(9,1,-2);
showArray(myArray);
