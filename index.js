'use strict'; // писать на начале каждого задания!!

const BIG_ADDITIONAL_NUM = 5;
const MEDIUM_ADDITIONAL_NUM = 3;
const SMALL_ADDITIONAL_NUM = 1;
const MAX_SUM = 100;

const LARGE_BOUNDARY_NUM = 10;
const SMALL_BOUNDARY_NUM = 3;

console.log(typeof SMALL_ADDITIONAL_NUM);
console.log(typeof BIG_ADDITIONAL_NUM);
console.log(typeof MEDIUM_ADDITIONAL_NUM);
console.log(typeof MAX_SUM);
console.log(typeof LARGE_BOUNDARY_NUM);

const userNum = prompt('Enter a number'); // cancel - null, enters nothing = '', enteres whitespaces only - '    ', enters not a number - ' d3fqwe123 ', enters a number - '  234 '
let sum;

if (userNum === null) {
    alert('ok, bye');
}
else if (userNum.trim() === '') {
    alert('Error: Nothing is entered')
}
else if (isNaN(userNum)) {
    alert('Error: invalid number')
}
else if (!Number.isInteger(+userNum)) {
    alert('Error: invalid whole number')
}
else if (userNum <= 0) {
    alert('Error: invalid whole number')
}

else {
    if (LARGE_BOUNDARY_NUM <= userNum) {
        sum = +userNum + BIG_ADDITIONAL_NUM;
    }
    else if (userNum >= SMALL_BOUNDARY_NUM) {
        sum = +userNum + MEDIUM_ADDITIONAL_NUM;
    }
    else {
        sum = +userNum + SMALL_ADDITIONAL_NUM;
    }

    if (sum > MAX_SUM) {
        sum = MAX_SUM;
    }
    alert('Your sum is ' + sum);
}

const areEqual = BIG_ADDITIONAL_NUM === 5; //false всегда использовать ===
const areLooselyEqual = BIG_ADDITIONAL_NUM == 5; //true

const obj = {};

undeclaredVar = 10;
window.undeclaredVar = 10

