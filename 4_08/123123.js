const myName = "Jae Hwang"
const email = "ckdtjqdld9632@naver.com"
const hello = "Hello ${myName}??"

console.log(hello)

const number = 10;
const number2 = 10.55;

const checked = true;
const inShow = false;

let undef;
const obj = {abc:123};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

let name = null;
console.log(name);
name = "1111";
console.log(name);

const user = {
    userName : "ljh",
    age : 18,
    isValid : true
};
console.log(user.userName);
console.log(user.age);
console.log(user.isValid)

const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]);

function abc() {
    var aaa = "A";
    console.log(aaa);
}
abc()
// aaa = "B"