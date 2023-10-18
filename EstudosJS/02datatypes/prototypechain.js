const Usuario = function(nome) {
    this.nome
}
const pato = new Usuario('Pato')
Usuario.prototype.getNome = function() {console.log(this.nome)}
pato.getNome()