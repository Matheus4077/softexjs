class Animal{
    nome:string;
    som:string;

constructor(nome:string, som:string){
        this.nome = nome;
        this.som = som;
    }
fazerSom(){
    return this.som

}

}

const cachorro = new Animal("Cachorro","au-au-au-au")
const gato = new Animal("Gato","miau-miau-miau")

console.log(`O animal é ${cachorro.nome} e ele faz ${cachorro.fazerSom()}`)
console.log(`O animal é ${gato.nome} e ele faz ${gato.fazerSom()}`)