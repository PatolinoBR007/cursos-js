const caixa = document.getElementById("caixa")

let cores = ["azul", "verde", "vermelho"]
let cursos = ["HTML", "CSS", "JavaScrypt", cores]

cursos[0] = 2023

cursos.push("C++")
cursos.unshift("Python")
cursos.shift()

console.log(cursos[0])

cursos.map((el)=> {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
