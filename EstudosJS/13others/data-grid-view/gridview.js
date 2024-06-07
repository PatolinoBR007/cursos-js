const winView = document.querySelector('#winView')
const winEdit = document.querySelector('#winEdit')

const configdgv ={
    endpoint: "http://127.0.0.1:1880/produtos/",
    idDestino: "dgvdados"
}

const dgv =(configdgv)=>{
    const dgvDados =document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML=''
    fetch(configdgv.endpoint).then(res=>res.json()).then(res=>{
        console.log(res);
        res.map(el=>{ 
            const dadosArr = [el.n_id_produto, el.s_nome_produto, el.s_marca_produto, el.s_modelo_produto, ""]

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
                    imgDelete.setAttribute('src','assets/trash.svg')
                    imgDelete.addEventListener('click',(evt)=>{
                        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                        const linha = evt.target.parentNode.parentNode
                        const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`
                        console.log(linha);
                        fetch(endpoint).then(res=> res.json())
                        linha.remove()
                    })
                    divDados.appendChild(imgDelete)

                    const imgEdit =document.createElement('img')
                    imgEdit.setAttribute('class','dgvIcone')
                    imgEdit.setAttribute('src','assets/pencil.svg')
                    imgEdit.addEventListener("click",(evt)=>{
                        winEdit.classList.remove('ocultar')
                        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                        const endpoint = `http://127.0.0.1:1880//updateproduto/${id}/:produto/:marca/:modelo`
                        // fetch(endpoint).then(res=>res.json()).then(res=>{
                        //     document.querySelector('#f_id_editar').value = res[0].n_id_produto
                        //     document.querySelector('#f_prod_editar').value = res[0].s_nome_produto
                        //     document.querySelector('#f_mar_editar').value = res[0].s_marca_produto
                        //     document.querySelector('#f_mod_editar').value = res[0].s_modelo_produto
                        // })
                    })
                    divDados.appendChild(imgEdit)

                    const imgView =document.createElement('img')
                    imgView.setAttribute('class','dgvIcone')
                    imgView.setAttribute('src','assets/eye.svg')
                    imgView.addEventListener('click',(evt)=>{
                        winView.classList.remove('ocultar')
                        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                        const endpoint = `http://127.0.0.1:1880/produto/${id}`
                        fetch(endpoint).then(res=>res.json()).then(res=>{
                            document.querySelector('#f_id').value = res[0].n_id_produto
                            document.querySelector('#f_prod').value = res[0].s_nome_produto
                            document.querySelector('#f_mar').value = res[0].s_marca_produto
                            document.querySelector('#f_mod').value = res[0].s_modelo_produto
                        })  
                    })
                    divDados.appendChild(imgView)
                }
            }  
        })
    })
}

document.querySelector('#btn_fechar').addEventListener('click',(evt)=>{
    winView.classList.add('ocultar')
})

dgv(configdgv)
