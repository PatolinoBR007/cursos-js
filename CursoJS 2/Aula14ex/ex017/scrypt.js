function gerar() {
    var n1 = Number(document.querySelector('input#txt1').value)
    var teste = document.querySelector('p#teste')
    var tab = document.getElementById('seltab')
    var prod = 0
    teste.innerHTML = ' '
    tab.innerHTML = ' '
    if (n1.lenght == 0) {
        alert('Escolha uma cor de 0 a 10')
    } else {
        for (var c = 1;c <= 10;c++ ) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            /*prod = n1 * c
            teste.innerHTML += (`<br>${n1} x ${c} = ${prod}</br>`)*/
    }
    //teste.innerHTML += (`<br>[${n1}|${c}|${prod}]</br>`)
    }
}