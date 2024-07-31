//! e_conditoin.js

// 자바스크립트의 '제어'문
// : 조건문, 반복문

//# 1. 조건문(Condition)

//? JS의 조건문 종류
// if문, else문, else if문, switch문

//! 1) if문: 만약 ~라면
// : 특정 조건이 '참'이면 코드 블록을 실행

//* if문의 구조 (기본 형태)
/*
if (조건) {
  조건이 참(true)일 때 실행할 코드
}
*/

// >> 조건: 보통 비교 연산자를 사용하여 표현

let number = 10;
if (number > 0) {
  console.log('양의 정수입니다.');
}

let stringData = ''; // 빈문자열의 경우 false값으로 인식
let numberData = 0; // 빈문자열의 경우 false값으로 인식

// false 데이터에 !(not) 연산자를 사용하여 조건문 실행
if (!stringData) {
  console.log('빈 문자열은 false로 인식됩니다.');
}

if (numberData) {
  console.log('0의 값은 false로 인식됩니다.');
}

//! else문 (그 밖에)
// : if문과 함꼐 사용
// : if문의 주어진 조건이 거짓일 때 실행할 코드 블록을 정의