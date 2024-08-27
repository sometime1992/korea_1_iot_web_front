import React from 'react'

// 렌더링
// : 작성한 코드를 화면에 출력하는 기능
// >> 조건부 렌더링

//# 자식 컴포넌트

interface IItem {
  // 여행 짐 싸기
  // >> 짐 항목의 이름, 준비 완료 여부
  name: string;
  isPacked: boolean; // 짐을 챙겼을 경우(true), 아직 안챙겼을 경우(false)
}

function Item({ name, isPacked }: IItem) {
  // const example = { a: 1, b: 2, c: 3, d: 4 }

  // const { a, b, c, d } = example;
  // const a = example.a;
  // const a = example.b;
  // const a = example.c;

  // const hello = example; 객체를 한번에 받음
  // hello.a
  // hello.b

  //! if 조건문을 사용한 조건부 렌더링
//   if (isPacked) {
//     return (
//       <li>{name} ♥</li>
//     ) 
//   } else {
//     return (
//       <li>{name}</li>
//     )
//   }

//! 삼항 연산자를 사용한 조건부 렌더링
// : 조건 ? 참일 경우 : 거짓일 경우
  // return (
  //   <li>
  //     {/* HTML 내에서 JS문법 사용 시: {}내에 작성 */}
  //     { isPacked ? name + '❤️' : name}
  //   </li>
  // )

//! 논리 연산자를 사용한 조건부 렌더링
  return (
    <li>
      {/* 
        논리연산자
        && 연산자 (a && b: 둘다 true 여야만 true값이 반환)

        A && B
        - A의 값이 false인 경우 B의 값 출력 (X)
        - A의 값이 true인 경우 B의 값 출력 (O)
      */}
      {name} {isPacked && '✔️'}
    </li>
  )
}

//# 부모 컴포넌트
export default function Rendering01() {

  return (
    <div>
      <p>여행용 짐 목록</p>
      <ul>
        <Item
          name='과자'
          isPacked={true}
        />
        <Item
          name='김밥'
          isPacked={false}
        />
        <Item
          name='음료수'
          isPacked={true}
        />
      </ul>
    </div>
  )
}
