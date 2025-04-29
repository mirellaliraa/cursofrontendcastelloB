class ContaBancaria{
    #titular
    #saldo

    constructor(titular, saldo){
        this.#titular = titular;
        this.#saldo = 0;
    }

    depositar(valor){
        if(valor > 0){
        this.#saldo += valor;
        console.log(`Valor depositado, valor atual: ${valor}`);
        }else{
            console.log(`Valor inválido`);
        }
    }
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log("Saque realizado com sucesso");
        }else if(valor > this.#saldo){
            console.log('Saldo insuficiente');
        } else{
            console.log("Valor inválido");
        }
    }

    exibirSaldo(){
        console.log(`Titular: ${this.#titular}, Saldo: ${this.#saldo}`);
    }
}

let conta1 = new ContaBancaria("Sabrina");
conta1.depositar (1000);
conta1.exibirSaldo();
conta1.sacar(500);
conta1.exibirSaldo();
