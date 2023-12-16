const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = ["html", "css", "javascript"]
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener("click", (evt)=> {
    resultado.innerHTML = "Valor não encontrado"
    const ret = elementos_array.find((el, i)=> {
        if (el.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = `Valor ${el.toUpperCase()} Encontrado na posição ${i}` 
            return el
        }
    })
    console.log(ret)
})
