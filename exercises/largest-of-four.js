function largestOfFour(arr) {
    var tmparr = [];
    for(var i=0; i < arr.length; i++){
        var bigger = 0;
        for(var j=0; j < arr[i].length; j++){
            if (arr[i][j] > bigger){
                bigger = arr[i][j];
            }
        }
        tmparr.push(bigger);
    }
    return tmparr;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));
