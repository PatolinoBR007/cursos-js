var amigo = {nome: 'Dougras',
sexo: 'M',
peso: 67.5,
engordar(p=0) {
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)