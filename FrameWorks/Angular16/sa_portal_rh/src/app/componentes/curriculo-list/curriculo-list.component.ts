import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculoService } from '../../services/curriculo.service';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss']
})
export class CurriculoListComponent implements OnInit{
  dadosCurriculo: { nome?: string; formacao?: string; experiencia?: number } | undefined;
  exibirLista = false;
  curriculos: any[] = [];

  constructor(private route: ActivatedRoute, private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.exibirLista = this.route.snapshot.data['exibirLista'];

    if (this.exibirLista) {
      this.curriculoService.listarTodos().subscribe(dados => this.curriculos = dados);
    } 
  }
}



