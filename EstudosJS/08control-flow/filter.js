const idades = [15, 21, 30, 17, 18, 44, 12, 50]

// const filtroMaior18 = (v, i, array)=> {
const filtroMaior18 = (v)=> {
    if (v >= 18) {
        return v
    }
}

const maior = idades.filter((v)=> {
    if (v >= 18) 
        return v
})

const menor = idades.filter((v)=> {
    if (v < 18) 
        return v
})

const nada = idades.filter((v)=> {
    return undefined
})


console.log(idades)
console.log(maior)
console.log(menor)
console.log(nada)