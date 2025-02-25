// manipulação de String (Cadeia de Caracteres)

let texto = "Aula de Javascript";

//contar os caracteres da variável

console.log(texto.length); //18

// MAIÚSCULAS e minúsculas

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// partes da String

console.log(texto.substring(0,4)); // Aula
console.log(texto.slice(-10)); // Javascript

// substituição de parte da String
let texto2 = texto.replace("Java","Type"); // Aula de TypeScript
console.log(texto2);

// tesoura(Trim)
let texto3 = "  JavaScript  ";
console.log(texto3);
console.log(texto3.trim());

// separação de String
let linguagens = "Javascript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

// desafio
//contar a quantidade de caracteres sem espaço
let desafio = "Bom dia com muita alegria";
let solucaoDesafio = desafio.replaceAll(" ","");
console.log(desafio);
console.log(solucaoDesafio)
console.log(desafio.length);
console.log(solucaoDesafio.length);