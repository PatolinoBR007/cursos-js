const btn_texto = document.querySelector('#btn_texto')
const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_press = document.querySelector('#p_press')

const obterDados = ()=>{
    const endpoint = 'https://e7f09299-4547-4c96-91fd-f1a6406946c7-00-2h962yd1dzv3i.picard.replit.dev/'
    fetch(endpoint)
    .then(res => res.json())
    .then(dados=>{
        console.log(dados);
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}C`
        p_nivel.innerHTML = `Nivel: ${dados.nivel}mm`
        p_press.innerHTML = `Pressão: ${dados.pressao}atm`
    })
}

// let intervalo = setInterval(() => obterDados(), 5000);

let dados = {
    nome:'pato',
    idade:21,
    curso:'JavaScrypt'
}

let cabecalho = {
    method: 'POST',
    body:JSON.stringify(dados)
}

const gravarDados = ()=>{
    const endpoint = 'https://e7f09299-4547-4c96-91fd-f1a6406946c7-00-2h962yd1dzv3i.picard.replit.dev/'
    fetch(endpoint, cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret);
    })
}

btn_texto.addEventListener('click',evt=>{
    gravarDados()

})
