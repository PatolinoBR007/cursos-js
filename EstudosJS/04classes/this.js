var menina = {

    nome: 'cristina',

    falar: function() {
        console.log(`olá meu nome é ${this.nome}`)
    }
}

menina.falar()
var dizer = menina.falar;
dizer()