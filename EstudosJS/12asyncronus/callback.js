function exibir(num) {
    console.log(num)
}

function soma(x, y, callback) {
    var op = x + y
    callback(op)
}

function mult(x, y, cb) {
    var op = x * y
    cb(op)
}

soma(2, 2, exibir)

mult(2, 4, exibir)