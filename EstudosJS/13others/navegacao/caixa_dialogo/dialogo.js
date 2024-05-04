const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click',(evt)=>{
    alert("clicou no alert")
})

btn_confirm.addEventListener('click',(evt)=>{
    if (confirm("Voce clicou aqui?")) {
        console.log('ok pressionado')
    } else {
        console.log('cancelado')
    }
})

btn_prompt.addEventListener('click',(evt)=>{
    console.log(prompt("informe nome completo?", 'corninho da silva')); 
})