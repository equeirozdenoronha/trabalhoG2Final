import {PessoaModel} from './pessoa.model';
import {CargoModel} from './cargo.model';
import {FuncoesModel} from './funcoes.model';

export class FuncionarioModel {
    id: number;
    tipo: string;
    cargo: CargoModel;
    pessoa: PessoaModel;
    funcoes: FuncoesModel


    constructor(id: number, tipo: string, cargo: CargoModel, pessoa: PessoaModel, funcoes: FuncoesModel) {
        this.id = id;
        this.tipo = tipo;
        this.cargo = cargo;
        this.pessoa = pessoa;
        this.funcoes = funcoes;
    }
}
