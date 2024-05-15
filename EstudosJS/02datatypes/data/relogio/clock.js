const div_data = document.querySelector('#div_data')
const div_clock = document.querySelector('#div_clock')
const btn_ativar = document.querySelector('#btn_ativar')
const btn_parar = document.querySelector('#btn_parar')
const tmp_alarme = document.querySelector('#tmp_alarme')
const hora_alarme = document.querySelector('#hora_alarme')
const timer = document.querySelector('#timer')

const bemtevi = new Audio('cp-bemtevi.mp3')
bemtevi.loop = 3

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

setInterval(() => {
    const data = new Date()
    let hora = data.getHours();hora=hora<10?'0'+hora:hora
    let minutos = data.getMinutes();minutos=minutos<10?'0'+minutos:minutos
    let segundos = data.getSeconds();segundos=segundos<10?'0'+segundos:segundos
    div_clock.innerHTML =`${hora}:${minutos}:${segundos}`
    if (alarme_ativado && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true
            bemtevi.play()
            timer.classList.add('alarme')
        }
    }
}, 1000);

btn_ativar.addEventListener('click',(evt)=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual+(tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML= `Hora Alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

btn_parar.addEventListener('click',(evt)=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML ='Hora Alarme: '
    tmp_alarme.value = 0
    timer.classList.remove('alarme')
    bemtevi.pause()
    bemtevi.currentTime = 0
})