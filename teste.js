var a = [1, 2, 3];

function f(x) {
    x[1] = 5;
}

console.log(a[1]);
f(a);
console.log(a[1]);
