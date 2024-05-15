const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const btn_parar = document.querySelector('#btn_parar')
const carro = document.querySelector('#carro')
const tela = document.querySelector('#tela')

const init =()=>{
    carro.style.position='relative'
    carro.style.left='0px'
    carro.style.top='0px'
    carro.style.transition='.1s'
}

let anima = null
let palco = tela.offsetWidth

const mover =(dir)=>{
    carro.style.left = parseInt(carro.style.left)+(10*dir)+"px"
    anima = setTimeout(mover,20,dir)
    
    let posCarro = parseInt(carro.style.left)
    if (posCarro <= 0 || posCarro >= palco-100) {
        clearTimeout(anima)
    }
    console.log(posCarro);
}

btn_direita.addEventListener('click',(evt)=>{
    clearTimeout(anima)
    mover(1)
})

btn_esquerda.addEventListener('click',(evt)=>{
    clearTimeout(anima)
    mover(-1)
})

btn_parar.addEventListener('click',(evt)=>{
    clearTimeout(anima)
})

window.onload=init()
window.addEventListener('resize',()=> palco=tela.offsetWidth)
window.addEventListener('keydown',(evt)=>{
    console.log(evt.code);
    if (evt.code === 'ArrowUp' || evt.key === 'w') {
        carro.style.top = parseInt(carro.style.top)-10+'px'
    }
    if (evt.code === 'ArrowDown' || evt.key === 's') {
        carro.style.top = parseInt(carro.style.top)+10+'px'
    }
    if (evt.code === 'ArrowRight' || evt.key === 'd') {
        carro.style.left = parseInt(carro.style.left)+10+'px'
    }
    if (evt.code === 'ArrowLeft' || evt.key === 'a') {
        carro.style.left = parseInt(carro.style.left)-10+'px'
    }
})