interface Person{
    name:string;
    age:number;
}

function sayHello(person:Person):string{
    return `Olá ${person.name} você tem ${person.age} anos de idade`;
}

const pessoa:Person = {name:'Matheus', age:25}

console.log(sayHello(pessoa))