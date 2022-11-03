import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisar',
  templateUrl: './pessoas-pesquisar.component.html',
  styleUrls: ['./pessoas-pesquisar.component.css']
})
export class PessoasPesquisarComponent implements OnInit {


  pessoas = [
    {nome: 'Romario Ribeiro', cargo: 'Auxiliar de Produção', ativo: true},
    {nome: 'João das Couves', cargo: 'Fechador de Caixas', ativo: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
