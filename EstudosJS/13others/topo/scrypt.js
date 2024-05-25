let config = {
    cor: '#456'
}

const cxmsg = new Cxmsg(config)

const btn_caixa1 = document.querySelector('#btn_caixa1')
const btn_caixa2 = document.querySelector('#btn_caixa2')
const btn_caixa3 = document.querySelector('#btn_caixa3')

btn_caixa1.addEventListener('click', (evt)=>{

    cxmsg.mostrar('PatolinoBR007oldschollmasterblaise','Curso de JavaScrypt, criando caixa de mensagem personalizada',)
})

btn_caixa2.addEventListener('click', (evt)=>{
    cxmsg.mostrar('SamaraKawaii', "deusa do limbo")
})

btn_caixa3.addEventListener('click', (evt)=>{
    cxmsg.mostrar('mama eu', 'ok para sim')
})