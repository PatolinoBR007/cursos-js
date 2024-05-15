const lati = document.querySelector('#lati')
const long = document.querySelector('#long')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao)
    
} else {
    console.log('geolocalização não esta ativada');
}

function mostrarLocalizacao(pos) {
    console.log(pos);
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latitude
    console.log(pos.coords.latitude,pos.coords.longitude);
}
function erroLocalizacao(pos) {
    console.log('erro ao encontrar localização');
}
