const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("Canal", 100)

console.log(mapa)

caixa.innerHTML = mapa.get("curso")
