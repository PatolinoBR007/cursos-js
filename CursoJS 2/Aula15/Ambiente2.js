let num = [5, 9, 6, 8, 3, 2]
num.sort()
num.push(1)
for (let p in num) {
    console.log(num[p])
}
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(10)
console.log(pos)