// Declaração de uma array "[]"
let array = []; // array dinâmico

let arrayNumeros = [1,2,3,4,5,6,7,8,9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arrayMisto = [1,"José",true];

//tamanho de uma array (length)
console.log(arrayNumeros.length); //9

// acessar um elemento da array (index)
console.log(arrayTexto[1]); // posição -1

//adicionar elemntos em uma array
// no começo (unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto);
// no fim (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

//trocar um valor
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

// remover elementos
// no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);
// no final (pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer uma array (laço de repetição) - 
//percorrer o array de números
for (let i = 0; i<arrayNumeros.length;i++){
    console.log("indice["+i+"]="+[arrayNumeros[i]]);
}

//forEach
arrayTexto.forEach(elemento => {
    console.log(elemento)
});

// métodos úteis

// indexof

console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-10 (elementos existentes)

// Splice (remover elementos de uma posição)
arrayMisto.splice(2,1);
console.log(arrayMisto);

// operações avançadas de array
// map - novos valores
let valores = [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

// filter - comparação
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);

// desafio (filtro x<35) && (x*3)
let valorMenor = valores.filter(x => x<35);
console.log(valorMenor);

let valoresTriplo = valores.map(x => x*3);
console.log(valoresTriplo);

// reduce ([] -> let x)
let soma = valores.reduce((x,y) => x+y);
console.log(soma);

//sort (organizar)
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);