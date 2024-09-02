// 첫번째 문제
// if else, prompt를 사용해서
// 입력받은 시간이 오전인지 오후인지
// 구분하는 코드

// var time = prompt();

// if(time <= 11 || time == 24) {
//     document.write("오전입니다.")
// } else {
//     document.write("오후입니다.")
// }

// 두번째 문제
// 현재 환율을 기반으로 사용자에게 숫자를 입력받아서
// 달러에서 원화로 환율을 변환하는 프로그램을 만들어 보세요
// 1달러 = 1300원

// var exchange = prompt();

// document.write((exchange*1300)+"원입니다.");

// console.log(2 + 2 - 2 * 2 / 2 * 2)

// let A = "aaa";
// console.log(typeof(A));

// 세번째 문제
// 중첩 조건문을 사용
// 중첩 조건문이란 조건문 안에 조건문이 들어가는 코드
// 학점은 4.5 만점으로 한다
// 4.5 = A+
// 4.0 = A0
// 3.5 = B+
// 3.0 = B0
// 학점을 입력 받아서 특정 범위 안에 있는 학점의 경우에는
// 칭호를 붙여주자

let score = Number(prompt('학점을 입력하세요','학점'));

if (score < 2.0) {
    alert ("플랑크톤");
}else if (score < 3.0) {
    alert ("돌고래");
}else if (score < 4.0) {
    alert ("인간");
}else if (score < 4.4) {
    alert ("교수님");
}else {
    alert ("신");
}