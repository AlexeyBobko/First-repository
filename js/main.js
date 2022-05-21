"use strict";
//Объект
const obj = {
    name: 'Maxim',
    age: 25,
    isMarried: false
};
 obj.z = 'new';
 console.log(obj);
//Массив
let arr = ['first', 'second', 'third', 7, false, [], {}];
console.log(arr);

//Общение с пользователем
    // alert('HELLO');

    // const result = confirm('Are you here?');
    // console.log(result);
    // const answer = prompt('18 есть?', '');
    // const category = 'toys';

// Интерполяция
console.log(`https://someurl.com/${category}/5`);
console.log(4 + +'5');
//Операторы в JS
let incr = 15,
      decr = 15;
    
      console.log(incr++);
      console.log(incr);
// Условия в JS
if(false) {
    console.log('sss');
} else if (false) {
    console.log('fff');
} else {
    console.log('zzz');
};

const apple = 89;
switch (apple) {
    case 90:
        console.log('wrong');
        break;
    case '95':
        console.log('wrong');
        break;
    case 98:
        console.log('right');
        break;
    default: 
        console.log('ничего из указанного');
        break;
};

//Тернарный оператор
const num = 50;
(num === 50) ? console.log('yes') : console.log('no');

// Логические операторы
const humburger = 0,
      fries = 0,
      cola = 0;
      console.log(humburger === 3 && cola && fries);
      console.log(humburger === 3 && cola === 1 && fries);
      console.log(humburger || cola || fries);
let alex = 'a', 
    john = 'b', 
    max = 'c';
    console.log(alex || john || max); //Здесь он выводится значение 1-ого true
// Циклы
let axe = 55;

while (axe < 60) {
    console.log(axe);
    axe++;
}

do {
    console.log(axe);
    axe++;
}
while (axe <60);

for (let i = 1; i < 5; i++) {
    console.log(i);
}
for (let i = 1; i < 10; i++) {
    if (i === 6){
        // break;
        continue; //Этот опреатор позволяет пропустить шаг, указанный в условии и при этом не прерывает цикл
    }
    console.log(i);
}
// Задача на построение треугольника
let result = '';
const length = 7;

for(let i = 1; i < length; i++){

    for( let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

// Метки( в данном случае меткой является first)
first: for(let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k++){
            if (k===2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

// Функции
showFirstMrssage('This is exapmle of function declaration1');
function showFirstMrssage (text) { //Function declaration
    console.log(text);
    let num = 20; 
}

const logger = function () { //Function expression
    console.log('This is exapmle of function expression');
};
    logger ();

const calc = (a, b) => {return a + b}; //Стрелочная функция; если функция имеет 1 аргумент, то скобки() можно опустить

const abc = a => {return a };

const usdCurs = 28;
const eurCurs = 35;
function convert(amount, curr) {
    console.log(curr*amount);
}
convert(500, usdCurs);
convert(500, eurCurs);