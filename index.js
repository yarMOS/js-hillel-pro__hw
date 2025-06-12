'use strict'

let userAge = prompt("Ваше 5-ти значне число?");

if (userAge === null || userAge.trim() === "") {
    alert("Шкода, що Ви не захотіли вказати Ваше 5-ти значне число.");
    userAge = "Користувач не вказав 5-ти значне число.";
} else if (isNaN(userAge)) {
    alert("Ви ввели некоректне значення! Введіть Ваше 5-ти значне число у числовому вигляді.");
    userAge = "Користувач не вказав число.";
} else {
    userAge = +userAge;
    if (
        (userAge >= 10000 && userAge <= 99999) || (userAge <= -10000 && userAge >= -99999)) {
        const space = String(userAge).split("").join(" ");
        alert(`Ваше 5-ти значне число: ${space}`);
    } else {
        alert("Дозволені лише 5-ти значнi числа.");
        userAge = "Користувач не вказав кількість.";
    }
}