import { Cxmsg } from "../../13others/topo/cxmsg.js"
Cxmsg.config({cor: '#03f'})

const timer = document.getElementById('timer')
const btn = [...document.querySelectorAll('.btn')]

let intervalo = null
let tmpini = null


const contador = ()=>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = cont/1000
    timer.innerHTML = converter(seg)
}

const converter = (seg)=>{
    const hora = Math.floor(seg/3600)
    const resto = seg%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const ft = tempo=>tempo<10?"0"+tempo:tempo
    return `${ft(hora)}:${ft(minuto)}:${ft(segundo)}`
}



btn.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if (el.id === 'btn_iniciar') {
            tmpini = Date.now()
            intervalo = setInterval(contador,1000)
        } else if (el.id === 'btn_parar') {
            clearInterval(intervalo)
        } else if (el.id === 'btn_zerar'){
            tmpini = Date.now()
            Cxmsg.mostrar('Zerado','o cronometro foi rebobinado')
        }
    })
})