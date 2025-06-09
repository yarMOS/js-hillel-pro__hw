let input = prompt("Введіть п'ятизначне число:");

if (/^\d{5}$/.test(input)) {
    let result = input.split('').join(' ');
    alert(result);
} 
else {
    alert('Помилка: потрібно ввести п’ятизначне число');
}