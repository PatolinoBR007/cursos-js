let val = [6, 2, 7, 3, 8, 4]
/*
for (let pos=0; pos < val.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
*/
for (let pos in val){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
