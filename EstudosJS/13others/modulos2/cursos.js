const cursos =['JavaScrypt','HTML','CSS','Arduino','Python','PHP','C++','Java']

// const getTodosCursos = () => {return cursos}

export default function getTodosCursos() {
    return cursos
}
function getCurso(i) {
    return cursos[i]
}


export {cursos, getCurso}
// export default getTodosCursos