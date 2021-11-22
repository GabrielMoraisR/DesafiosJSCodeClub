//[x] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let number1 = 10 
let number2 = 14
let number3 = 19 

if (number1 > number2 && number1 > number3){
    console.log('O Primeiro número é maior')
}else if (number2 > number1 && number2 > number3){
    console.log('O Segundo número é maior')
}else{
    console.log('O Terceiro número é maior')
}    

if (number1 < number2 && number1 < number3){
    console.log('O Primeiro número é menor')
}else if (number2 < number1 && number2 < number3){
    console.log('O Segundo número é menor')
}else{
    console.log('O Terceiro número é menor')
}    


