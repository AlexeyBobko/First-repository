"use strict";

// let results = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for( let j = 0; j < i; j++){
//         results += '*';
//     }
//     results += '\n';
// }
// console.log(results);


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log('');

/* Функции */


function showMessage () {};

const camp = 'Мы с ребятами решили пойти отдохнуть в лагерь. Было здорово\n';
console.log(camp.repeat(5));

const num = '2940.8px';
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, потому что специальное значение: NaN
console.log(Object.is(7, 8));

const obj = {
    name: 'Alex',
    age: 29,
    sex: 'Man',
    family: {
        momName: 'Janna',
        dadName: 'Sasha',
    },
}

const copy = obj;
obj.age = 10;
console.log(obj);
console.log(copy);