const table = (number) => {
    if(number > 10 || number < 1){
        console.log("Aceitamos somente números de 1 e 10")
        return
    }

    for(let i = 1; i <= 10; i++){
        console.log(`${i} X ${number} = ${i * number}`)
    }
}


table(4)