// Estrutura de Dados

// Condicionais (If Else / Switch Case)
//if
var precoProduto = 150;
if (precoProduto >= 100){
    console.log("Valor a pagar: "
        +(precoProduto*0.9));
} else{
    console.log("Valor a pagar: "+(precoProduto))
}

//Switch Case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Outro mês");
        break;
}