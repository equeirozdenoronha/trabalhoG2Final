import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {ListaDeFuncionariosComponent} from './lista-de-funcionarios/lista-de-funcionarios.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {TurmaComponent} from './turma/turma.component';
import {FuncionarioComponent} from './funcionario/funcionario.component';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {CadastroFuncionarioComponent} from './cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'disciplinas', component: ListaDeDisciplinasComponent},
      {path: 'disciplinas/:id', component: DisciplinaComponent},
      {path: 'disciplinas/:id/novo', component: CadastroDeDisciplinaComponent},
      {path: 'disciplinas/:id/editar', component: CadastroDeDisciplinaComponent},
      {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
      {path: 'cadastrar-funcionario', component: CadastroFuncionarioComponent},
      {path: 'turmas', component: ListaDeTurmasComponent},
      {path: 'turmas/:id', component: TurmaComponent},
      {path: 'funcionarios', component: ListaDeFuncionariosComponent},
      {path: 'funcionarios/:id', component: FuncionarioComponent},
      {path: 'funcionarios/:id/novo', component: CadastroFuncionarioComponent},
      {path: 'funcionarios/:id/editar', component: CadastroFuncionarioComponent},
      {path: '', component: HomeComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
