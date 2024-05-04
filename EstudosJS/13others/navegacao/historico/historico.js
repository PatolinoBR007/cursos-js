const url = document.querySelector('#url') 
const btn_url = document.querySelector('#btn_url') 

btn_url.addEventListener('click',(evt)=>{
    // window.location='https://github.com/PatolinoBR007/'
    // window.location.replace('https://github.com/PatolinoBR007/')
    // window.location.assign('https://github.com/PatolinoBR007/')
    // window.location.reload()
    // window.history.forward()
    console.log(window.history.length);  
    window.location=url.value
})