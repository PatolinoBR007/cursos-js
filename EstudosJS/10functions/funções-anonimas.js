// const f = function(...val) {
//     let res = 0
//     for (let v of val){
//         res += v
//     }
//     return res
// }

// console.log(f(1, 2,4,2,6,7,9,322,3,6,3737))

const f = new Function("x"," y", "return x + y")

console.log(f(14, 7))
