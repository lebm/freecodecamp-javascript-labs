var myArray = [];

function showArray(array){
    for (var i = 0; i < array.length; i++){
        console.log(i + " " + array[i]);
    }
    console.log("=========");
}

function fillArray(a,i,f,s) {
    a.length = 0;
    var j = 0;
    if (s > 0){
        for (j = i; j <= f; j += s) {
            a.push(j);
        }
    }
    else {
        for (j = i; j >= f; j += s) {
            a.push(j);
        }
    }
}

fillArray(myArray,1,5,1);
showArray(myArray);

fillArray(myArray,1,9,2);
showArray(myArray);

fillArray(myArray,9,1,-2);
showArray(myArray);
