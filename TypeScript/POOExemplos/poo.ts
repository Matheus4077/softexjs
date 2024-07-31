class Produto{
    //Atributos da calss
    cod: number;
    tamanho: number;
    peso: number;
    marca: string;
    nome: string;
    cor: string;
    //Construtor da calss 
constructor(cod: number, tamanho: number, peso: number, marca: string, nome: string, cor: string){
    this.cod = cod;
    this.tamanho = tamanho;
    this.peso = peso;
    this.marca = marca;
    this.nome = nome;
    this.cor = cor
}

mostrarNome(){
    return this.nome;
}

}

const produto1 = new Produto(1,3,4,"vans","Tenis da Vans","preto");

console.log(`o nome do produto é ${produto1.nome}`)
console.log(produto1.mostrarNome())