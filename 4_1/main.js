
// elements 변수에 "div" 태그를 가져와서 저장했어요
const elements = document.querySelectorAll('div')
// JS 사용하는 간략한 반복문
elements.forEach(element =>{ //화살표 함수
    console.log(element.dataset.fruitName)
})