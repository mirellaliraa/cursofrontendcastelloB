import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit{
  public curriculos: any[] = []; 

  constructor(private _curriculosService: CurriculoService){}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(){
    const usuarioId = 1;
    this._curriculosService.getCurriculoByUsuarioId(usuarioId).subscribe(
      (e) => {
        this.curriculos = e.map(
          (curriculos) => {
            return new Curriculo(
              curriculos.id,
              curriculos.habilidades,
              curriculos.linkedin,
              curriculos.formacao,
              curriculos.experiencia,
            );
          }
        )
      }
    )
  }
}
