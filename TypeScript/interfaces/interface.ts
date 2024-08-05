//API
interface Pessoa{
    nome: string;
    idade: number;
    altura?: number;
    peso?: number;
}

const pessoa1:Pessoa = {
    nome:"aluno",
    idade: 25,
}

const pessoa2:Pessoa = {
    nome:"aluna",
    idade: 22,
    altura: 1.60,
    peso: 60
}