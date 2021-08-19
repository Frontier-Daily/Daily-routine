# ES6 문법에서 추가된 String method
말그대로 ES6 문법에서 추가된 String method에 대해 정리해보았다.
## startsWith()
어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 `boolean` 으로 반환한다.
```js
const str = "Welcome to Frontier!"
const matchstr = 'Welcome'

console.log(str.startsWith(matchstr)) // true
// 'Welcome' 이라는 문자열로 시작하는게 맞으므로 true가 나온다.
```

## endsWith()
어떤 문자열에서 특정 문자열로 끝나는지 확인할 수 있으며, 결과를 `boolean` 으로 반환한다.
```js
const str = "Welcome to Frontier!"
const matchstr = 'Welcome'

console.log(str.endsWith(matchstr)) // false
// 'Welcome' 이라는 문자열로 끝나지 않으므로 false가 나온다.
```

## includes()
하나의 문자열이 다른 문자열에 포함되어 있는지 판별하고 결과를 `boolean` 으로 반환한다.
```js
const str = "Welcome to Frontier!"
const matchstr = 'Welcome'

console.log(str.includes("Frontier")) // true
// 'Frontier' 이라는 문자열을 포함하고 있으므로 true가 나온다.
```
