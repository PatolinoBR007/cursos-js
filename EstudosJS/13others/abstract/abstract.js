class CarroPadrao{
    constructor(){
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if (this.ligar === undefined) {
            throw new TypeError("é obrigatorio implementar o metodo ligar")
        }
        if (this.desligar === undefined) {
            throw new TypeError("é obrigatorio implementar o metodo desligar")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo, estagio=0){
        super()
        this.turbo = new Turbo(estagio)
        if (tipo === 1) {
            this.velMax = 120
            this.nome = 'normal'
        } else if (tipo === 2) {
            this.velMax = 160
            this.nome = 'esportivo'
        } else if (tipo === 3){
            this.velMax = 200
            this.nome = 'corrida'
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado = false)
        console.log('------------------')
    }
}

class Turbo extends CarroPadrao{
    constructor(e){
        super()
        if (e === 0) {
            this.pot = 0
        } else if (e === 1) {
            this.pot = 50
        } else if (e === 2) {
            this.pot = 75
        } else if (e === 3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagio){
        super(4, estagio)
        this.velMax = 300
        this.nome = 'carro especial'
        this.velMax = 300 + this.turbo.pot
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log('------------------')
    }
}

const c1 = new Carro(1,0)
const c2 = new Carro(2,1)
const c3 = new CarroEspecial(3)


c1.info()
c2.info()
c3.info()
