const objetos = document.querySelector('#objetos')

const computador = {
    cpu: '',
    ram: '',
    hd: '',
    info:function(){
        console.log(`CPU: ${this.cpu}\nRAM: ${this.ram}\nHD: ${this.hd}`)
    }
}

computador['monitor']='22pol'
computador.placaVideo = 'RTX-9040'
delete(computador.hd)

const c1 = Object.assign({}, computador)
c1.info()

const c2 = Object.create(computador)
c2.cpu= 'i9'
c2.ram= '64gb'
c2.hd= '4tb'
c2.info()

const o1 = {obj1: 1}
const o2 = {obj2: 2}
const o3 = {obj3: 3}
const o4 = Object.assign(o1,o2,o3)

console.log(o4);

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

// computadores.map((el)=>{
//     console.log(el);
//     const div = document.createElement('div')
//     div.innerHTML= `CPU: ${el.cpu}<br/>RAM: ${el.ram}<br/>HD: ${el.hd}`
//     div.setAttribute('class','computador')
//     objetos.appendChild(div)
// })

// console.log(computadores);
// objetos.innerHTML = JSON.stringify(computadores)
// console.log(computador.info());