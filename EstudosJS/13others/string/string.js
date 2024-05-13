let nome= new String('eve Gato')
let nome2= new String('eve Gata')
let animal= new String('gato')

console.log(typeof(nome));

console.log(nome.charAt(1));
console.log(nome.charAt(0));

console.log(nome.charCodeAt(1));   

console.log(nome.concat(animal));  

console.log(nome.indexOf('ato'));

console.log(nome.lastIndexOf('eve'));

console.log(nome.localeCompare(nome2));

console.log(nome.replace('eve', 'mia'));

console.log(nome.search('Gato'));

console.log(nome.slice(1,5));

let arr = nome.split(' ')
console.log(arr);

let parte1 = nome.substring(4,8)
console.log(parte1);

let parte2 = nome.substr(4,8)
console.log(parte2);

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.toLocaleUpperCase());

console.log(nome.valueOf());

let num = 10
console.log(typeof(num.toString()));

// console.clear()
console.log(nome.startsWith('eve'));
console.log(nome.endsWith('Gato'));
console.log(nome.includes('e Gat'));

console.log(nome.repeat(3));

console.log(nome.charCodeAt(1));

console.log(String.fromCodePoint(101,118,101,32));