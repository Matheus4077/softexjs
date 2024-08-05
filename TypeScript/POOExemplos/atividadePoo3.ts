class ContaBancaria {
    tipoDeConta:string;
    saldo:number;

    constructor(tipodeconta:string, saldo:number){
        this.tipoDeConta = tipodeconta;
        this.saldo = saldo;
    }
    depositar(valor: number){
        console.log(`Você depositou ${valor}`)
        return this.saldo += valor;
    }

    sacar(valor: number){
        console.log(`Você sacou ${valor}`)
        return this.saldo -= valor;
    }

    mostrarSaldo(){
        return `o saldo de ${this.tipoDeConta} é ${this.saldo}`
    }

}

const conta = new ContaBancaria ("poupança", 4000)


conta.sacar(1000)
//conta.depositar(2000)
console.log(conta.mostrarSaldo())
