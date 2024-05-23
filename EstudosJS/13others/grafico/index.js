// document.addEventListener('DOMContentLoaded', (evt)=>{ //pincel canvas
    
//     const pincel ={
//         ativo: false,
//         movendo: false,
//         pos: { x:0, y:0 },
//         posAnterior: null
//     }

    
//     const tela = document.querySelector('#grafico')
//     const contexto = tela.getContext('2d')

    
//     tela.width = 500
//     tela.height = 500
    
//     contexto.lineWidth = 1
//     contexto.strokeStyle = 'blue'

//     const desenharLinha =(linha)=>{
//         contexto.beginPath()
//         contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y)
//         contexto.lineTo(linha.pos.x, linha.pos.y)
//         contexto.stroke()
//     }

//     tela.onmousedown = ()=> { pincel.ativo = true }
//     tela.onmouseup = ()=> { pincel.ativo = false }

//     tela.onmousemove = (evt)=> {
//         pincel.pos.x = evt.clientX
//         pincel.pos.y = evt.clientY
//         pincel.movendo = true
//     }

//     const ciclo = ()=>{
//         if (pincel.ativo && pincel.movendo && pincel.posAnterior) {
//             desenharLinha({ pos:pincel.pos, posAnterior:pincel.posAnterior })
//             pincel.movendo = false
//         }
//         pincel.posAnterior ={ x:pincel.pos.x,y:pincel.pos.y }

//         setTimeout(ciclo, 10)
//     }
//     ciclo()
// })