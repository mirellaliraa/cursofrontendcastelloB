// script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;

let perguntasElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

// carregar as perguntas do Arquivo Json
fetch("perguntas.json").then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPergunta();
}).catch(error => console.error("Erro ao carregar perguntas: ", error));

// criar a função para carregar as perguntas no Html
function carregarPerguntas(){
    
}