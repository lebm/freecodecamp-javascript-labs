// push values to array using while loop

var myArray = [];
var i = 0;
while (i<=4){
    myArray.push(i);
    i++;
}

i = 0;
while (i<=4){
    console.log(myArray[i]);
    i++;
}

i = myArray.length - 1;
while (i>=0){
    console.log(myArray[i]);
    i--;
}
