'use strict';

alert(`Введіть будь ласка ваші данні:`);

let userAge = prompt('Ваш вік:');
if (userAge === null || userAge.trim() === ''){
    alert('Шкода, що Ви не захотіли вказати свій вік.');
    userAge = 'Користувач не вказав кількість.'
} else if (Number(userAge) < 0 || Number(userAge) > 100) {
    alert('Ви ввели некоректне значення! Вiд 6 до 100.')
    userAge = 'Користувач не вказав свiй реальний вiк'
} else {
    alert("Ви ввели некоректне значення! Введіть ваш вік в числовому значенні.");
    userAge = +prompt('Ваш вік:');
}

let userCity = prompt('Ваше місце проживання:');
if (userCity === null || userCity.trim() === ''){
    alert('Шкода, що Ви не захотіли вказати своє місце проживання.');
    userCity = 'Користувач не вказав своє місце проживання.'
    if (!isNaN(userCity)){
    alert("Введіть ваше місце проживання не в числовому значенні");
    userCity = 'Користувач вказав числове значення';
    } 
}

let userFavorSport = prompt('Ваш улюблений вид спорту:');
if (userFavorSport === null || userFavorSport.trim() === ''){
    alert('Шкода, що Ви не захотіли вказати улюблений вид спорту.');
    userName = 'Користувач не вказав улюблений вид спорту.'
    if (!isNaN(userFavorSport)){
    alert("Введіть ваш улюблений вид спорту не в числовому значенні");
    userFavorSport = 'Користувач вказав числове значення';
    }
}

alert(`Ваш вік: ${userAge}, Ваше місце проживання: ${userCity}, Ваш улюблений вид спорту: ${userFavorSport}`)