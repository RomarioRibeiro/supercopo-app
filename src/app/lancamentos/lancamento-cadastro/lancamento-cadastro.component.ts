import { ErroHandlerService } from './../../core/erro-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  models = [
    {label:'Taça Gin', value: 1 },
    {label: 'Eco 400L', value: 2},
  ];

  pessoa = [
    {label: 'Romario', value: 2},
    {label: 'Mario Oliveira', value: 4},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
