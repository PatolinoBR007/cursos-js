var val = []
var res = document.getElementById('res')
var lista = document.getElementById('txtm')
function add(){
    if(val.indexOf)
    let n1 = document.getElementById('txtn')
    let n2 = Number(n1.value) 
    val.push(n2)
    let item = document.createElement('opition')
    item.text = `o valor ${n2} foi adicionado`
    lista.appendChild(item)
}
function ent(){ 
   res.innerHTML = `${val}`

}