import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export enum TipoNotificacao {
  Sucesso = 'sucesso',
  Erro = 'erro',
  Aviso = 'aviso'
}

@Injectable({
  providedIn: 'root'
})
export class Notificacao {

  constructor(private snackBar: MatSnackBar) {}

  mostrarMensagem(
    mensagem: string, 
    acao: string = 'Fechar',
    tipo: TipoNotificacao = TipoNotificacao.Sucesso
  ): void {
    this.snackBar.open(mensagem, acao, {
      duration: 3000,
      panelClass: tipo,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  sucesso(mensagem: string, acao: string = 'Fechar'): void {
    this.mostrarMensagem(mensagem, acao, TipoNotificacao.Sucesso);
  }

  erro(mensagem: string, acao: string = 'Fechar'): void {
    this.mostrarMensagem(mensagem, acao, TipoNotificacao.Erro);
  }

  aviso(mensagem: string, acao: string = 'Fechar'): void {
    this.mostrarMensagem(mensagem, acao, TipoNotificacao.Aviso);
  }
}
