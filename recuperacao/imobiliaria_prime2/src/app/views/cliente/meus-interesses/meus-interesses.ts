import { Component, OnInit } from '@angular/core';
import { InteresseService } from '../../../core/services/interesse';
import { Imoveis } from '../../../core/services/imoveis';
import { AuthService } from '../../../core/services/auth';
import { CommonModule } from '@angular/common';
import { Imovel } from '../../../core/models/imovel.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meus-interesses',
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-interesses.html',
  styleUrl: './meus-interesses.css'
})
export class MeusInteresses implements OnInit {
  imoveisInteressados: Imovel[] = [];

  constructor(
    private interesseService: InteresseService,
    private imoveisService: Imoveis,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.carregarInteresses();
  }

  carregarInteresses() {
    const usuario = this.auth.usuarioAtual();
    if (!usuario) return;

    this.interesseService.getInteressesByCliente(usuario.id).subscribe({
      next: (interesses) => {
        this.imoveisInteressados = [];
        interesses.forEach((interesse) => {
          this.imoveisService.getImovelById(interesse.imovelId).subscribe({
            next: (imovel) => {
              this.imoveisInteressados.push(imovel);
            },
            error: (err) => console.error('Erro ao buscar imóvel:', err)
          });
        });
      },
      error: (err) => console.error('Erro ao buscar interesses:', err)
    });
  }
}