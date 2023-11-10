function sum (...num) {
    let total = 0
    for (const n1 of num) {
        total += n1
    }
    return total
}
console.log(sum(1, 2, 3, 4))




function myFunc(a, b, ...outros) {
    console.log("a: ", a)
    console.log("b: ", b)
    console.log("outros: ", outros)
}
myFunc(1, 2, 3, 4, 5, 6, 7, 8)