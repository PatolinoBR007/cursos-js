const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const carro = document.querySelector('#carro')

const init =()=>{
    carro.style.position='relative'
    carro.style.left='0px'
    carro.style.transition='.5s'
}

window.onload=init()

btn_direita.addEventListener('click',(evt)=>{
    carro.style.left = parseInt(carro.style.left)+10+"px"
})

btn_esquerda.addEventListener('click',(evt)=>{
    carro.style.left = parseInt(carro.style.left)-10+"px"
})