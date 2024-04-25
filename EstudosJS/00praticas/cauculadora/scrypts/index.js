const teclas = [...document.querySelectorAll(".tecla")]
let display = document.querySelector('#display')

document.querySelector('body').onkeyup = (evt)=>{
    teclas.map((el)=>{
        if (evt.key === el.innerHTML || isNaN(Number(evt.key))) {
            if (display.innerHTML !== '0.' && el.innerHTML !== '.' && Number(display.innerHTML) === 0) {
                display.innerHTML = ''
            }
            display.innerHTML += el.innerHTML  
        }
    })
}

let n1 = 0 
let n2 = 0 
let n3 = 0 
let op

teclas.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if (!isNaN(el.innerHTML) || el.innerHTML == '.') {
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
        } else if (el.innerHTML === '+') {
            n1 = Number(display.innerHTML)
            op = "+"
            display.innerHTML = 0
            console.log(n1, op)
        } else if(el.innerHTML === '-'){
            n1 = Number(display.innerHTML)
            op = "-"
            display.innerHTML = 0
            console.log(n1, op)
        } else if(el.innerHTML === 'X'){
            n1 = Number(display.innerHTML)
            op = "*"
            display.innerHTML = 0
            console.log(n1, op)
        } else if(el.innerHTML === '÷'){
            n1 = Number(display.innerHTML)
            op = "/"
            display.innerHTML = 0
            console.log(n1, op)
        } else if (el.innerHTML === 'C') {
            display.innerHTML = 0
            n1 = 0
            n2 = 0
            n3 = 0
        }
    })
})