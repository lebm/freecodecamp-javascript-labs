function factorialize(num) {
    fat = 1;
    while (num > 1) {
        fat *= num;
        num--;
    }
    return fat;
}

console.log(factorialize(5));
