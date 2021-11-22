//[x] Crie 5 objetos nesse formato
//{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.


let person1 = {
    name: 'Gabriel',
    age: 22 ,
    sex: 'Male',
    profession: 'Students',
    nationality:'Brazilian',
};
let person2 = {
    name: 'Renata',
    age: 40 ,
    sex: 'Female',
    profession: 'Development',
    nationality:'Russian',
};
let person3 = {
    name: 'Leandro',
    age: 13 ,
    sex: 'Male',
    profession: 'Students',
    nationality:'Austrian',
};
let person4 = {
    name: 'Milena',
    age: 20,
    sex: 'Female',
    profession: 'Students',
    nationality:'Brazilian',
};
let person5 = {
    name: 'Ademir',
    age: 70,
    sex: 'Male',
    profession: 'Manager',
    nationality:'Brazilian',
};


if(person1.age >= 18 && person1.nationality === 'Brazilian'){
    console.log('Você foi Aprovado!')
}else {
    console.log('Você NÃO foi Aprovado!')
}

if(person2.age >= 18 && person2.nationality === 'Brazilian'){
    console.log('Você foi Aprovado!')
}else {
    console.log('Você NÃO foi Aprovado!')
}

if(person3.age >= 18 && person3.nationality === 'Brazilian'){
    console.log('Você foi Aprovado!')
}else {
    console.log('Você NÃO foi Aprovado!')
}

if(person4.age >= 18 && person4.nationality === 'Brazilian'){
    console.log('Você foi Aprovado!')
}else {
    console.log('Você NÃO foi Aprovado!')
}

if(person5.age >= 18 && person5.nationality === 'Brazilian'){
    console.log('Você foi Aprovado!')
}else {
    console.log('Você NÃO foi Aprovado!')
}