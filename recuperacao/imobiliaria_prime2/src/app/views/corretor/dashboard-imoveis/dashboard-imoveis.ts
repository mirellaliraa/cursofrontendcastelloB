import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../../core/models/imovel.model';
import { Imoveis } from '../../../core/services/imoveis';
import { AuthService } from '../../../core/services/auth';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-imoveis',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard-imoveis.html',
  styleUrl: './dashboard-imoveis.css'
})
export class DashboardImoveis implements OnInit {
  imoveis: Imovel[] = [];
  mostrarFormulario = false;

  novoImovel: Imovel = new Imovel(0, "", 0, "", "", 0, "", "");

  constructor(private imoveisService: Imoveis, private auth: AuthService) { }

  ngOnInit(): void {
    this.listarImoveis();
  }

  listarImoveis(): void {
    this.imoveisService.getImoveis().subscribe({
      next: (dados) => {
        this.imoveis = dados;
        console.log('Imóveis carregados:', this.imoveis);
      },
      error: (err) => console.error('Erro ao buscar imóveis:', err),
    });
  }

  cadastrarImovel(): void {
    const usuario = this.auth.usuarioAtual();

    const { id, ...dados } = this.novoImovel;

    const imovelParaSalvar = { ...dados, corretorId: usuario.id };

    this.imoveisService.createImovel(imovelParaSalvar).subscribe(() => {
      this.listarImoveis();
      this.mostrarFormulario = false;
      this.novoImovel = new Imovel(0, '', 0, '', '', 0, '', '');
    });
  }

  AtualizarImovel(id: any): void {
    this.imoveisService.updateImovel(id, this.novoImovel).subscribe(
      () => {
        this.novoImovel = new Imovel(0, '', 0, '', '', 0, '', '');
        this.listarImoveis();
      },
      (error) => {
        console.error("Erro ao atualizar vaga: ", error);
      }
    );
  }

  excluirVaga(id: any): void {
    this.imoveisService.deleteImovel(id).subscribe(
      () => {
        this.novoImovel = new Imovel(0, '', 0, '', '', 0, '', '');
        this.listarImoveis();
      },
      (error) => {
        console.error("Erro ao deletar vaga: ", error);
      }
    );
  }
}