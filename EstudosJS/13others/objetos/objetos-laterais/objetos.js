const objetos = document.querySelector('#objetos')

const computador = {
    cpu: 'i9',
    ram: '64gb',
    hd: '2tb',
    info:function(){
        console.log(`CPU: ${this.cpu}\nRAM: ${this.ram}\nHD: ${this.hd}`)
    }
}

computador['monitor']='22pol'
computador.placaVideo = 'RTX-9040'

console.log(computador.cpu);

const computadores = [
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '32gb',
        hd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1tb'
    }
]

computadores.map((el)=>{
    console.log(el);
    const div = document.createElement('div')
    div.innerHTML= `CPU: ${el.cpu}<br/>RAM: ${el.ram}<br/>HD: ${el.hd}`
    div.setAttribute('class','computador')
    objetos.appendChild(div)
})

// console.log(computadores);
// objetos.innerHTML = JSON.stringify(computadores)
// console.log(computador.info());