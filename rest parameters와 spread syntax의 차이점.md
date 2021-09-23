# rest parameters
## rest parameters란?
> 매개변수 이름 앞에 세개의 점을 붙여 정의한 매개변수

1. 함수로 전달된 인수들의 목록을 배열로 압축할때 사용된다.<br/>
ex)
```js
function restTest(...rest) {
  console.log(rest);
}
restTest(1,2,3,4) // [ 1, 2, 3, 4 ]
```
2. 함수에 전달된 인수들은 매개변수 및 rest parameters에 순차적으로 할당된다.<br/>
ex)
```js
function restTest(para, ...rest) {
  // para : 매개변수
  console.log(para); // 1
  // rest : rest parameters
  console.log(rest); // [ 2, 3, 4 ]
}
```
3. rest parameters는 먼저 선언된 매개변수에 할당된 인수를 제외하고 나머지 인수들을 배열로 만들어준다.<br/>
-> 반드시 마지막 파라미터로 사용해야된다!<br/>
ex)
```js
function restTest(para, ...rest) {
  // para : 위의 예시에서는 1
  console.log(para); // 1
  // rest : 위의 예시에서는 1을 제외한 나머지 2,3,4를 배열로 변환된 결과인 [2,3,4]
  console.log(rest); // [ 2, 3, 4 ]
}
```
# spread syntax
## spread syntax란?
> 뭉쳐있는 여러개의 값들을 개별적인 값들의 목록으로 만들때 사용되는 문법<br/>
> Tip) spread의 뜻은 펼치는 것이다. 배열이나 문자열을 펼친다고 생각하면 쉬울것같다!

1. for..of문으로 순회할 수 있는(배열, 문자열 등) iterable(순서가 있는)에 한정된다.
ex)
```js
console.log(...[1,2,3]) // 1 2 3
console.log(...'Pocketmon'); // 'P' 'o' 'c' 'k' 'e' 't' 'm' 'o' 'n'

// iterable이 아닌 객체에는 spread syntax를 사용할 수 없다.
console.log(...{ a: 1, b: 2, c :3 }); // TypeError: Found non-callable @@iterator
```
2. spread syntax의 결과는 값들의 목록이기 때문에 이에 대한 결과는 변수에 할당할 수 없다.
```js
// rest parameters로 배열을 펼친 결과를 실행
console.log(...[1,2,3]) // 1 2 3
// rest parameters로 문자열들을 각각 펼친 결과를 실행
console.log(...'Pocketmon'); // 'P' 'o' 'c' 'k' 'e' 't' 'm' 'o' 'n'

// 결과가 각각 배열과 문자열에 대한 목록이다.
```
