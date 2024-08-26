import React from 'react'

/*
REACT 문법 체게: JSX

컴포넌트(대문자로 시작): 리액트의 구성요소(UI)
Props: 컴포넌트의 속성(properties의 약어)
 */

//! Props 전달(데이터 전달) - 무조건 객체이기 때문에 props.##으로 사용
// : 부모 컴포넌트로 부터 자식 컴포넌트로 데이터를 전달할 때 사용
// : - props로 전달된 데이터는 자식 컴포넌트에서 readonly!(변경 불가)처럼 사용

//? 자식 컴포넌트
// >> 부모로 부터 전달되는 props를 매개변수로 받음
type ChildType = {
  name: string;
}

function ChildComponent(props: { name: string}) {
  // props.name = '이도경'; - Error (readonly 속성)

  return(
    <div>안녕하세요. {props.name} </div>
  )
}

type MultiPropsType = {
  name: string;
  colorProps: string;
}

// 여러 개의 Props 전달과 비구조화 할당(구조 분해)
// : 객체나 배열에서 해당 묶음 구조를 풀이해서 작성
// >> 객체나 배열 내부의 요소들을 한 번에 각각의 요소의 변수에 할당

// EX) {name, color}: MultiPropsType
// : 좌항의 name과 color는 함수 내부의 로컬 매개변수
// : 우항의 객체 구조는 외부에서 전달하는 인자값(객체, 배열)

//

// EX) [a, b] = [1, 2, 3, 4];
// a = 1;
// b = 2;


function MultiProps({name, colorProps}: MultiPropsType) {
  return (
    <div style={{color: colorProps}}>반갑습니다. {name}님</div>
  )
}

// 기본 속성값 지정
// : 컴포넌트에서 호출 시 props를 전달하지 않을 경우 지정될 기본값
// 컴포넌트명.defaultProps = { 기본속성: '기본값' }
// 기본값을 지정하면 기본값이 우선순위가 되서 기본값이 출력된다
MultiProps.defaultProps = {
  name: '황상기'
}

{/* 
  <Div>
    <p />
  </Div> 
*/}

export default function Props01() {
  const props = {
    name: '박영준',
    colorProps: 'orange'
  }

  return (
    <div>
      {/* props의 경우 객체로 전달! */}
      <ChildComponent name='이승아'/>
      <ChildComponent name='이도경'/>

      {/* 여러 개의 props 전달 */}
      <MultiProps name='이기석' colorProps='pink' />
      {/* ...props가 구조 분해 할당을 사용하여 각각의 소것ㅇ명을 찾아감 */}
      <MultiProps {...props}/>
      <MultiProps colorProps='purple' />

    </div>
  )
}
