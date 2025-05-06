class ContaBancaria{
    #titular
    #saldo

    constructor(titular, saldo = 0){
        this.#titular = titular;
        this.#saldo = saldo;
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado!`);
        }else{
            console.log("Valor inválido para depósito");
        }
    }
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado!`);
        }else{
            console.log("Valor inválido");
        }
    }
    consultarSaldo(){
        console.log(`Titular: ${this.#titular}, Saldo: R$${this.#saldo}`);
    }
}

let conta = new ContaBancaria("Rayssa", 1200);
conta.depositar(100);
conta.consultarSaldo();
conta.sacar(50);
conta.consultarSaldo();