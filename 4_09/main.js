function funName() {
    console.log("함수 실행");
}
funName();

function returnFunc() {
    return 123;
    console.log("함수가 실행되었음");
}

const a = returnFunc();
console.log(a);

function sum(a,b) {
    return a+b;
}

const number = sum(1,2)
const number2 = sum(3,4)
const number3 = sum(5,6)

function hello() {
    console.log("hello");
}

hello();

function handler() {
    console.log("clicked!");
}

document.body.addEventListener('click',handler);
handler();
handler();
document.body.addEventListener('click', function() {})

const object1 = {
    name: "JaeHwang",
    age: 18,
    getName: function() {
        return this.name;
    }
}

const hisName = object1.getName();
console.log(hisName);
console.log(object1.getName());


const isShow = true;
const checked = false;

if (isShow) {
    console.log("Show!");
}
if (!checked) {
    console.log("Checked!")
}
// console.log(ABC);

// switch (condition) {
//     case value1:
//         state1;
//         break;
//     case valany:
//         state2;
//         break;
// }

function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));

function switchOfStuff(val) {
    let answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "banana";
            break;
        default:
            answer = "stuff";
            break;
    }
}


for(let i=0;i<10;i++){
    console.log(i);
}

const obj = {
    name: '이름',
    age: '나이',
}

for(const key in obj) {
    console.log(key)
    console.log(obj.name, obj.age);
    console.log('key값: ${key}');
    console.log('value값: ${obj[key]}');
}

const array =['1번', '2번', '3번'];

for (const element of array) {
    console.log(element);
    console.log(array);
}

array.forEach(element => {
    console.log(element);
});

while(condition) {


}
do {

} while(condition) {

}