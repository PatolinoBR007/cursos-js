const numero = document.getElementById("numero")
const btn_promesa = document.getElementById("btn_promesa")

btn_promesa.addEventListener("click", (event)=> {
    numero.innerHTML = "Processando..."
    promessa()
        .then((retorno)=> {
            numero.innerHTML = retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        })
        .catch((retorno)=> {
            numero.innerHTML = retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        })
})

const promessa = ()=> {
    let p = new Promise((resolve, reject)=> {
        let resultado = true
        let tempo = 3000
        setTimeout(() => {
            if (resultado) {
                resolve("Deu certo")
            } else {
                reject("Deu Errado")
            }
        }, tempo);
    })
    return p
}


numero.innerHTML = "Esperando"