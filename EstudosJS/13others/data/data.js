const data = new Date()

// console.log(Date.now())

// console.log(data)
// console.log(data.getDate())
// console.log(data.getDay())
// console.log(data.getFullYear())
// console.log(data.getHours())
// console.log(data.getMilliseconds())
// console.log(data.getMinutes())
// console.log(data.getMonth())
// console.log(data.getSeconds())
// console.log(data.getTime())
// console.log(data.getTimezoneOffset())
// console.log(data.toDateString())

let dia_m = data.getDate()
dia_m=dia_m<10?'0'+dia_m:dia_m

let mes = data.getMonth()
mes=mes<10?'0'+mes:mes

const data_r = dia_m+'/'+mes+'/'+data.getFullYear()

console.log(data_r);

let clock = '00:00:00'

console.log(clock);
