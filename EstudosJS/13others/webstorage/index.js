const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener('click', (evt)=>{

})

let num = 10

localStorage.setItem('nome','pato')
localStorage.setItem('curso','JavaScrypt')
localStorage.setItem('idade',20)
localStorage.setItem('numero',num)
localStorage.setItem('numero',33)
// console.log(localStorage.length);
// console.log(localStorage.getItem(localStorage.key(1)));
// alert(localStorage.getItem('numero'))
// localStorage.clear()

sessionStorage.setItem('nome','pato')
sessionStorage.setItem('curso','JavaScrypt')
sessionStorage.setItem('idade',20)
sessionStorage.setItem('numero',num)
sessionStorage.setItem('numero',33)

// sessionStorage.clear()
localStorage.removeItem('numero')