'use strict';

alert(`Введіть будь ласка ваші данні:`);

let userAge = prompt('Ваш вік:');
if (userAge === null || userAge.trim() === ''){
    alert('Шкода, що Ви не захотіли вказати свій вік.');
    userAge = 'Користувач не вказав кількість.'
} else if (Number(userAge) < 0 || Number(userAge) > 100 || !Number.isInteger(+userAge)) {
    alert('Ви ввели некоректне значення! Вiд 6 до 100.')
    userAge = 'Користувач не вказав свiй реальний вiк'
} else {
    alert("Ви ввели некоректне значення! Введіть ваш вік в числовому значенні.");
    userAge = +userAge;
}

let userCity = prompt('Ваше місце проживання:');
if (userCity === null || userCity.trim() === ''){
    alert('Шкода, що Ви не захотіли вказати своє місце проживання.');
    userCity = 'Користувач не вказав своє місце проживання.'
}

let userFavorSport = prompt('Ваш улюблений вид спорту:');
if (userFavorSport === null || userFavorSport.trim() === ''){
    alert('Шкода, що Ви не захотіли вказати улюблений вид спорту.');
    userName = 'Користувач не вказав улюблений вид спорту.'
}

alert(`Ваш вік: ${userAge}, Ваше місце проживання: ${userCity}, Ваш улюблений вид спорту: ${userFavorSport}`)