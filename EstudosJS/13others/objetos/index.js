class Carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = "Esportivo"
            this.velMax = 300
        } else if (ptipo == 2){
            this.tipo = "Ultilitario"
            this.velMax = 100
        } else if (ptipo == 3){
            this.tipo = "Passeio"
            this.velMax = 160
        } else {
            this.tipo = "Militar"
            this.velMax = 180
        }
    }
    getNome() {
        return this.nome
    }
    getTipo() {
        return this.tipo
    }
    getVelMax() {
        return this.velMax
    }
    setNome(novoNome) {
        this.nome = novoNome
    }
    setTipo(novoTipo) {
        this.tipo = novoTipo
    }
    setVelMax(novoVelMax) {
        this.velMax = novoVelMax
    }
    getInfo() {
        return [this.nome, this.tipo, this.velMax]
    }
    info() {
        console.log(`Nome: ${this.nome}\nTipo: ${this.tipo}\nVelocidade Maxima: ${this.velMax} Km/h\n`)
    }
}

let c1 = new Carro("Mercedez", 1)
let c2 = new Carro("Delorean", 0)
let c3 = new Carro("Tesla", 3)
let c4 = new Carro("Estrada", 2)


// c1.info()
// c2.info()
// c3.info()
// c4.info()

c1.setNome("Opala")
c1.setTipo("Monstro")
c1.setVelMax(600)
console.log(c1.getInfo())