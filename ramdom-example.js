// Nothing special. Just an example on how to use Math.random()
// Also shows to user Math.floor()
function randomFraction() {
    return Math.random();
}

for (var i=0; i<10; i++) {
    console.log(randomFraction());
}

console.log("===============");

// [0,1)
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

for (var i=0; i<10; i++) {
    console.log(randomWholeNum());
}

console.log("===============");

// [min,max)
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin +1 ) + myMin);
}

for (var i=0; i<10; i++) {
    console.log(randomRange(5,10));
}
