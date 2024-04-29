const teclas = [...document.querySelectorAll(".tecla")]
const calc = document.querySelector('#calc')
const calc_aba = document.querySelector('#calc_aba')
let display = document.querySelector('#display')

let n1 = 0 
let n2 = 0 
let n3 = 0 
let op
let t

document.querySelector('body').onkeyup = (evt)=>{
    teclas.map((el)=>{
        if (evt.key === el.innerHTML) {
            t = evt.key
            console.log(`Tecla ${t} apertada`)
        }
    })
    if (!isNaN(t)) {
        if (display.innerHTML !== '0.' && t !== '.' && Number(display.innerHTML) === 0) {
            display.innerHTML = ''
        }
        display.innerHTML += t
    }
    t = undefined
}

const clickDown = (btn)=>{
    btn.setAttribute('style', 'box-shadow: 2px 2px 3px #0000005d inset;')
    setTimeout(() => {
        btn.setAttribute('style', 'box-shadow: none;')
    }, 500);
    console.log(`Button ${btn.innerHTML} pressed`)
}

teclas.map((el)=>{
    el.addEventListener('click',(evt)=>{
        clickDown(el)
        if (!isNaN(el.innerHTML) || el.innerHTML == '.'){
            if (display.innerHTML !== '0.' && el.innerHTML !== '.' && Number(display.innerHTML) === 0) {
                display.innerHTML = ''
            }
            display.innerHTML += el.innerHTML   
        } else if (el.innerHTML === '='){
            n2 = Number(display.innerHTML)
            display.innerHTML = 0
            n3 = eval(`${n1}${op}${n2}`)
            display.innerHTML = n3
            console.log(n1,op,n2,n3)
        } else if (el.innerHTML === '+'){
            n1 = Number(display.innerHTML)
            op = "+"
            display.innerHTML = 0
            console.log(n1, op)
        } else if (el.innerHTML === '-'){
            n1 = Number(display.innerHTML)
            op = "-"
            display.innerHTML = 0
            console.log(n1, op)
        } else if (el.innerHTML === 'X'){
            n1 = Number(display.innerHTML)
            op = "*"
            display.innerHTML = 0
            console.log(n1, op)
        } else if (el.innerHTML === '÷'){
            n1 = Number(display.innerHTML)
            op = "/"
            display.innerHTML = 0
            console.log(n1, op)
        } else if (el.innerHTML === 'C'){
            display.innerHTML = 0
            n1 = 0
            n2 = 0
            n3 = 0
        } else if (el.innerHTML === 'copy') {
            navigator.clipboard.writeText(display.innerHTML)
            alert("copiado para a area de transferencia")
        }
        if (display.innerHTML !== '0') {
            display.classList.remove('disp')
        }
    })
})

calc_aba.addEventListener('click', (evt)=>{
    calc.setAttribute('style', 'transition: .2s;')
    calc.classList.toggle('calc_exibir')
    if (!calc.classList.contains('calc_exibir')) {
        calc_aba.innerHTML = '❱'
    } else {
        calc_aba.innerHTML = '❰'
    }
})

setInterval(() => {
    if (display.innerHTML === '0') {
        display.classList.toggle('disp')
    }
}, 1500);
