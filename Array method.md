# Array Method
Array 메서드 중 자주쓰이는 4가지 메서드의 작동원리를 정리해보았다.

## forEach 메서드 작동원리
Array 객체에서만 사용가능한 반복문
```js
function forEach(predicate, thisArg) {
  for(let i = 0; i < arr.length; i++) {
    predicate(arr[i], i);
  }
}

// predicate : 콜백함수를받는다
// thisArg : 콜백함수 내에서 this로 전달받을 인자를받는다(생략가능)
```

## map 메서드 작동원리
원본 배열의 요소를 하나하나 탐색해가면서 새로운 배열을 생성하여 리턴
```js
function map(predicate, thisArg) {
  let list = [];
  for(let i = 0; i < arr.length; i++) {
    list.push(predicate(arr[i], i));
  }
  return list;
}

// predicate : 콜백함수를받는다
// thisArg : 콜백함수 내에서 this로 전달받을 인자를받는다(생략가능)
```

## filter 메서드 작동원리
원본 배열에서 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 생성하여 리턴
```js
function filter(predicate, thisArg) {
  let list = [];
  for(let i = 0; i < arr.length; i++) {
    if(predicate(arr[i], i)) list.push(arr[i]);
  }
  return list;
}

// predicate : 콜백함수를받는다
// thisArg : 콜백함수 내에서 this로 전달받을 인자를받는다(생략가능)
```

## reduce 메서드 작동원리
배열의 각 요소에 대해 콜백함수를 실행하여 단 1개의 출력 결과를 리턴
```js
function reduce(predicate, val) {
  let result = val;
  for(let i = 0; i < arr.length; i++) {
    result = predicate(result, arr[i]);
  }
  return result;
}

// predicate : 콜백함수를받는다
// val : 초기화값
```
