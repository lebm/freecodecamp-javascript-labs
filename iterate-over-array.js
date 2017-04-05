var myArr = [ 2, 3, 4, 5, 6];

var total = 0;
for (i=0; i < myArr.length; i++){
    total += myArr[i];
}

console.log(total);

function multiplyAll(arr) {
  var product = 1;
  for(i=0; i < arr.length; i++){
      for(j=0; j < arr[i].length; j++){
          product *= arr[i][j];
      }
  }
  return product;
}

console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
