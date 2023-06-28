var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log('Dom')
        break
    case 1:
        console.log('Seg')
        break
    case 2:
        console.log('Ter')
        break
    case 3:
        console.log('Qua')
        break
    case 4:
        console.log('Qui')
        break  
    case 5:
        console.log('Sex')
        break
    default:
        console.log('Sab')
}