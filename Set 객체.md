# Set 객체란?
> 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용.

# Set 문법
> new Set([iterable])

iterable : 반복가능한 객체
반환값 : 새로운 `Set` 객체

ex)
```js
// mySet을 new 인스턴스를 사용해서 Set 객체로 생성하여 변수선언 및 할당한다.
let mySet = new Set();

// mySet에 "crong" 추가
mySet.add("crong"); // Set {"crong"}
// mySet에 "hary" 추가
mySet.add("hary"); // Set {"crong", "hary"}
// mySet에 "crong" 추가 -> "crong"이 중복됬기 때문에 또 추가되지 않음
mySet.add("crong"); // Set {"crong", "hary"}

// mySet이 "crong"을 가졌는지 확인
mySet.has("crong") // true
// mySet에 "crong"삭제
mySet.delete("crong") // true

// mySet은 "crong"이 삭제되어 "hary"만 나온다.
mySet // Set {"hary"}

// 이 배열을 forEach써서 순회해보면 "hary"가 나옴
mySet.forEach((v) => {
  console.log(v);
}) // "hary"
```
