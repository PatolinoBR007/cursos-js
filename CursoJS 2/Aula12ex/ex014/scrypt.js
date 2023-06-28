function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('ft')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    msg.innerHTML = (`São exatamente ${hora} horas`)
    if (hora < 12 && hora >= 6) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#7289DA'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#99aab5'
    } else {
        img.src = 'fotonoite.png'
    }
}