const body = document.body

const estilotopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: rgb(70, 22, 114);"

const topo = document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('style',estilotopo)
body.prepend(topo)

const estilo_img_logo = "width: 100px;"

const logo = 
    "<div id='logo' class='logo' style="+estilo_img_logo+" >"+
      `<img style='${estilo_img_logo}' src='/zoe.jpg'/>`+
    "</div>"
topo.innerHTML+=logo
    
const login =
    "<div id='login' class='login' style='color: #fff; margin-right: 30px;'>"+
      "<p id='matricula'>Matricula: <span></span></p>"+
      "<p id='nome'>Nome: <span></span></p>"+
    "</div>"
topo.innerHTML += login