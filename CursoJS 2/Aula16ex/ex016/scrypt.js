var res = document.querySelector('div#res')
var tab = document.querySelector('select#seln')
var n1 = document.getElementById('txtn')
var dados = []
var c = 0
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() { 
    if (isNumero(n1.value) && !inlista(n1.value, dados)) {
        dados.push(n1.value)
        var item = document.createElement('option')
        item.text = `valor ${dados[c]} adicionado`
        tab.appendChild(item)
        res.innerHTML = " "
        c++
    } else {
         alert('Valor invalido ou ja encontrado na lista')
    }
    n1.value = ' '
    n1.focus()
res.innerHTML = ' '   
res.innerHTML += `<br>${dados}</br>` 
//res.innerHTML += `<br>${c}</br>` 
}
function finalizar() {
    if (dados.length == 0) {
        alert('Adicione valores antes de proseguir')
    } else {
        let maior = dados[0]
        let menor = dados[0] 
        var soma = 0
        for (let pos in dados) {
            if (dados[pos] > maior) {
                maior = dados[pos]
            } else if (dados[pos] < menor) {
                menor = dados[pos]
            }
        }
        for (let cont in dados) {
            soma += Number(dados[cont])
        }
        var mediaI = soma
        res.innerHTML += `<br>foram escolidos ${dados.length} números</br>`
        res.innerHTML += `<br>O Maior valor é ${maior}</br>`
        res.innerHTML += `<br>O menor valor é ${menor}</br>`
        res.innerHTML += `<br>A soma dos valores é ${soma}</br>`
        res.innerHTML += `<br>A media dos Valores é ${mediaI / dados.length}</br>`
    }
}
    