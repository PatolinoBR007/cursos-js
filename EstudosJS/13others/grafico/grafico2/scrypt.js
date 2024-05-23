const  endpoint = 'https://e7f09299-4547-4c96-91fd-f1a6406946c7-00-2h962yd1dzv3i.picard.replit.dev/'

let dados = null




document.addEventListener('DOMContentLoaded',()=>{
    const ctx = document.getElementById('grafico');
    
    let labelsx = ['disponibilidade', 'qualidade', 'performace']
    let datax = [0,0,0]

    let grafico1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsx,
        datasets: [{
          label: '# of Votes',
          data: datax,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const obterDados = ()=>{    
        fetch(endpoint).then(res=> res.json()).then(res=>{
          dados = res
          datax[0]=dados.disponibilidade
          datax[1]=dados.qualidade
          datax[2]=dados.performace
         grafico1.update()
    })}

    let intervalo = setInterval(obterDados,1000   )
})
