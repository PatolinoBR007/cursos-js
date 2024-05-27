class Login{
    static logado = false
    static matlogado = null
    static nomelogado =null
    static acessologado=null
    static endpoint = 'https://9e15c086-d340-486a-b4c8-d66fac700f3c-00-v65qbwsh9e4j.kirk.replit.dev/'

    static login=(mat, pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint).then(res=>res.json()).then(res=>{
            if (res) {
                this.logado=true
                this.matlogado=mat
                this.nomelogado=res.nome
                this.acessologado=res.acesso
                console.log(res);
            } else {
                console.log('Usuario nao encontrado');
            }
        })
    }
}
export {Login}