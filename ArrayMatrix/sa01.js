// criar um programa que receba varias notas e calcule a média
const prompt = require("prompt-sync")();

let vetorNotas = [];

let contator = 0;
let continuar = true;
while (continuar) {
    console.log("1. Digitar nova nota");
    console.log("2. Calcular média");
    console.log("3. Sair");
    let operacao = prompt("Escolha a opção desejada: ")
    switch (operacao) {
        case "1":
            contator++;
            let nota = Number(prompt("Digite a nota do aluno: "));
            vetorNotas.push(nota);
            break;

        case "2":
            let media = vetorNotas.reduce((x,y) => x+y)/contator;
            console.log("A média da sala é "+media)
            break;
        
        case "3":
            continuar = false;
            break;
        default:
            break;
    }
}