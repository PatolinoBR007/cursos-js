class Login{
    static logado=false
    static matlogado=null
    static nomelogado=null
    static acessologado=null
    static estiloCss=null
    static callback_ok=null
    static callback_not_ok=null
    static endpoint='https://9e15c086-d340-486a-b4c8-d66fac700f3c-00-v65qbwsh9e4j.kirk.replit.dev/'
    static config={
        cor:"#00008d",
        img:"../../../zoe.jpg"
    }

    static login=(callback_ok,callback_not_ok,config=null)=>{
        if (config!=null) {
            this.config=config
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_not_ok=()=>{callback_not_ok()}
        this.estiloCss=
        ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;left: 0px;top: 0px;background-color: #000000bf}"+
            ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 90%;}"+
            ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 7px 0px 0px 7px;box-sizing: inherit}"+
            ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;border-radius: 0px 7px 7px 0px;box-sizing: inherit;overflow: hidden;}"+
            ".logoLogin img{width: 100%;box-sizing: inherit;}"+
            ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit}"+
            ".campoLogin label{font-size: 1.2em;}"+
            ".campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;margin-bottom: 10px;width: 100%}"+
            ".bottoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit}"+
            `.bottoesLogin button{cursor: pointer;background-color: ${this.config.cor};color: #fff;padding: 5px;width: 70px;border-radius: 5px;box-sizing: inherit;}`
        const styleEstilo = document.createElement('style')
        styleEstilo.setAttribute('id','estilo_login')
        styleEstilo.setAttribute('rel','stylesheet')
        styleEstilo.setAttribute('type','text/css')
        styleEstilo.innerHTML=this.estiloCss
        document.head.appendChild(styleEstilo)

        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute('id','fundoLogin')
        fundoLogin.setAttribute('class','fundoLogin')
        document.body.prepend(fundoLogin)

        const baseLogin = document.createElement('div')
        baseLogin.setAttribute('id','baseLogin')
        baseLogin.setAttribute('class','baseLogin')
        fundoLogin.prepend(baseLogin)
        
        const elementosLogin = document.createElement('div')
        elementosLogin.setAttribute('id','elementosLogin')
        elementosLogin.setAttribute('class','elementosLogin')
        baseLogin.appendChild(elementosLogin)
        
        const campoLogin1 = document.createElement('div')
        campoLogin1.setAttribute('class','campoLogin')
        elementosLogin.appendChild(campoLogin1)
        
        const label_iuser = document.createElement('label')
        label_iuser.setAttribute('for','iuser')
        label_iuser.innerHTML = 'Username'
        campoLogin1.appendChild(label_iuser)

        const input_iuser = document.createElement('input')
        input_iuser.setAttribute('type','text')
        input_iuser.setAttribute('name','iuser')
        input_iuser.setAttribute('id','iuser')
        campoLogin1.appendChild(input_iuser)
        
        const campoLogin2 = document.createElement('div')
        campoLogin2.setAttribute('class','campoLogin')
        elementosLogin.appendChild(campoLogin2)
        
        const label_ipass = document.createElement('label')
        label_ipass.setAttribute('for','ipass')
        label_ipass.innerHTML = 'Password'
        campoLogin2.appendChild(label_ipass)

        const input_ipass = document.createElement('input')
        input_ipass.setAttribute('type','password')
        input_ipass.setAttribute('name','ipass')
        input_ipass.setAttribute('id','ipass')
        campoLogin2.appendChild(input_ipass)
        
        const bottoesLogin = document.createElement('div')
        bottoesLogin.setAttribute('class','bottoesLogin')
        elementosLogin.appendChild(bottoesLogin)
        
        const btn_login = document.createElement('button')
        btn_login.setAttribute('id','btn_login')
        btn_login.innerHTML = 'Login'
        btn_login.addEventListener('click',(evt)=>{
            this.verificaLogin()
        })
        bottoesLogin.appendChild(btn_login)
        
        const btn_cancelar = document.createElement('button')
        btn_cancelar.setAttribute('id','btn_login')
        btn_cancelar.innerHTML = 'Cancelar'
        btn_cancelar.addEventListener('click',this.fechar)
        bottoesLogin.appendChild(btn_cancelar)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('id','logoLogin')
        logoLogin.setAttribute('class','logoLogin')
        baseLogin.appendChild(logoLogin)
        
        const img = document.createElement('img')
        img.setAttribute('src',this.config.img)
        img.setAttribute('alt','logo')
        logoLogin.appendChild(img)
    }
    
    static verificaLogin=()=>{
        const mat=document.querySelector('#iuser').value
        const pas=document.querySelector('#ipass').value
        
        const endpoint = `https://9e15c086-d340-486a-b4c8-d66fac700f3c-00-v65qbwsh9e4j.kirk.replit.dev/?matricula=${mat}&senha=${pas}`

        fetch(endpoint).then(res=>res.json()).then(res=>{
            if (res) {
                this.logado=true
                this.matlogado=mat
                this.nomelogado=res.nome
                this.acessologado=res.acesso
                console.log(res);
                this.callback_ok()
                this.fechar()
            } else {
                this.logado=false
                this.matlogado=null
                this.nomelogado=null
                this.acessologado=null
                this.callback_not_ok()
            }
        })
    }

    static fechar =()=>{
        const fundoLogin = document.querySelector('#fundoLogin')
        const estilo_login = document.querySelector('#estilo_login')
        fundoLogin.remove()
        estilo_login.remove()
    }
}
export {Login}