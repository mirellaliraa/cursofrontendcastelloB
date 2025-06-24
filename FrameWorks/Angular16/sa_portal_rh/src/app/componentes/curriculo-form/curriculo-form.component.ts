import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit{
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '');
  public curriculos: Curriculo[] = [];

  constructor(
    private _curriculoService: CurriculoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
     if (id) {
      this.listarCurriculoPorId(id);
    } else {
      this.listarCurriculos();
    }
  }

  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe(
      (e: any[]) => {
        this.curriculos = e.map((curriculo: any) => Curriculo.fromMap(curriculo));
      },
      (error: any) => {
        console.error('Erro ao listar currículos: ', error);
      }
    );
  }

  listarCurriculoPorId(id: any): void {
  this._curriculoService.getCurriculoByUsuarioId(id).subscribe(
    (curriculos: any[]) => {
      if (curriculos && curriculos.length > 0) {
        this.curriculo = Curriculo.fromMap(curriculos[0]);
      } else {
        console.log('Nenhum currículo encontrado');
      }
    },
    (error: any) => {
      console.error('Erro ao buscar currículo por ID: ', error);
    }
  );
}

  cadastrarCurriculo(): void {
  this._curriculoService.createCurriculo(this.curriculo).subscribe({
    next: (res) => {
      this.curriculo = new Curriculo(0, '', '', '', '');
      this.listarCurriculos();
    },
    error: (error) => {
      console.error('Erro ao cadastrar currículo:', error);
    }
  });
}
}
