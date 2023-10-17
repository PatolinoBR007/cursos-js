let pessoa = {
    nome: 'Pato',
    idade: 20,
    feliz: true,
    pets: ['cachorro', 'gato'],
    carros: {
        camaro: {
            placa: 'vgh2345',
            cor: 'azul'
        },
        uno: {
            placa: 'fak7328',
            cor: 'branco'
        }
    },
    andar: function(km){
        console.log(pessoa.nome + ' andou ' + km + ' Km')
    }
}

pessoa.andar(30)

pessoa.nome = 'Guilherme'
pessoa.pets[0] = 'paraguaio'
console.log(pessoa.carros.camaro.cor)