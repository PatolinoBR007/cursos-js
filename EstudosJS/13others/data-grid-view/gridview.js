const configdgv ={
    endpoint: "produtos.json",
    idDestino: "dgvdados"
}

const dgv =(configdgv)=>{
    const dgvDados =document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML=''
    fetch(configdgv.endpoint).then(res=>res.json()).then(res=>{
        res.map(el=>{ 
            const dadosArr = [el.id, el.produto, el.marca, el.modelo, ""]

            const divlinha = document.createElement('div')
            divlinha.setAttribute('class','dgvlinha')
            dgvDados.appendChild(divlinha)
            
            for(let cont=0; cont<5; cont++){
                const divDados = document.createElement('div')
                divDados.setAttribute('class',`coluna c${cont+1}`)
                divDados.innerHTML= dadosArr[cont]
                divlinha.appendChild(divDados)

                if (cont === 4) {
                    const imgDelete =document.createElement('img')
                    imgDelete.setAttribute('class','dgvIcone')
                    imgDelete.setAttribute('src','trash.svg')
                    imgDelete.addEventListener('click',(evt)=>{
                        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                        const endpoint = 'produtos.json'
                        fetch(endpoint).then(res=> res.json()).then(res=>{
                            res.map((el, i)=>{
                                if (el.id == id) {
                                    res.splice(id-1,1)
                                    console.log(res);
                                }
                            })
                        })
                    })
                    divDados.appendChild(imgDelete)

                    const imgEdit =document.createElement('img')
                    imgEdit.setAttribute('class','dgvIcone')
                    imgEdit.setAttribute('src','pencil.svg')
                    divDados.appendChild(imgEdit)

                    const imgView =document.createElement('img')
                    imgView.setAttribute('class','dgvIcone')
                    imgView.setAttribute('src','eye.svg')
                    divDados.appendChild(imgView)
                }
            }  
        })
    })
}

dgv(configdgv)
