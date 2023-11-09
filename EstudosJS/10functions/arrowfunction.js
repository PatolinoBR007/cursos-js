// const funcao = () => "Uma expressão de Função";

// funcao()


// const thisGlobal = () => {
//     console.log(this)
// }

// thisGlobal()


const obj = {
    thisLocal: function() {
        const thisLocal = (() => console.log(this))()
        console.log(thisLocal)
    }
}
obj.thisLocal()