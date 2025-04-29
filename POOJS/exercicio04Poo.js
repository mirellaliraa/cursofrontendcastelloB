class Funcionario{
    #nome
    #cargo
    #salario

    constructor(nome, cargo, salario){
        this.#nome = nome;
        this.#cargo = cargo;
        this.#salario = salario;
    }

    aumentarSalario(percentagem){
        if(percentagem > 0){
            this.#salario += this.#salario *(percentagem/100);
            console.log(`Aumento de ${percentagem}% concedido`);
        }else{
            console.log("Percentagem inválida");
        }
    }

    set setCargo(cargo){
        this.#cargo = cargo;
    }
    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Cargo: ${this.#cargo}, Salário: R$ ${this.#salario}`);
    }
}

let funcionario1 = new Funcionario("Maria", "Gerente", 5000);
funcionario1.exibirInfo();
funcionario1.setCargo = "Diretora";
funcionario1.aumentarSalario(30);
funcionario1.exibirInfo();