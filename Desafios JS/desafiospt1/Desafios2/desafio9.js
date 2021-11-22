const numberOne = 31
const numberTwo = 31
const numberThree = 23
const numberFour = 63

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0) {
    console.log("Todos são pares")
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0) {
    console.log("Todos são impares")
} else 
console.log("Tudo misturado, ímpares e pares")