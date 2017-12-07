import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionario;

  constructor(private funcionariosService: FuncionariosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.funcionariosService.getFuncionarioId(id)
      .subscribe(funcionario => this.funcionario = funcionario);
  }
  }

