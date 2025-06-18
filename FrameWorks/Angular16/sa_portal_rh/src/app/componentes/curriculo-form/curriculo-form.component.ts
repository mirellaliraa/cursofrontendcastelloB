import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit{
  public curriculo: Curriculo = new Curriculo(0, '', '', '',);
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  //* métodos CRUD
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
    // Implementar lógica para buscar currículo por ID se necessário
  }

  cadastrarCurriculo(): void {
    this._curriculoService.createCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '',);
        this.listarCurriculos();
      },
      (error: any) => {
        console.error('Erro ao cadastrar currículo: ', error);
      }
    );
  }

  atualizarCurriculo(id: any): void {
    this._curriculoService.updateCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '',);
        this.listarCurriculos();
      },
      (error: any) => {
        console.error('Erro ao atualizar currículo: ', error);
      }
    );
  }

  excluirCurriculo(id: any): void {
    this._curriculoService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '',);
        this.listarCurriculos();
      },
      (error: any) => {
        console.error('Erro ao deletar currículo: ', error);
      }
    );
  }
}
