function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num <= 0){
        alert('não ha calculos pra valores abaixo de zero ainda')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ' '
        for(var c = 1;c <= 10;c++){
            let item  = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}