let x = {
    nome: 'cavalo',
    idade: 189,
    casado: true,
}
console.log(x)

delete x.casado

console.log(x)

function myFunction(a, b) { 
    var c = a + b
    void c
    return void c; 
} 
console.log(myFunction(12, 10));

var y = 10

console.log(y)

void y
console.log(y)
