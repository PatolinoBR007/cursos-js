const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const pessoa = {
   nome: "",
   idade: "",
   getNome:function(){
      return this.nome
   },
   getIdade:function(){
      return this.idade
   },
   setNome:function(nome){
      this.nome = nome
   },
   setIdade:function(idade){
      this.idade = idade
   },
}

const addPessoa = ()=> {
   const div = document.createElement("div")
   div.setAttribute("class", "pessoa")
   div.innerHTML = `Nome: ${pessoa.getNome()} </br>Idade: ${pessoa.getIdade()}`
   res.appendChild(div)
}

btn_add.addEventListener("click", (evt)=> {  
   pessoa.setNome(document.querySelector("#f_nome").value)
   pessoa.setIdade(document.querySelector("#f_idade").value)
   addPessoa()
   console.log(pessoa.nome)
})
