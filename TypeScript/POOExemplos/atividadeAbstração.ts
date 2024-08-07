abstract class funcionario{
    nome:string;
    setor:string;


      constructor(nome:string, setor:string){
         this.nome = nome;
         this.setor = setor;
        }


      trabalha():void {
         console.log("Hoje o turno é até as 19:00");
    }   
}
class Zelador extends funcionario{
   limpa():void{
    console.log("Hoje o Zelador tem que limpar o banheiro masculino");
   }
   
}
class RecursosHumanos extends funcionario{
    contratar():void{
        console.log("Hoje é dia de contratação selecione os cincos melhores");
    }
}

const zelador = new Zelador("Hunberto","limpeza");
zelador.nome;
console.log(zelador.nome);
zelador.setor;
console.log(zelador.setor);
zelador.trabalha();
zelador.limpa();


const getenteDoRH = new RecursosHumanos ("Ricardo","RH");
getenteDoRH.nome;
console.log(getenteDoRH.nome);
getenteDoRH.setor;
console.log(getenteDoRH.setor);
getenteDoRH.trabalha();
getenteDoRH.contratar();
