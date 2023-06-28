function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'muleke.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'novinho.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'gostoso.png')
            } else {
                img.setAttribute('src', 'veio.png')
            }
        } else if (fsex[1].checked) { 
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'muleka.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'novinha.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'gostosa.png')
            } else {
                img.setAttribute('src', 'veia.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}