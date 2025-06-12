'use strict';

alert(`Введіть будь ласка ваші данні:`);
const userName = prompt('Ваше імʼя ?');
    if (userName === null || userName === '') {
        alert(`Шкода, що Ви не захотіли вказати своє імʼя.`);
        userName = `Користувач не вказав імʼя.`;
    } else if(!isNaN(userName)){
        alert(`Ви ввели некоректне значення! Введіть ваше імʼя не в числовому значенні.`);
        userName = prompt('Ваше імʼя ?');
    }

const userAge = +prompt(`Ваш вік ?`);
    if (userAge === 0 || userAge === '') {
        alert(`Шкода, що Ви не захотіли вказати свій вік.`);
        userAge = `Користувач не вказав кількість`;
    } else  if(isNaN(userAge)) {
        alert(`Ви ввели некоректне значення! Введіть ваш вік в числовому значенні.`);
        userAge = +prompt(`Ваш вік ?`);
    }

const userJob = prompt(`Ваше місто роботи ?`);
    if (userJob === null || userJob === '') {
        alert(`Шкода, що Ви не захотіли вказати своє місце роботи.`);
        userJob = `Користувач не вказав місце роботи.`;
    } else if(!isNaN(userJob)){
        alert(`Ви ввели некоректне значення! Введіть ваше місце не в числовому значенні.`);
        userJob = prompt(`Ваше місце роботи ?`);
    }

alert(`Імʼя користувача: ${userName}, Вік користувача: ${userAge}, Місце користувача: ${userJob}`)