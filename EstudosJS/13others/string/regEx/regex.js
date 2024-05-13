let nome = new String('Eveeeeee Gatooo 1765')
let email = 'mia@mia.com.br'

console.log(nome);

console.log(nome.search(/gato/i)); 

console.log(nome.match(/e/ig)); 

console.log(nome.replace(/e/ig,'Mia'));

console.log(nome.match(/[eo]/ig)); 

console.log(nome.match(/[a-e|g-z|0-9]/ig));

//metacaracteres
console.log(nome.match(/\d/ig)); //numeros
console.log(nome.match(/\s/ig)); //espaços
console.log(nome.match(/\bG/ig)); //caracteres

//quantificadores
console.log(nome.match(/e+|o+/ig));
console.log(nome.match(/ev*/ig));
console.log(nome.match(/ev?/ig));
