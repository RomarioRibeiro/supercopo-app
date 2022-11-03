import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisar',
  templateUrl: './lancamento-pesquisar.component.html',
  styleUrls: ['./lancamento-pesquisar.component.css']
})
export class LancamentoPesquisarComponent implements OnInit {

lancamentos = [
  {maquina: 'Maquina 1', nome: 'Romario Ribeiro', descricao: 'Taça Gin', quantidade: '1000', dataProd: '10/10/2022', dataVen: '10/11/2022'},
  {maquina: 'Maquina 2', nome: 'Luiz Henrique', descricao: 'Tampa G', quantidade: '2000', dataProd: '10/10/2022', dataVen: '20/11/2022'},
  {maquina: 'Maquina 3', nome: 'João das Couves', descricao: 'Caneca 300L', quantidade: '3000', dataProd: '10/10/2022', dataVen: '15/11/2022'},
  {maquina: 'Maquina 4', nome: 'Maria da Silva', descricao: 'Long lingth', quantidade: '15000', dataProd: '10/10/2022', dataVen: '14/11/2022'},
  {maquina: 'Maquina 5', nome: 'Mariane Oliveira', descricao: 'Tampa M', quantidade: '11000', dataProd: '10/10/2022', dataVen: '19/11/2022'},
  {maquina: 'Maquina 6', nome: 'Talita Carvalio', descricao: 'Eco 400L', quantidade: '5000', dataProd: '10/10/2022', dataVen: '20/11/2022'},
  {maquina: 'Maquina 7', nome: 'Mario Oliveira', descricao: 'Eco 600L', quantidade: '6000', dataProd: '10/10/2022', dataVen: '06/11/2022'}
]


  constructor() { }

  ngOnInit(): void {
  }

}
