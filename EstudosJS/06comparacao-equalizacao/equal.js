// 10 == 10
// true
// > 10 == '10'
// true
// > 10 === '10'
// false


console.log(Object.is(10, '10'))
console.log(Object.is(null, undefined))
console.log(Object.is(NaN, NaN ))