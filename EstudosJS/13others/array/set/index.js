const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica 1", "Bohemia Rhapsody", "musica 10"])

musicas.add("Heavens Doors")
musicas.add("musica 1")
musicas.add("musica 1")
musicas.add("musica 10")

musicas.delete("musica 1")

// musicas.clear()

musicas.forEach((el)=> {
    caixa.innerHTML += el + "</br>"
})

for(let m of musicas) {
    console.log(mp)
}

console.log(musicas)


