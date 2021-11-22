function calculate(valorIncial, valorAtual, tempo) {
    
    const juros = (valorAtual - valorIncial) / (valorIncial * tempo)

    console.log((juros * 100).toFixed(2) + '%')

}


calculate(1000, 1200, 10)