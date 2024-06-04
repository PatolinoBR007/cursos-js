const configdgv ={
    endpoint: "produtos.json",
    idDestino: "dgvdados"
}

const dgv =(configdgv)=>{
    const dgvDados =document.getElementById(configdgv.idDestino)
    fetch(configdgv.endpoint).then(res=>res.json()).then(res=>{
        res.map(el=>{ 
            const dadosArr = [el.id, el.produto, el.marca, el.modelo, "D E V"]

            const divlinha = document.createElement('div')
            divlinha.setAttribute('class','dgvlinha')
            dgvDados.appendChild(divlinha)
            
            for(let cont=0; cont<5; cont++){
                const divDados = document.createElement('div')
                divDados.setAttribute('class',`c${cont+1}`)
                divDados.innerHTML= dadosArr[cont]
                divlinha.appendChild(divDados)
            }  
        })
    })
}

dgv(configdgv)
