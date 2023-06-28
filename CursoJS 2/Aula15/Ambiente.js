let num = [4, 0, 0, 2]
console.log(`o vetor é ${num}`)
num[4] = 8
console.log(`o vetor é ${num}`)
num.push(9)
console.log(`o vetor é ${num}`)
num.length
console.log(`o vetor atualmente possui ${num.length} possições`)
console.log(`o valor da possição 5 é ${num[4]}`)
num.sort()
console.log(`o vetor é ${num}`)
for (let pos = 0;pos<num.length;pos++){
    console.log(num[pos])
}