const x = [21,22,23,24,25]

for (let i = 0; i < 10; i++) {
    const aleatorio = x[Math.floor(Math.random()*x.length)]
    console.log(aleatorio)
}