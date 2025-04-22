// chamando as cores do html

let luzVermelha = document.getElementById("vermelho");
let luzAmarela = document.getElementById("amarelo");
let luzVerde = document.getElementById("verde");

let gif = document.getElementById("gifAtravessando")
// definindo o intervalo de tempo da transição de cada um
// definindo quando as cores irão acender, por seu estado
let estado = 0;
let intervalo; 

// apagando as luzes do semáforo
function apagarLuzes(){
    luzVermelha.className = "luz";
    luzAmarela.className = "luz";
    luzVerde.className = "luz";
}

// acendendo as luzes vermelho, amarelo e verde

function ligarVermelho() {
  apagarLuzes();
  luzVermelha.classList.add("acesa-vermelho");
}

function ligarAmarelo() {
  apagarLuzes();
  luzAmarela.classList.add("acesa-amarelo");
}

function ligarVerde() {
  apagarLuzes();
  luzVerde.classList.add("acesa-verde");
}

// função de troca da luz

// setinterval: executa outra função de forma repetida em intervalos de tempo definidos. 
// o estado da varíavel começa no 0 e a cada segundo o setInterval verifica o estado, acende a luz correspondente ao número e altera o valor de estado para o próximo número. Assim, quando chega ao 2 ele zera e repete o loop
// vermelho para 1, o próximo será amarelo que é 2, e assim em diante
function trocarLuz() {
    if (estado === 0) {
  ligarVermelho();
  estado = 1;
} else if (estado === 1) {
  ligarAmarelo();
  estado = 2;
} else if (estado === 2) {
  ligarVerde();
  estado = 0;
}
}

function iniciar() {
    trocarLuz(); 
    gif.style.display = "block"; // mostra o gif que antes estava escondido
    // setInterval(funçao, tempo) ou seja, funcao = ligar(cor), tempo: 1000 milissegundos (1 segundo)
  intervalo = setInterval(trocarLuz, 6000) // trocando a cor a cada 1.5 segundos
}
