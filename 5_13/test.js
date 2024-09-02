// 1번째 방법 (중괄호 사용)
// {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi}입니다.`);
// }

// 2번째 방법 (함수 사용)
// function sample() {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi} 입니다.`);
// }
// sample();

// 3번째 방법 (즉시 호출)
// 사용 이유 : var만 지원하는 internet explorer에 대응하기 위하여
(function () {
    let pi = 3.141592;
    console.log(`test.js의 pi는 ${pi} 입니다.`);
})();

function 선언_함수 () {
    console.log('1번째 선언 함수입니다.');
}