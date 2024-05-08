const p_hora = document.querySelector('#p_hora')

let deg = 0

setInterval(() => {
    deg++
    p_hora.setAttribute('style', `rotate: ${deg}deg;`)
}, 10);