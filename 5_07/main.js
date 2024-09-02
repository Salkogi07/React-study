const 함수 = function() {
    console.log("함수 내부 코드입니다...")
    console.log("함수 내부 코드입니다...")
    console.log("함수 내부 코드입니다...")
}
함수();
console.log(typeof(함수()));
console.log(함수());

function 함수1() {
    console.log("함수 1 입니다...")
}
함수1();

let a = prompt('string 문자열을 넣으면');
console.log(a);

function 함수2(매개변수) {
    console.log(매개변수);
    return 매개변수
}

function f(x) {
    return x * x
}
console.log(f(3));

function min(array) {
    let output = array[0];
    for (const item of array){
        if (output > item) {
            output = item;
        }
    }
    return output
}

const testArray = [55,32,11,103,275,330,9];
console.log(`${testArray} 중에서 `)
console.log(`최솟값은 = ${min(testArray)} 입니다.`);

function max(array) {
    let output = array[0];
    for (const item of array){
        if (output < item) {
            output = item;
        }
    }
    return output
}

const testArray2 = [55,32,11,103,275,330,9];
console.log(`${testArray} 중에서 `)
console.log(`최댓값은 = ${min(testArray)} 입니다.`);

function sample(...items) {
    console.log(items);
}
sample(1,2);
sample(3,4,5,6,7);

function min2(...items) {
    let output = items[0];
    for (const item of items){
        if (output > item) {
            output = item;
        }
    }
    return output
}
console.log(min2(33,22,11,55,52))

function sample2 (a,b,...c) {
    console.log(sample2(a,b,c));
}

console.log(Array.isArray(testArray));

function prt (...items) {
    console.log(items);
}

const array = [1,2,3,4];

console.log("전개 연사자를 사용하지 않을 경우");
prt(array);
console.log("전개 연산자를 사용할 경우");
prt(...array);

function earning (name, wage = 5000, hours = 40) {
    console.log(`${name} 님의 정보`);
    console.log(`${name} 님의 급여 ${wage}`);
    console.log(`${name} 님의 근로시간 ${hours}`);
}
earning('이재황');
earning('이재황', 10000);
earning('이재황', 10000, 50);

function callThreeTimes (callback) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    }
}
function print1 (i) {
    console.log(`${i}번째 함수 호출`);
}
callThreeTimes(print1);

function callThreeTimes2 () {
    function print2 (i) {
        console.log(`${i}번째 함수 호출`);
    }
    for (let i = 0; i < 3; i++) {
        print2(i);
    }
}
callThreeTimes2();

function callThreeTimes3 (callback) {
    for(let i =0;i<3;i++) {
        callback(i);
    }
}
callThreeTimes3(function(i) {
    console.log(`${i}번째 함수 호출`);
})

const numbers = [11,33,232,45,9];

number.forEach(function (value, idex, array) {
    console.log(`${index}번째 요소 : ${value}`);
});

let numbers1 = [273,11,103,132,12];
numbers1 = numbers1.map(function (value, index, array) {
    return value * value
});

numbers1.forEach(console.log);

const number2 = [0,1,2,3,4,5];
const evennumber2 = number2.filter(function (value) {
    return value % 2 === 0
});
console.log(`원래 배열 ${numbers2}`);
console.log(`짝수 배열 ${evennumber2}`);

let number3 = [0,1,2,3,4,5,6,7,8,9];

numbers3
    .filter((value) => value % 2 === 0)
    .map((value) => value * value)
    .forEach((value) => {
        console.log(value);
    });