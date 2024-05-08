class Cursos{
    static cursos =['JavaScrypt','HTML','CSS','Arduino','Python','PHP','C++','Java']
    constructor(){}
    static getTodosCursos=()=>{
        return this.cursos
    }
    static getCurso=(i)=>{
        return cursos[i]
    }
    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCursos=()=>{
        this.cursos = []
    }
}

export default Cursos
