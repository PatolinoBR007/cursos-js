function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Ano invalido')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            gen = 'Homen'
            if (idade < 10){
                img.setAttribute('src', '20211006_195751.png')
            }else if(idade < 20){

            }else if(idade < 50){

            }else{

            }
        }else if (sex [1].checked){
            gen = 'Mulher'
            if (idade < 10){

            }else if(idade < 20){

            }else if(idade < 50){

            }else{
                
            }
        }
        res.innerHTML = `${gen} com ${idade} anos`
        res.appendChild(img)
    }
}