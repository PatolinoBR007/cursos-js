const Nave = function(energia){
    this.energia=energia
    this.disparos = 100
}

const n1 = new Nave(100)

Nave.prototype.vidas = 3
Nave.prototype.atirar = function(){
    if (this.disparos > 0) {
            console.log('pow')
            this.disparos--
            console.log(`Disparos: ${n1.disparos} Recaregando...`)
    }
}

console.log(n1)
console.log('Energia: ' + n1.energia)
console.log('Vida: ' + n1.vidas)

n1.atirar()
n1.atirar()
n1.atirar()
n1.atirar()
n1.atirar()

console.log(n1.disparos)

