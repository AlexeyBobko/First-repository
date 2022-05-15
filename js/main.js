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
const answer = prompt('18 есть?', '');
const category = 'toys';
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
