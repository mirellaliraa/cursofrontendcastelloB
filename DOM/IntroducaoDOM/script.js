// Script de manipulação DOM

// getElementById -> variável simples
let titulo = document.getElementById("titulo"); //html -> id
console.log(titulo); // mostra no console as informações do id
titulo.innerText = "Outro título"; // modifica o conteúdo da id

// getElementByTagName -> variável Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); // html -> "p"
// modificar elemento
paragrafo[0].innerText = "Exemplo de parágrafo modificado por DOM";
// modificar style do elemento
paragrafo[2].style.color = "red"

//getElementByClassName -> varíavel Vetor(Array)
let descricao = document.getElementsByClassName("descricao")
for (let i = 0; i < descricao.length; i++) {
    descricao[i].style.color = 'blue';
}

//querySelector -> variável simples -> seleciona o 1° 
let p = document.querySelector("p");
//modificação de fonte
p.style.fontWeight = "bold";

//querySelectorAll -> variável Vetor(Array) -> Seleciona todos
let descricaoAll = document.querySelectorAll(".descricao")
descricao.forEach(element => {
    element.style.fontWeight = "bold";
});

// eventos listener

function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

// chamando direto no script o ouvinte
document.getElementById("BtnColor").addEventListener("click", OutraCor)

function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}