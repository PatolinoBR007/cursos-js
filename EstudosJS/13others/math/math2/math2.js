const olhos = [...document.querySelectorAll('.olho')]

let x = 0
let y = 0

window.addEventListener('mousemove', (evt)=>{
    x = evt.clientX
    y = evt.clientY

    const rot = Math.atan2(y,x)*180/Math.PI

    olhos.map((el)=>{
        el.style.transform='rotate('+rot+'deg)'
    })
})

olhos[0]