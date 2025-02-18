// tipos de operações

// operações aritméticos (+,-,*,/,%)
var a = 10;
var b = 3;

console.log("Soma: "+ (a+b));
console.log("Subtração: "+ (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: "+ (a/b));
console.log("Resto: "+ (a%b));

// Operadores Relacionais (>,>=,<,<=,==,===)
//true ou false
var a = 10;
var b = 20;
var c = "10";

console.log = ("Relacionais: "+ (a>b)); // false
console.log = ("Igualdade simples: "+ (a==c)); // true
console.log = ("Igualdade estrita: "+ (a===c)); // false

// Operadores lógicos (&& - E, || - OU, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: "+ nota1>7 && nota2>7); //false
console.log("Aprovação: "+ nota1>7 || nota2>7); //false
console.log(!false); //true
