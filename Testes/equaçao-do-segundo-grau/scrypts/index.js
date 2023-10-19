function rodar() {
    const val = {
        A: Number(document.getElementById('valorA').value),
        B: Number(document.getElementById('valorB').value),
        C: Number(document.getElementById('valorC').value),
        Del: 0,
        X1: 0,
        X2: 0
    }
    val.Del = val.B**2 - 4*val.A*val.C
    if (val.Del < 0) {
        saida.innerHTML = 'Valor de Delta negativo imposivel continuar'
    } else {
        val.X1 = (-val.B + Math.sqrt(val.Del))/(2*val.A)
        val.X2 = (-val.B - Math.sqrt(val.Del))/(2*val.A)


        let saida = document.getElementById('saida')
        saida.innerHTML = `A: ${val.A} B: ${val.B} C: ${val.C} Delta: ${val.Del} X1: ${val.X1} X2: ${val.X2}`
    }
}
