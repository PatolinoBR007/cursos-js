var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora >= 00 && hora < 6 ){
    console.log('ja é madrugada')
}else if (hora < 12){
    console.log('é de manhã')
}else if (hora < 18){
    console.log('ja é tarde')
}else{
    console.log('é de noite')
}