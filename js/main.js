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