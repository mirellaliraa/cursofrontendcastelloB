import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { CurriculoListComponent } from './componentes/curriculo-list/curriculo-list.component';
import { CurriculoFormComponent } from './componentes/curriculo-form/curriculo-form.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "vagas", component: VagasComponent},
  {path: "curriculos", component: CurriculosComponent},
  {path: "painel-vagas", component: PainelVagasComponent},
  {path: 'curriculos/novo', component: CurriculoFormComponent},
  {path: 'curriculo-editar/:id', component: CurriculoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }