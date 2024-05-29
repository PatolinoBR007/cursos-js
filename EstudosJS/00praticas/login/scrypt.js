import { Login } from "./login.js";
import { Cxmsg } from "../../13others/topo/cxmsg.js"

document.querySelector('#btn_exe').addEventListener('click',()=>{Login.login()})

const callback_ok=()=>{
    Cxmsg.mostrar({cor: '#00008d', tipo:'ok'},'Login concluido','Agora você pode aproveitar nossa pagina.')

}

const callback_not_ok=()=>{
    Cxmsg.mostrar({cor: '#00008d', tipo:'ok'},'Login não concluido','Nome de usuario ou senha estão incorretos.')
}

Login.login(callback_ok,callback_not_ok)