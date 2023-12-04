const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = document.querySelectorAll(".cursos")
const c1_2 = document.querySelector("#c1_2")
const nomeCurso = document.querySelector("#nomeCurso")
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes")
const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnCursoSelecionados = document.querySelector("#btnCursoSelecionado")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

const tirarSelecao = ()=> {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=> {
        el.classList.remove("selecionado")
    })
}

let indice = 0
const criarNovoCurso = (curso)=> {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+ indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt)=> {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    return novoElemento
}

cursos.map((el, chave)=> {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=> {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionados.addEventListener("click", (evt)=> {
    try {
        console.log("Curso Selecionado: " + cursoSelecionado().innerHTML)
    } catch (ex) {
        console.log("Nenhum curso selecionado")
        alert("selecione um curso para proseguir")
    }
})

btnRemoverCurso.addEventListener("click", (evt)=> {
    const cs = cursoSelecionado()
    if (cs !== undefined) {
        cs.remove()
        console.log("Removido: " + cursoSelecionado.textContent)
    } else {
        console.error("Nenhum curso selecionado")
        alert("selecione um curso para proseguir")
    }
})

btnAdicionarAntes.addEventListener("click", (evt)=> {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert("Nome do curso em branco, digite um nome para prosseguir")
        }
        
    } catch (ex) {
        console.log("Nenhum curso selecionado")
        alert("selecione um curso para prosseguir")
    }
})

btnAdicionarDepois.addEventListener("click", (evt)=> {
    try {
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
    } catch (ex) {
        console.log("Nenhum curso selecionado")
        alert("selecione um curso para prosseguir")
    }
})
