import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss']
})
export class CurriculoListComponent implements OnInit{
  dadosCurriculo: { id?: number; habilidades?: string; linkedin?: string; formacao?: string; experiencia?: string } | undefined;
  exibirLista = false;
  curriculos: Curriculo[] = [];
  curriculo: Curriculo = new Curriculo(0, '', '', '', '');

  constructor(private route: ActivatedRoute, private curriculoService: CurriculoService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.listarCurriculoPorId(id);
    } 
  }

  Editar(): void {
  if (this.dadosCurriculo?.id) {
    this.router.navigate(['/curriculo-editar', this.dadosCurriculo.id]);
  }
}

  listarCurriculos(id: number): void {
  this.curriculoService.getCurriculos().subscribe(
    (e: Curriculo[]) => {
      this.curriculos = e.map((curriculo: Curriculo) => Curriculo.fromMap(curriculo));
    },
    (error: any) => {
      console.error('Erro ao listar currículos: ', error);
    }
  );
}

  listarCurriculoPorId(id: any): void {
  this.curriculoService.getCurriculoById(id).subscribe(
    (curriculos: any[]) => {
      if (curriculos && curriculos.length > 0) {
        this.curriculo = Curriculo.fromMap(curriculos[0]);
      } else {
        console.log('Nenhum currículo encontrado');
      }
    },
    (error: any) => {
      console.error('Erro ao buscar currículo', error);
    }
  );
}

  atualizarCurriculo(id: any): void {
    this.curriculoService.updateCurriculo(id, this.curriculo).subscribe(
      () => {
        alert("Curriculo atualizado");
        this.listarCurriculoPorId(id);
        this.listarCurriculos(id);
      },
      (error: any) => {
        console.error('Erro ao atualizar currículo: ', error);
      }
    );
  }

  excluirCurriculo(id: any): void {
    this.curriculoService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '');
        this.listarCurriculos(id);
      },
      (error: any) => {
        console.error('Erro ao deletar currículo: ', error);
      }
    );
  }
}





