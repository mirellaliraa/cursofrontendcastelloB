// 1. pessoa

class Pessoa{
    #nome
    #idade
    #genero


constructor(nome, idade, genero){
    this.#nome = nome;
    this.#idade = idade;
    this.#genero = genero;
}

exibirDados(){
    console.log(`Nome: ${this.#nome}, Idade: ${this.#idade}, Gênero: ${this.#genero}`);
}
}

let pessoa1 = new Pessoa("Kauan", "18", "Masculino");
pessoa1.exibirDados();

// 2. livro

class Livro{
    #titulo
    #autor
    #paginas
    #genero

constructor(titulo, autor, paginas, genero){
    this.#titulo = titulo;
    this.#autor = autor;
    this.#paginas = paginas;
    this.#genero = genero;
}

exibirLivro(){
    console.log(`Titulo: ${this.#titulo}, Autor: ${this.#autor}, Páginas: ${this.#paginas}, Gênero: ${this.#genero}`);
}}

let livro1 = new Livro("O senhor dos anéis", "J.R.R. Tolkien", 1000, "Fantasia");
livro1.exibirLivro();

// 3. calculadora

class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        console.log("Erro: Divisão por zero!");
        return null;
      }
    }
  }
  
 
  console.log("Soma:", Calculadora.somar(15, 5));         
  console.log("Divisão:", Calculadora.dividir(21, 3));    
  console.log("Multiplicação:", Calculadora.multiplicar(4, 2)); 
  