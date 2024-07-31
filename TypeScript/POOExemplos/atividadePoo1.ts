class Pessoa {
    nome: string;
    idade: number;

    constructor (nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    mostrarAll(){
       return `Olá ${this.nome} você tem ${this.idade}`;
    }
}

const pessoa1 = new Pessoa("Matheus",25)

console.log(pessoa1.mostrarAll())