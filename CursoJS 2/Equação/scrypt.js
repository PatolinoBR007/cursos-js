function caucular() {
    let a = Number(document.querySelector('input#va').value)
    let b = Number(document.querySelector('input#vb').value)
    let c = Number(document.querySelector('input#vc').value)
    let res = document.querySelector('div#res')
    let d = b**2 - 4*a*c
    res.innerHTML = ' ' 
    res.innerHTML += `<br></br>`
    res.innerHTML += `Δ= ${b}² -4.${a}.${c}<br>Δ= ${d}</br>`
    if (d < 0) {
        res.innerHTML += '<br></br>'
        res.innerHTML += 'Valor de delta negativo imposivel proseguir'
    } else {
        let x1 = (-b + Math.sqrt(d))/(2*a)
        let x2 = (-b - Math.sqrt(d))/(2*a)
        res.innerHTML += `<br>X1= <u>-(${b}) +-√${d}</u></br>&emsp;&emsp;&emsp;&ensp; 2.${a}`
        res.innerHTML += `<strong><br>X1 = ${x1}</br> X2 = ${x2}</strong>`
    }
}
    