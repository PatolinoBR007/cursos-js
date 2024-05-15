const posX = document.querySelector('#posx')
const posY = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')
const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')

q1.accessKey = 'b'
q2.accessKey = 'n'

const info = (el)=> {
    const domRect = el.getBoundingClientRect()
    posX.innerHTML = `posX: ${domRect.x}`
    posY.innerHTML = `posY: ${domRect.y}`
    largura.innerHTML = `Largura: ${domRect.width}`
    altura.innerHTML = `Altura: ${domRect.height}`
}

q1.addEventListener('click',(evt)=>{
    info(evt.target)
})

q2.addEventListener('click',(evt)=>{
    info(evt.target)
})
