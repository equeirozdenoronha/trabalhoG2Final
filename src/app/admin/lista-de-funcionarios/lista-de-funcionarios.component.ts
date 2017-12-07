import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-lista-de-funcionarios',
  templateUrl: './lista-de-funcionarios.component.html',
  styleUrls: ['./lista-de-funcionarios.component.css']
})
export class ListaDeFuncionariosComponent implements OnInit {
  excluir_ok = false;
  excluir_erro = false;
  funcionarios = [];
  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
    this.atualizarLista();
  }

  excluir(funcionario) {
    if (confirm('Tem certeza que deseja excluir o funcionario ' + funcionario.pessoaId + '?')) {
      this.funcionariosService.deleteFuncionario(funcionario.id)
        .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atualizarLista();
        }, erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
    }
  }

  atualizarLista() {
    this.funcionariosService.getFuncionarios()
      .subscribe(funcionarios => this.funcionarios = funcionarios);
  }
}
