import { LacamentoService, LancamentoFiltro } from './../lacamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { ErroHandlerService } from 'src/app/core/erro-handler.service';

@Component({
  selector: 'app-lancamento-pesquisar',
  templateUrl: './lancamento-pesquisar.component.html',
  styleUrls: ['./lancamento-pesquisar.component.css']
})
export class LancamentoPesquisarComponent implements OnInit {

lancamentos: any[] = []

totalRegistros = 0;
filtro = new LancamentoFiltro

@ViewChild('tabela') grid!: Table;

  constructor(private lacamentoService: LacamentoService,
    private title: Title,
    private confimationService: ConfirmationService,
    private errorHandlerService: ErroHandlerService,
    private messagemService: MessageService,   ) { }

  ngOnInit(): void {

    this.title.setTitle('Pesquisa de lançamentos')
 /*    this.pesquisar(); */
  }

  pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.lacamentoService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.lancamentos = resultado.lancamentos;

    })

  }


  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina)
  }

  confimacaoExclusao(lancamento: any) {
    this.confimationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    })
  }

  excluir(lancamento: any) {
    this.lacamentoService.excluir(lancamento.codigo)
    .then(() =>{
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.reset();
      }
      this.messagemService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' })
  })
  .catch(error => this.errorHandlerService.handler(error));;
  }


}
