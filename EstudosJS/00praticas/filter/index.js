const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = document.querySelectorAll(".cursos")
const c1_2 = document.querySelector("#c1_2")
const btnCursoSelecionados = document.querySelector("#btnCursoSelecionado")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave)=> {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+ chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_cursos")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionados.addEventListener("click", (evt)=> {
    const todosRadio = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadio.filter((el)=> {
        return el.checked
    })
    radioSelecionado = radioSelecionado[0]
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    console.log(radioSelecionado)
    console.log(cursoSelecionado)
})