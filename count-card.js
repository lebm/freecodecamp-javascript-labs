var count = 0;

function cc(card) {
    var answer = "";
    // switch uses "==="
    // card can be any type, or at least number and string
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if (count > 0) {
        answer = " Bet";
    } else {
        answer = " Hold";
    }

    // count is casted to string before return
    return count + answer;
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
