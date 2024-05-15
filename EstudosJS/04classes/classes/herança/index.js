class Carro {
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
    atirar = function(){
        if (this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro("Uno", 4) 
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("caveirao", 6, 100, 50)


console.log(`Nome: ${c1.nome}\nPortas: ${c1.portas}\nLigado: ${(c1.ligado?"Sim":"Não")}\nVelocidade: ${c1.vel}\nCor: ${c1.cor}`)

console.log(`Nome: ${c2.nome}\nPortas: ${c2.portas}\nLigado: ${(c2.ligado?"Sim":"Não")}\nVelocidade: ${c2.vel}\nCor: ${c2.cor}`)