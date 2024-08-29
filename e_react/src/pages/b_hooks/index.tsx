import React from 'react'
import UseState01 from './a_UseState/UseState01';
import UseState02 from './a_UseState/UseState02';
import UseState03 from './a_UseState/UseState03';
import UseState04 from './a_UseState/UseState04';
import UseState05 from './a_UseState/UseState05';
import ChildComponent from './a_UseState/ChildComponent';
import UseState06 from './a_UseState/UseState06';
import UseRef01 from './b_UserRef/UseRef01';
import UseRef02 from './b_UserRef/UseRef02';
import Practice01 from './a_UseState/Practice01';


// 전체 파일 정렬
// ctrl + a: 전체 선택
// ctrl + k + f: 포맷터 사용
function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        리액트 Hook
      </h1>

      <h2>리액트 Hooks - useState</h2>
      <UseState01/>
      <UseState02/>
      <UseState03/>
      <UseState04/>
      <UseState05/>
      <UseState06/>
      
      <hr />
      <UseRef01/>
      <UseRef02/>
      <Practice01/>
    </div>
  );
}

export default Index