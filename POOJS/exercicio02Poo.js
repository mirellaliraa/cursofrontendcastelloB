class Veiculo{
    #marca
    #modelo
    #ano
    constructor(marca, modelo, ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }
}

class Carro extends Veiculo{
    #quantidadePortas
    constructor(marca, modelo, ano, quantidadePortas){
        super(marca, modelo, ano)
        this.#quantidadePortas = quantidadePortas;
    }
    exibirInfo(){
        console.log(`Quantidade de carros: ${this.#quantidadePortas}`);
    }
}

let carro1 = new Veiculo("HB20", "Hyundai", 2017);
carro1.exibirInfo();

let carro2 = new Carro("HB20", "Hyundai", 2017, 4);
carro2.exibirInfo();