// function* cores() {
//     yield 'vermelho'
//     yield 'verde'
//     yield 'azul'
// }

// let itc = cores()

// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)


// function* perguntas() {
//     const nome = yield 'qual seu nome? '
//     console.log(nome)
//     const esporte = yield 'qual seu esporte favorito? '
//     console.log(esporte)
//     return `Seu nome é ${nome} e você gosta de ${esporte}`
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('pato').value)
// console.log(itp.next('esgrima').value)


function* contador() {
    let i = 0
    while (true) {
        yield i++
        if (i > 5) {
            break
        }
    }
}

const itco = contador()

for (let c of itco ) {
    console.log(c)
}

