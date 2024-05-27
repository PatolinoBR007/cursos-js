import {Cxmsg} from "./cxmsg.js"

const btn_caixa1 = document.querySelector('#btn_caixa1')
const btn_caixa2 = document.querySelector('#btn_caixa2')
const btn_caixa3 = document.querySelector('#btn_caixa3')

const config ={
    cor: '#f0f',
    tipo: 'sn',
    comando_sn:()=>{null}
}

btn_caixa1.addEventListener('click', (evt)=>{
    Cxmsg.mostrar(config,'PatolinoBR007oldschollmasterblaise','Curso de JavaScrypt, criando caixa de mensagem personalizada',)
})

btn_caixa2.addEventListener('click', (evt)=>{
    Cxmsg.mostrar(config,'SamaraKawaii', "deusa do limbo")
})

btn_caixa3.addEventListener('click', (evt)=>{
    Cxmsg.mostrar(config,'mama eu', 'ok para sim')
})