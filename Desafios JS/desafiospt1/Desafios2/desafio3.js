//[x] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let random1 = Math.floor(Math.random() * 10 + 1)
let random2 = Math.floor(Math.random() * 10 + 1)

console.log(random1, random2)

if(random1 === random2){
    console.log('Você Ganhou!')
}else{
    console.log('Você Perdeu!')
}