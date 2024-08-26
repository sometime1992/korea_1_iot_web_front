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
  color: string;
}

// 여러 개의 Props 전달과 비구조화 할당(구조 분해)
function MultiProps({name, color}: MultiPropsType) {

}


{/* 
  <Div>
    <p />
  </Div> 
*/}

export default function Props01() {
  return (
    <div>
      {/* props의 경우 객체로 전달! */}
      <ChildComponent name='이승아'/>
      <ChildComponent name='이도경'/>
    </div>
  )
}
