import { Component, OnInit } from '@angular/core';
import {PessoasService} from '../pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {

  }

}
