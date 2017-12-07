import { Component, OnInit } from '@angular/core';
import {PessoasService} from '../pessoas.service';
import {CargosService} from '../cargos.service';
import {FuncoesService} from '../funcoes.service';
import {FuncionariosService} from '../funcionarios.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

    id = null;
    tipo = null;
    pessoaId = null;
    cargoId = null;
    funcoees = null;
    cadastro_ok = false;
    cadastro_erro = false;
    atualizar_ok = false;
    atualizar_erro = false;

  pessoas: any[];
  cargos: any[];
  funcoes: any[];
  funcionario: any = {
      tipo: '',
      pessoaId: '',
      cargoId: '',
      funcoes: ''
  };
  constructor(private pessoasService: PessoasService,
              private cargosService: CargosService,
              private funcoesService: FuncoesService,
              private funcionariosService: FuncionariosService
              ) { }

  ngOnInit() {
   this.pessoasService.getPessoas()
       .subscribe(
           pessoas => {
             this.pessoas = pessoas;
           }
       );
   this.cargosService.getCargos()
       .subscribe(
         cargos => {
             this.cargos = cargos;
         }
       );
   this.funcoesService.getFuncoes()
       .subscribe(
           funcoes => {
               this.funcoes = funcoes;
           }
       );
  }
  salvar() {

    console.log(this.funcionario);
    this.funcionariosService.addFuncionario(this.funcionario)
        .subscribe(
          f => {
              console.log(f.id);
              this.pessoasService.getPessoasId(f.pessoaId).subscribe(
                  p => {
                      window.alert(`O funcionario ${p.nome} foi adicionada no sistema`);
                      this.funcionario.tipo = '';
                      this.funcionario.pessoaId = '';
                      this.funcionario.cargoId = '';
                      this.funcionario.funcoes = '';
                  }
              );

          }
        );
  }
