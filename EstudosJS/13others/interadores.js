// Array
// Map
// Sets
// Strings

const valores = [10,8,12,9]
const it_valores = valores[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next().done )
console.log(it_valores.next().done )
console.log(it_valores.next().done )
console.log(it_valores.next().done )
console.log(it_valores.next().done )