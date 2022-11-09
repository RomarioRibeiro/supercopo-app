import { PessoaService } from './../../pessoas/pessoa.service';
import { MaquinaService } from './../../maquinas/maquina.service';
import { LacamentoService } from './../lacamento.service';
import { ErroHandlerService } from './../../core/erro-handler.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lancamento } from 'src/app/core/lancamento.model';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css'],
  providers: [MessageService]
})
export class LancamentoCadastroComponent implements OnInit {




  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  maquinas: any[] = [];

  pessoas: any[] = [];

  lancamento: Lancamento = new Lancamento();

  constructor(
    private lancamentoServece: LacamentoService,
    private maquinaService: MaquinaService,
    private pessoaService: PessoaService,
    public messageService: MessageService,
    private title: Title,
    private router: Router,
    private routes: ActivatedRoute,
    private erroHandler: ErroHandlerService,
  ) { }

  ngOnInit(): void {
    const codigoLancamento =this.routes.snapshot.params['codigo']

    this.title.setTitle('Novo lançamento')

    if(codigoLancamento && codigoLancamento !== 'novo') {
      this.carregarLancamento(codigoLancamento);
    }
    this.carregarMaquina();
    this.carregarPessoas();
  }

  carregarMaquina() {
    this.maquinaService.listaMaquinas()
    .then(maquinas => {
      this.maquinas = maquinas.map((c: { nome: any; codigo: any; }) =>({label: c.nome, value: c.codigo }));
    })

  }



  carregarPessoas() {
    this.pessoaService.listarPessoa()
    .then(pessoas => {
      this.pessoas = pessoas.map((p: { nome: any; codigo: any; }) => ({label: p.nome, value: p.codigo}));
    })
  }


get editando() {
  return Boolean(this.lancamento.codigo);
}

salvar(form: NgForm) {
  if(this.editando) {
    this.atualizarLancamento(form);
  }else{
    this.adicionarLancamento(form);
  }
}

adicionarLancamento(form: NgForm) {
  this.lancamentoServece.registrarLancamento(this.lancamento)
  .then(lancamentoAdicionado => {
    this.messageService.add({ severity: 'success', detail: 'Lançamento criado com sucesso!' });

    // form.reset();
    // this.lancamento = new Lancamento();
   this.router.navigate(['/lancamento', lancamentoAdicionado.codigo])
  })
  .catch(error => this.erroHandler.handler(error));
}



atualizarLancamento(form: NgForm) {
  this.lancamentoServece.atualizar(this.lancamento)
    .then((lancamento: Lancamento) => {
      this.lancamento = lancamento;
      this.atualizarTituloEdicao();
      this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
    }
    ).catch(erro => this.erroHandler.handler(erro))
}

    carregarLancamento(codigo: number) {
      this.lancamentoServece.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento
        this.atualizarTituloEdicao()
      })
      .catch(error => this.erroHandler.handler(error));
    }



    novo(form: NgForm) {
      this.router.navigate(['/lancamento/novo'])

      setTimeout(() => {
        this.lancamento = new Lancamento();
      }, 1)
    }



    atualizarTituloEdicao() {

      this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`)
    }

  }




