console.log('ANTES')
setTimeout(() => {
    console.log('testando settimeout')
}, 2000);
console.log('depois')


setInterval(() => {
    console.log('testando setInterval')
}, 5000);