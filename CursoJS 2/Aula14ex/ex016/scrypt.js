function caucular() {
    var n1 = Number(document.querySelector('input#txt1').value)
    var n2 = Number(document.querySelector('input#txt2').value)
    var n3 = Number(document.querySelector('input#txt3').value)
    var res = document.getElementById('res')
    res.innerHTML = ' '
    if (n3 <= 0) {
        alert('[ERRO] passo 0 invalido considerando passo 1')
        n3 = 1
    }
    if (n2 == 0) {
        alert('Numero final igual a 0 considerando como 10')
        n2 = 10
    }
    if (n1 < n2) {
        for (let c = n1;c <= n2;c += n3){
            res.innerHTML += ` ${c}  ➫`
        }
    } else {
        for (let c = n1;c >= n2;c -= n3) {
            res.innerHTML += ` ${c}  ➫`
        }
    }
    //res.innerHTML += (`<br>[${n1}|${n2}|${n3}]</br>`)
    res.innerHTML += ('<br>\u{1F377}\u{1F5FF}</br>')
}