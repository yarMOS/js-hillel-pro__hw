'use strict';

const userName = prompt('Введите Ваше Имя');
const userAge = prompt('Введите Ваш возраст');
const userJob = prompt('Введите Вашу работу');

if (userName === null) {
    alert('ok, bye');
}
else if (userName.trim() === '') {
    alert('Error: Nothing is entered')
}
else if (isNaN(userName)) {
    alert('Error: invalid number')
}
else if (!Number.isInteger(+userName)) {
    alert('Error: invalid whole number')
}
else if (userName <= 0) {
    alert('Error: invalid whole number')
}

if (userAge === null) {
    alert('ok, bye');
}
else if (userAge.trim() === '') {
    alert('Error: Nothing is entered')
}
else if (isNaN(userAge)) {
    alert('Error: invalid number')
}
else if (!Number.isInteger(+userAge)) {
    alert('Error: invalid whole number')
}
else if (userAge <= 0) {
    alert('Error: invalid whole number')
}

if (userJob === null) {
    alert('ok, bye');
}
else if (userJob.trim() === '') {
    alert('Error: Nothing is entered')
}
else if (isNaN(userJob)) {
    alert('Error: invalid number')
}
else if (!Number.isInteger(+userJob)) {
    alert('Error: invalid whole number')
}
else if (userJob <= 0) {
    alert('Error: invalid whole number')
}

alert(`${userName} ${userAge} ${userJob}`);