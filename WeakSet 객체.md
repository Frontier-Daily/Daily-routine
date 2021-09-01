# WeakSet 객체란?
> 참조를 가지고 있는 객체만 저장이 가능하다. 객체형태를 중복없이 저장하려고 할때 유용.

# WeakSet 문법
> new WeakSet([iterable]);

iterable : 반복가능한 객체로 null은 `undefined`로 취급된다.<br/>
ex)
```js
// ws를 new 인스턴스를 사용해서 WeakSet 객체로 생성하여 변수선언 및 할당한다.
let ws = new WeakSet();
// arr 변수선언 및 값할당
let arr = [1,2,3,4];
// arr2 변수선언 및 값할당
let arr2 = [5,6,7,8];
// obj에 arr, arr2를 객체안에 넣어 변수선언 및 값할당
let obj = {arr, arr2};

// ws에 arr 추가
ws.add(arr); // WeakSet{[1,2,3,4]}
// ws에 arr2 추가
ws.add(arr2); // WeakSet{[1,2,3,4], [5,6,7,8]}
// ws에 obj 추가
ws.add(obj); // WeakSet{[1,2,3,4], [5,6,7,8], {[1,2,3,4], [5,6,7,8]}

arr = null;

ws // WeakSet{[1,2,3,4], [5,6,7,8], {[1,2,3,4], [5,6,7,8]}}
ws.has(arr) // false
ws.has(arr2) // true
```

# Set 객체와의 차이점
1. Set과는 달리 객체만 저장할 수 있다.
2. add, has, delete 사용가능
3. size(), keys(), values(), entries(), 반복 작업 관련 메서드는 사용불가
