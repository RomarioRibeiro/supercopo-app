import { PessoaService } from './../pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaFiltro } from '../pessoa.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErroHandlerService } from 'src/app/core/erro-handler.service';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pessoas-pesquisar',
  templateUrl: './pessoas-pesquisar.component.html',
  styleUrls: ['./pessoas-pesquisar.component.css']
})
export class PessoasPesquisarComponent implements OnInit {

  pessoas = [];
  filtro = new PessoaFiltro();
  totalRegistro = 0;


  @ViewChild('tabela') grid!: Table;


  constructor(private pessoaService: PessoaService,
    private messagemService: MessageService,
    private erroHandler: ErroHandlerService,
    private confirmation: ConfirmationService,
    private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Pessoa Pesquisa')
  }

  pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.totalRegistro = resultado.total
        this.pessoas = resultado.pessoas;
      });
    }



    oMudarPagina(event: LazyLoadEvent) {
      const pagina = event!.first! / event!.rows!;
      this.pesquisar(pagina);
    }

}
