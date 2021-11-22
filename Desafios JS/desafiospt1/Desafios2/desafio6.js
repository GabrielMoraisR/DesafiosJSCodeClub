//[x] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

let randomNote = Math.floor(Math.random() * 11+0)
    console.log(randomNote)

    switch (randomNote) {
        case 0:
            console.log('Sai dessa')
        break;
        
        case 1:
            console.log('Você é ruim')
        break;

        case 2:
            console.log('Não vai conseguir')
        break;

        case 3:
            console.log('Desiste logo')
        break;

        case 4:
            console.log('Falta Muito')
        break;

        case 5:
            console.log('Ta na metade do caminho')
        break;

        case 6:
            console.log('Ta chegando')
        break;

        case 7:
            console.log('Continua que ira conseguir')
        break;

        case 8:
            console.log('Parabens , quase la ')
        break;

        case 9:
            console.log('Otimo')
        break;

        case 10:
            console.log('Perfeito !!  Você consegiu')
        break;

        default:
            break;
    }