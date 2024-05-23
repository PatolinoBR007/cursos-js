const texto = document.querySelector("#texto")

fetch('txt.txt').then(res=>res.json()).then(res=>{
    console.log(res.nome)
    console.log(res.idade)
    console.log(res.curso)
})