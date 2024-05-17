const btn_validar = document.querySelector('#btn_validar')
const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

btn_validar.addEventListener('click',(evt)=>{
    let estadoValidação = f_nota.validity
    
    if (estadoValidação.valueMissing) {
        f_nota.setCustomValidity("krl, Este campo é obrigatorio")
    } else if (estadoValidação.rangeOverFlow) {
        f_nota.setCustomValidity('passou fdp so pode 10')
    } else if (estadoValidação.rangeUnderFlow) {
        f_nota.setCustomValidity('passou fdp so pode 10')
    }

    // f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage
    evt.preventDefault()
})
