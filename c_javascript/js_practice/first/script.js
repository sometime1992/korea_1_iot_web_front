// let username = prompt('이름을 입력하세요: ');
// let age = Number(prompt('나이를 입력하세요 : '));
let username;
let age;
// input창과 동일하게 prompt의 값의 문자열로 인식
// : 숫자에 대한 자료 활용을 위해 형변환이 필요
console.log('이름의 타입: ', typeof username );
console.log('나이의 타입: ', typeof age );

// 데이터 타입: typeof 연산자를 통한 값은 소문자로 시작
// 형 변환: 대문자로 시작하는 타입명()
// 상수 대문자!
const NUM_1 = 0;
const NUM_2 = 0;
// const NUM1 = Number(prompt('첫 번째 숫자를 입력해주세요.'))
// const NUM2 = Number(prompt('두 번째 숫자를 입력해주세요.'))

console.log(`두수의 합은 ${NUM_1 + NUM_2}`);

//% ===== 연산자 예제 ===== %//
//! 문제1
const PI = 3.14;
let radius = 10; // 원의 반지름
let area = PI * radius * radius; // 원의 넓이


// : 원의 넓잇값을 계산하여 출력
console.log(`원의 넓이: ${area}`);

//! 문제2
// 1 inch = 2.54cm
// : 단위 변환기 프로그램
let inch = 10;
let cm = inch * 2.54;
// : inch값을 변수에 대입하면 cm값으로 변환하여 해당 값을 출력
console.log(`${inch}inch의 값은 ${cm}cm입니다.`);

//! 문제 3
let number;
number = Number(prompt('숫자 입력 : '));
let message = number % 2 === 0 ? '짝수' : '홀수';
console.log(message);

//! 문제 4
let total = 0;
total += 5;
total *= 3;
total -= 2;

console.log('최종결과: ', total);
