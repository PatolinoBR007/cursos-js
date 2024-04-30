const numero = document.getElementById('numero')

numero.innerHTML = 'processando...'

let promise = new Promise((resolve, reject)=>{
    let res = true
    let tempo = 3000

    setTimeout(() => {
        if (res) {
            resolve('deu certo')
        } else {
            reject('deu errado')
        }
    }, tempo);
})

promise.then((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})
promise.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove('ok')
    numero.classList.add('erro')    
})
