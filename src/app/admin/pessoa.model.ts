export class PessoaModel {
    id: number;
    nome: string;
    dataNascimento: string;
    CPF: string;


    constructor( id: number, nome: string, dataNascimento: string, CPF: string) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.CPF = CPF;
    }
}