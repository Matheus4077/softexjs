abstract class Animal{

    emitirSom(): void{
        console.log("Fazendo som");
    }

    mover():void{
        console.log("O animal está se movendo");
    }
}

class Cachorro extends Animal{}
class Gato extends Animal{}

const cachorro = new Cachorro();

cachorro.mover();
cachorro.emitirSom();