import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../../core/models/imovel.model';
import { Imoveis } from '../../../core/services/imoveis';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-imovel', 
  imports: [CommonModule, RouterModule],
  templateUrl: './card-imovel.html',
  styleUrl: './card-imovel.css'
})

export class CardImovel implements OnInit{
  imovel?: Imovel; 

  constructor(private imovelService: Imoveis, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.imovelService.getImovelById(id).subscribe({
        next: (dados) => (this.imovel = dados),
        error: (err) => console.error('Erro ao buscar imóvel:', err),
      });
    }
  }
}
