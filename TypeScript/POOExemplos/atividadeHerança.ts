class Veiculo{
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo(){
        return console.log(`Informações do veiculo: Marca ${this.marca}, Modelo ${this.modelo}, ano ${this.ano}`);
    }

}
class Carro extends Veiculo{
    numeroDePortas:number;

     constructor(
         marca:string,
         modelo:string,
         ano:number,
         nummeroDePortas:number
     ){
         super(marca, modelo, ano);
         this.numeroDePortas = nummeroDePortas;
     }
     exibirInfo(){
        return console.log(`Informações do veiculo: Marca ${this.marca}, Modelo ${this.modelo}, ano ${this.ano}, numero de portas ${this.numeroDePortas}`);
    }

}

class Moto extends Veiculo{
    tipoDeGuidao:string;

    constructor(
        marca:string,
         modelo:string,
         ano:number,
         tipoDeGuidao:string
    ){
        super(marca, modelo, ano);
        this.tipoDeGuidao = tipoDeGuidao;
    }
    exibirInfo(){
        return console.log(`Informações do veiculo: Marca ${this.marca}, Modelo ${this.modelo}, ano${this.ano}, tipo de gidão ${this.tipoDeGuidao}`);
    }
}

const carro = new Carro("VW","Gol",2020, 4);
const moto = new Moto("Honda","twister",2021,"Reto");

carro.exibirInfo();
moto.exibirInfo();
