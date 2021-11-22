const people = [
    {
        numberOfChildren: 2,
        salary: 3400
    },
    {
        numberOfChildren: 0,
        salary: 5000
    },
    {
        numberOfChildren: 5,
        salary: 13400
    },
    {
        numberOfChildren: 1,
        salary: 1200
    },
    {
        numberOfChildren: 3,
        salary: 10000
    },
    {
        numberOfChildren: 2,
        salary: 3500
    },
    {
        numberOfChildren: 5,
        salary: 23456
    },
    {
        numberOfChildren: 0,
        salary: 3400
    },
    {
        numberOfChildren: 2,
        salary: 4400
    },
    {
        numberOfChildren: 1,
        salary: 7400
    },
    {
        numberOfChildren: 7,
        salary: -500
    },
]

function findAverageAndHighestSalary(peopleInformation) {
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i < peopleInformation.length; i++) {

        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i ).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i ).toFixed(0)}`)
            console.log(`Maior salário R$${highestSalary}`)
            break
        } else {
            averageSalary = averageSalary + salary;
            averageChildren += children
        }
    }
}

findAverageAndHighestSalary(people)

