import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome: string = "";
  email: string = "";
  telefone: string = "";
  idade: number|null = null;
  profissao: string = "";

  limparDados(){
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.idade = null;
    this.profissao = "";
  }

  validarDados(){
    const erros: string[] = [];

    if(this.nome.trim().length < 3) {
      erros.push("Nome inválido");
    }

    if(!this.email.includes("@")){
      erros.push("Email inválido");
    }
    if(!this.telefone.trim()){
      erros.push("Telefone inválido");
    }
    if(this.idade === null || this.idade < 18){
      erros.push("Idade inválida");
    }
    if(!this.profissao.trim()){
      erros.push("Profissão inválida");
    }

    if(erros.length > 0){
      alert("Erros no formulário:\n"+erros.join("\n"));
      return;
    } else{
      alert("Formulário enviado com sucesso!"); 
      this.limparDados();
    }
  }
}

