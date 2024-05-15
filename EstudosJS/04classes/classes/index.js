const btn_add = document.querySelector('#btn_add')
const imilitar = document.querySelector('#imilitar')
const inormal = document.querySelector('#inormal')
const inome = document.querySelector('#inome')
const iporta = document.querySelector('#iporta')
const iblind = document.querySelector('#iblind')
const imun = document.querySelector('#imun')
const carros = document.querySelector('#carros')

let a_carros = []

const removerCarro = (quem)=>{
    a_carros = a_carros.filter((el)=>{
        return el.nome != quem
    })
}

imilitar.addEventListener('click', (evt)=>{
    console.log('militar')
    iblind.removeAttribute('disabled')
    imun.removeAttribute('disabled')
})
inormal.addEventListener('click', (evt)=>{
    console.log('normal')

    iblind.value = 0
    imun.value = 0   
    iblind.setAttribute('disabled', 'disabled')
    imun.setAttribute('disabled', 'disabled')
})

const gerenciarExibiçãoCarros = ()=> {
    carros.innerHTML=''
    a_carros.map((el, i)=>{
        const div = document.createElement('div')
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", `${el.nome}`)
        if (el.blindagem === undefined && el.municao === undefined) {
            el.blindagem = 0
            el.municao = 0
        }
        div.innerHTML = `Carro: ${el.nome}<br/>Cor: ${el.cor}<br/>Portas: ${el.portas}<br/>Blindagem: ${el.blindagem}<br/> Munição: ${el.municao}<br/>`
        console.log(el)
        carros.appendChild(div)

        const btn_remover = document.createElement('button')
        btn_remover.setAttribute("class", "btn_remover")
        btn_remover.innerHTML = 'Remover'
        div.appendChild(btn_remover)
        btn_remover.addEventListener('click', (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibiçãoCarros()
        })
    })
}

btn_add.addEventListener('click', ()=>{
    btn_add.setAttribute('style', 'background-color: #ccc; box-shadow: 2px 2px 5px #00000052 inset;')
    setTimeout(() => {
        btn_add.setAttribute('style', 'background-color: #999;')
    }, 300);

    if (inormal.checked) {
        const c = new Carro(inome.value, iporta.value)
        c.setCor("Preto")
        a_carros.push(c)
    } else if (imilitar.checked) {
        const c = new Militar(inome.value, iporta.value, iblind.value, imun.value)
        a_carros.push(c)
    }

    gerenciarExibiçãoCarros()

    inome.value = ''
    iporta.value = 0
    iblind.value = 0
    imun.value = 0
})


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