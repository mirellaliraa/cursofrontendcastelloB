// 1. Verificação de idade
var prompt = (prompt-sync)();
var idade = prompt(("Informe sua idade: "));

if (idade < 18) {
    console.log("Menor de idade")
} else if{
    (idade < 60)
}

// 2. Tabuada
var tabuada = Number(input("Digite a tabuada que quer: "))
for(let i = 0; i<=10 ; i++){
    console.log(`${tabuada} x ` + i +" = "+(i*tabuada))
}

//3. Verificação de Números Pares

var prompt = require("prompt-sync")();
for(let i ; i<20 ; i++){
    //imprimir nº pares
    let resto = (i%2);
    if(resto == 0){
        console.log(i);
    }
};