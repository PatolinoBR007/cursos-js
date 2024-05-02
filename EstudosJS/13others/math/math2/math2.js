const olhos = [...document.querySelectorAll('.olho')]

let x = 0
let y = 0

window.addEventListener('mousemove', (evt)=>{
    x = evt.clientX
    y = evt.clientY

    const rotação

    olhos.map((el)=>{
        el.style.transform='rotate('+90+'deg)'
    })
})

olhos[0]