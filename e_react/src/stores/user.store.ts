// user.store.ts 파일

//! zustand 폴더/파일 체계
// src 폴더 내에 stores 폴더 생성
// : 해당 폴더 내부에서 전역 관리할 상태들을 구분하여 생성

// >> 파일명
//    : 데이터명.store.ts

//# user(회원) 정보 정의
interface User {
  id: number;
  name: string;
}