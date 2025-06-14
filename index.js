'use strict';

alert(`Введіть будь ласка ваші данні:`);

let userAge = prompt('Ваш вік:');
if (userAge === null || userAge === ''){
    alert('Шкода, що Ви не захотіли вказати свій вік.');
    userAge = 'Користувач не вказав кількість.'
} else if (isNaN(userAge)){
    alert("Ви ввели некоректне значення! Введіть ваш вік в числовому значенні.");
    userAge = +prompt('Ваш вік:');
    if (isNaN(userAge) || userAge === null || userAge === ''){
        alert('Шкода, що Ви не захотіли вказати свій вік.');
        userAge = 'Користувач не вказав кількість.';
    }
}

let userCity = prompt('Ваше місце проживання:');
if (userCity === null || userCity === ''){
    alert('Шкода, що Ви не захотіли вказати своє місце проживання.');
    userCity = 'Користувач не вказав своє місце проживання.'
} else if (!isNaN(userCity)){
    alert("Введіть ваше місце проживання не в числовому значенні");
    userCity = 'Користувач вказав числове значення';
    if (!isNaN(userCity) || userCity === null || userCity === ''){
        alert('Шкода, що не захотіли ввести своє місце проживання');
        userCity = 'Користувач не захотів вводити свої дані';
    }
}

let userFavorSport = prompt('Ваш улюблений вид спорту:');
if (userFavorSport === null || userFavorSport === ''){
    alert('Шкода, що Ви не захотіли вказати улюблений вид спорту.');
    userName = 'Користувач не вказав улюблений вид спорту.'
} else if (!isNaN(userFavorSport)){
    alert("Введіть ваш улюблений вид спорту не в числовому значенні");
    userFavorSport = 'Користувач вказав числове значення';
    if (!isNaN(userFavorSport) || userFavorSport === null || userFavorSport === ''){
        alert('Шкода, що не захотіли вказати улюблений вид спорту.');
        userFavorSport = 'Користувач не захотів вводити свої дані';
    }
}

alert(`Імʼя користувача: ${userAge}, Вік користувача: ${userCity}, Місце користувача: ${userFavorSport}`)