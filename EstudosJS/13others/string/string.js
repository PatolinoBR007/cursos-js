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