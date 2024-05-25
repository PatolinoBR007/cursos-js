class Cxmsg{
    titulo = null
    texto=null
    cor=null
    destino=null
    divmsg=null
    constructor(config){
        this.destino=document.body
        this.cor= config.cor
    }
    mostrar=(titulo, texto)=>{
        this.titulo = titulo
        this.texto= texto

        this.divmsg=document.createElement('div')
        const estilo_divmsg =
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute('id','divmsg')    
        this.divmsg.setAttribute('style',estilo_divmsg)
        this.destino.prepend(this.divmsg)
        
        
        const areaCxMsg=document.createElement('div')
        const estilo_areaCxMsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px"
        areaCxMsg.setAttribute('style', estilo_areaCxMsg)
        this.divmsg.appendChild(areaCxMsg)
        
        const tituloCxMsg=document.createElement('div')
        const estilo_tituloCxMsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            `background-color: ${this.cor};`+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        tituloCxMsg.setAttribute('style', estilo_tituloCxMsg)
        areaCxMsg.appendChild(tituloCxMsg)
        tituloCxMsg.innerHTML = this.titulo
        
        const corpoCxMsg=document.createElement('div')
        const estilo_corpoCxMsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
        corpoCxMsg.setAttribute('style', estilo_corpoCxMsg)
        areaCxMsg.appendChild(corpoCxMsg)
        corpoCxMsg.innerHTML = this.texto
        
        const rodapeCxMsg=document.createElement('div')
        const estilo_rodapeCxMsg=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            `background-color: #ccc;`+
            "color: #000;"+
            "padding: 10px;"+
            "border-radius: 0px 0px 5px 5px;"
        rodapeCxMsg.setAttribute('style', estilo_rodapeCxMsg)
        areaCxMsg.appendChild(rodapeCxMsg)
        
        const btn_ok = document.createElement('button')
        const estilo_btn_ok =
            `background-color: ${this.cor};`+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"
        btn_ok.setAttribute("style", estilo_btn_ok)    
        btn_ok.innerHTML='OK'
        btn_ok.addEventListener('click',(evt)=>{
            this.ocultar()
        })
        rodapeCxMsg.appendChild(btn_ok)
    }
    ocultar=()=>{
        this.divmsg.remove()
    }
}