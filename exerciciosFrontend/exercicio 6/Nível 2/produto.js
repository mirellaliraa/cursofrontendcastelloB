// classe produto

class Produto {
    #nome
    #preco
    #quantidade

    constructor(nome, preco, quantidade) {
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
    }

    vender(vendidos){
        if (this.#quantidade >= vendidos) {
            this.#quantidade -= vendidos;
            console.log(`Vendido ${vendidos} produtos!`);
        }
    }

    repor(quantidade){
        this.#quantidade += quantidade;
        console.log(`Reposto ${quantidade} produtos!`);
    }

    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Preço: ${this.#preco}, Quantidade: ${this.#quantidade}`);
    }
}

let produto1 = new Produto("Armário", 1000, 10);
produto1.exibirInfo();
produto1.vender(2);
produto1.exibirInfo();
produto1.repor(3);
produto1.exibirInfo();