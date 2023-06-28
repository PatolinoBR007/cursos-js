let num = [5, 4, 9, 3, 7]
num.push(1)
num.sort()
console.log(`o valor é: ${num}`)
console.log(`Há ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)
for(let pos=0; pos < num.length; pos++){
    console.log(num[pos])
}