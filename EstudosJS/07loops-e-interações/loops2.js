let num = [10, 20, 30, 40, 50]

for(n in num) {
    console.log(num[n])
}
console.log("\n")

for (m of num) {
    console.log(num[m])
    
}


console.log("\n")

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}