class Aluno{
    #nome
    #notas

    constructor(nome, notas){
        this.#nome = nome;
        this.#notas = notas;
    }

    adicionarNota(nota){ 
        this.#notas.push(nota);
        console.log(`Nota ${nota} adicionada!`);
    }

    calcularMedia(){
        if (this.#notas.length > 0) {
            const soma = this.#notas.reduce((total, nota) => total + nota, 0);
            const media = soma / this.#notas.length;
            console.log(`A média do aluno é ${media.toFixed(2)}`);
            return media;
        } else {
            console.log("Erro ao calcular média");
            return 0;
        }
    }

    situacao(){
        const media = this.calcularMedia();
        if (media >= 7) {
            console.log("Aprovado!");
        } else if (media < 7) {
            console.log("Recuperação!");
        } else {
            console.log("Reprovado!");
        }
    }
}

let aluno = new Aluno("João", [8, 7, 9]);
console.log(`Média: ${aluno.calcularMedia()}`); 
aluno.adicionarNota(8);
console.log(`Média: ${aluno.calcularMedia()}`); 