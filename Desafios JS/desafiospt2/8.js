let numberWinner = Math.floor(Math.random() * (20 - 10) + 10)

function percentage(number1, number2) {

    let percentage01 = number1 * (number2 / 100)
    let result = number1 - percentage01
    return result

}

function sale(name, amount, firstpurchase, cashpayment) {

    if (firstpurchase && cashpayment && amount > 1000) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 30% e ficou por APENAS: ${percentage(amount, 30)}`)
    }
    else if (firstpurchase && cashpayment && amount > 500 < 1000) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 25% e ficou por APENAS: ${percentage(amount, 25)}`)
    }
    if (firstpurchase && cashpayment && amount < 500) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 20% e ficou por APENAS: ${percentage(amount, 20)}`)
    }
    else if (firstpurchase && !cashpayment && amount > 1000) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 20% e ficou por APENAS: ${percentage(amount, 20)}`)
    }
    if (firstpurchase && !cashpayment && amount > 500 < 1000) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 15% e ficou por APENAS: ${percentage(amount, 15)}`)
    }
    else if (firstpurchase && !cashpayment && amount < 500) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor2 de: R$ ${amount} que saiu com desconto de 10% e ficou por APENAS: ${percentage(amount, 10)}`)
    }
    if (!firstpurchase && cashpayment && amount > 1000) {
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 20% e ficou por APENAS: ${percentage(amount, 20)}`)
    }
    else if(!firstpurchase && cashpayment && amount > 500 < 1000){
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 15% e ficou por APENAS: ${percentage(amount, 15)}`)
    }
    if(!firstpurchase && cashpayment && amount < 500){
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 10% e ficou por APENAS: ${percentage(amount, 10)}`)
    }
    else if(!firstpurchase && !cashpayment && amount > 1000){
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 10% e ficou por APENAS: ${percentage(amount, 10)}`)
    }
    if (!firstpurchase && !cashpayment && amount < 1000 > 500){
        console.log(`Olá ${name}, obrigada pela sua compra no valor de: R$ ${amount} que saiu com desconto de 5% e ficou por APENAS: ${percentage(amount, 5)}`)
    }
    else if(!firstpurchase && !cashpayment && amount < 500){
        console.log(`Olá ${name}, infelizmente nessa compra você não conseguiu nenhum desconto, mas na sua proxima compra, você irá receber ${numberWinner} % de desconto `)
    }
}

sale("Gabriel", 100, true , false)
