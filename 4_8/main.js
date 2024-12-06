// string
const myName = "jeonghun"
const email = "111@naver.com"
const hello = `Hello ${myName}??`

console.log(hello)
// nubmbers
const number = 10;
const number2 = 10.55;
// boolean
// const checked = True;
// const isShow = False;

// undefined
let undef;
const obj = {abc:123};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

//null 
// 의도적으로 비어있음을 의미하는 데이터 
// 아무것도 없는 상태 
// 지금은 아무것도 없지만 여기에는 곧 데이터가 들어갈 예정이니
// 메모리 공간을 미리 확보해 놔라 
let name = null;
console.log(name);
name = "ihihi";
console.log(name);

// object 
// Key-Value 관계 여러가지 데이터를 저장한다. 
const user = {
    // key: value
    userName : "jh",
    age : 31,
    isValid : true
};
console.log(user.userName);
console.log(user.age);
console.log(user.isValid);

// Array 배열
// 파이썬의 리스트와 비슷, 데이터를 순차적으로 나열 
const fruits = ['Apple','Banana','Cherry'];
console.log(fruits[0]);

isShow = true;
if (isShow) {
    let aaa = "A";
    console.log(aaa);
}
// console.log(aaa);

// const 상수, 재사용되지않는 값
const a = 12;
console.log(a);
a = 999;
console.log(a);





