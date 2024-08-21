// generic02.ts
export const tmp = '';

// 에제1) 제네릭 함수 구현
function reverseArray<T>(array: T[]): T[] {
  // 배열 메서드: reverse()
  // >> [1, 2, 3].reverse() === [3, 2, 1]

  let reverseArray = array.reverse();
  return reverseArray;
}

let stringArr = reverseArray(['1', '2', '3']);
console.log(stringArr); // [ '3', '2', '1' ]

let booleanArray = reverseArray([true, false, false, false]);
console.log(booleanArray); // [ false, false, false, true ]

// 예제2) 제네릭 인터페이스 정의
interface KeyValue<K , V> { // K: key의 타입, V: value의 타입
  key: K,
  value: V
}

let KeyValue: KeyValue<string, number> = {
  key: '이승아',
  value: 123
}

let anotherKeyValue: KeyValue<boolean, number> = {
  key: true,
  value: 200
}