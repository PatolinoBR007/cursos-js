import c from './contatos.js'

const listaContatos= document.querySelector('#listaContatos')
const btn_gravar = document.querySelector('#btn_gravar')

btn_gravar.addEventListener('click',(evt)=>{
    const cont = {
        nome:document.getElementById('f_nome').value,
        telefone:document.getElementById('f_tel').value,
        email:document.getElementById('f_email').value,
    }
    c.addContato(cont, listaContatos)
})