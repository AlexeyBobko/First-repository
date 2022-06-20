"use strict";
//Стилистика кода
function pow(x, n) {
    var result = 1;

    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
// var x = prompt('x?', '')
console.log(typeof alert);
const user = {};
let full = 'aaaaaaaaaaaa';
full = 'bbbbbbbbbbbb';
console.log(full);

let user1 = {
    name: 'john',
    age: 28,
}
let key = prompt('что хочешь?', 'name');
alert( user1[key]);
//Объект
const obj = {
    name: 'Maxim',
    age: 25,
    isMarried: false,
    'this is mistake': true,
};
 obj.z = 'new';
 console.log(obj["this is mistake"]);
//Массив
let arr = ['first', 'second', 'third', 7, false, [], {}];
console.log(arr);
let zxc = ['first', 'second', 'third', 7, false, [], {}];
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
const discount = 0.9;
function convert(amount, curr) {
    return curr*amount;
}
function promotion(result) {
    console.log(result*discount);
}
convert(500, usdCurs);
convert(500, eurCurs);
promotion(convert(500, eurCurs)); // О важности return

function test() {
    for (let i = 0; i < 5; i++){
        console.log(i);
        if ( i === 3) return// здесь слово return просто останавливает функцию
    }                       //оно возвращает значение undefined
    console.log('Done');
}

test ();

function sayHello(name) {
    return console.log(`Привет, ${name}!`);
}
sayHello('Антон');

function returnNeighboringNumbers(num) {
    return console.log([num-1, num, num+1]);
}
returnNeighboringNumbers(9);

function getMathResult(a, b) {
    if(typeof b !== 'number' || b <= 0){
         return console.log(a);
    } 
    let str = '';

    for (let i = 1; i <= b; i++) {
        if(i === b){
            str += `${a*i}`;
        } else {
            str += `${a*i}---`;
        }
    }
    return console.log(str);
}
getMathResult(7, 4);

const str = 'qwerty';
console.log(str.toUpperCase());

const fruit = 'abra kadabra bum';
console.log(fruit.indexOf('bum'));

//Callback-функции

function first() {
    // do something
    setTimeout(function() {
        console.log(1); //Такая запись позвоялет задержать выполнение на 500мс
    },500);
}
function second() {
    console.log(2);
}
first();
second();
//Объекты, деструктуризация объектов
const options = {
    name: 'test',
    width: 1024,
    height: 860,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){ //Вот таким образом можно самостоятельно создать свой метод в объекте
        console.log('Test');
    }
};
    const {border, bg} = options.colors; //Вот таким образом можно деструктурировать объект, т.е. разделить на более мелкие части
    console.log(border, bg);
console.log(Object.keys(options)); //Это свойство объекта для определения кол-ва элементов в виде массива
console.log(Object.keys(options).length);// А такая запись просто выдаст число

for (let key in options){ //Для перебора объекта можно использовать способ For in
    if( typeof(options[key])=== 'object') {
        for( let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

function getCoupeNumber(num) {
    if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
        console.log('Ошибка. Проверьте правильность введенного номера места');
    }else if(num === 0 || num > 36){
        console.log('Таких мест в вагоне не существует');
    }else {
        console.log(`Номер вашего купе ${Math.ceil(num/4)}`);
    }
}
getCoupeNumber(36);

function getTimeFromMinutes(minute) {
    if(typeof(minute) !== 'number' || minute <= 0 || !Number.isInteger(minute)){
        console.log('Ошибка, проверьте данные');
    }else {
        let hour = Math.floor(minute / 60);
        if(hour === 2 || hour === 3 || hour === 4){
            console.log(`Это ${hour} часа и ${minute % 60} минут`);
        }else if(hour === 1){
            console.log(`Это ${hour} час и ${minute % 60} минут`);
        }else {
            console.log(`Это ${hour} часов и ${minute % 60} минут`);
        }
    }
}
getTimeFromMinutes(400);

function findMaxNumber(a, b, c, d) {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number'){
        console.log(0); 
    } else {
        console.log(Math.max(a, b, c, d));
    }
}
findMaxNumber(23, '107', 219, 51);

function fib(num) {
    if(num <= 0 || typeof(num) !== 'number' || !Number.isInteger(num)){
        console.log('');
    }else {
        let str = '';
        for(let i = 0; i < num; i++){
        str = str + ' ' + i;
        }
        console.log(str);
    }
}
fib(7);

//Массивы и псевдомассивы


// Передача по ссылке и по значению

let a = 5, // В примитивных типах данных происходит передача по значению
    b = 10;//т.е. в переменную b полностью перезаписывается значение а
b = b + 4;
console.log(b);
console.log(a);

const obx = {
    a: 3,
    b: 7
};
const copy = obx; //Здесь же данные не перезаписываются, а тут происходит передача по ссылке
copy.a = 8;// т.е. copy ссылается на obx
console.log(obx);
console.log(copy);

const add = {
    c: 12,
    d: 25
};
console.log(Object.assign(obx, add)); // Метод Object.assign() позволяет объединить объекты

const oldArray = ['as', 'bs', 'cs'];
const newArray = oldArray.slice(); //Метод slice() применяется для копирования массивов
newArray[1] = 'dsadsadsadsa';
console.log(newArray);
console.log(oldArray);

//Spread-опреатор(оператор разворота)
const video = ['filmix', 'youtube', 'rutube'],
      blogs = ['tilda', 'twitter', 'content'],
      internet = [...video, ...blogs]; //Spread-оператор разбивает на составляющие компоненты массивы и позволяет 
      console.log(internet); //записать отдельно элементы массива, а не оба массива по отделности
// ООП

Object.setPrototypeOf(jonh, soldier);
const jonh = Object.create(soldier)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            java: '30%',
            python: '40%'
        },
        exp: '1 month'
    }
};
function showExperience(plan) {
    const {exp} = plan.skills;
    console.log(exp);
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
      str = str + `Язык ${key} изучен на ${programmingLangs[key]}\n`; 
    }
    console.log(str);

    return str;
}
showProgrammingLangs(personalPlanPeter)

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);