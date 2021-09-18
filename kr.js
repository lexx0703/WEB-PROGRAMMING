alert('Задание №1: "Объявите переменную и запишите в нее свое имя как литерал строки"');
let user = {
    name: 'Алексей',
}
alert(user.name);
alert('Задание №2: "Объявите константу и запишите в нее год своего рождения как литерал числа"')
let db = {
    date_of_birth: 2003,
}
alert(db.date_of_birth);
alert('Задание №3: "Создайте функцию, которая печатает приветствие и имеет один аргумент: name"');
function func(name) {
    alert(name);
}
func('Привет!');
alert('Задание №4: "Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [15, 30] включая крайние числа"');
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++)
    result.push(i);
    return(result);
}
range(15,30);
alert('Задание №5: "Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа."');
function rangeOdd() {
    let result = range(15, 30);
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 > 0)
        {
            result.push(i);
        }
    }
     alert(result);
}
rangeOdd(15,30);
alert('Задание №7: "Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов"');
function average(a, b) {
    alert((a + b) / 2);
}
average(2,3);
alert('Задание №8: "Задание 8 Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента"')
function square(x) {
    alert(x * x);
}
square(3);
alert('Задание №9: "Задание 9 Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента"');
function cube(x) {
    alert (x * x * x);
}
cube(4);
alert('Задание №10: "Вызовите функции square и cube в цикле от 0 до 9, вычисляя, соответственно квадрат и куб от переменной цикла. Передайте квадрат и куб на каждой итерации в функцию average. Результаты сложите в массив и возвратите из функции calculate"')
function calculate(number = 9) {
    let result = [];
    for (let i = 1; i < number; i++)
        result[i] = average(square(i), cube(i));
    return(result);
}
calculate();
