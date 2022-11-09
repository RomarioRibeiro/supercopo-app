import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Lancamento } from '../core/lancamento.model';

export class LancamentoFiltro {
  descricao?: string;
  dataFinalizacaoInico?: Date;
  dataFinaizacaoFim?: Date;
  pagina = 0;
  intensPorPagina = 5;
}


@Injectable({
  providedIn: 'root'
})
export class LacamentoService {


  lancamentosURL = 'https://supercopo-app.herokuapp.com/lancamentos'


  constructor( private http: HttpClient,
    private datePipe: DatePipe) { }



  pesquisar(filtro: LancamentoFiltro): Promise<any> {


    let params = new HttpParams();

    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.intensPorPagina);

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataFinalizacaoInico) {
      params = params.set('dataFinalizacaoDe', this.datePipe.transform(filtro.dataFinalizacaoInico, 'yyyy-MM-dd')!);
    }

    if (filtro.dataFinaizacaoFim) {
      params = params.set('dataFinalizacaoAte', this.datePipe.transform(filtro.dataFinaizacaoFim, 'yyyy-MM-dd')!);
    }


    return this.http.get(`${this.lancamentosURL}?resumo`,  {params})
    .toPromise()
    .then((response: any) => {
      const lancamentos = response['content'];

      const resultado = {
        lancamentos,
        total: response['totalElements']
      };
      return resultado;
    });
  }


  registrarLancamento(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.post<Lancamento>(this.lancamentosURL, lancamento, {headers}));

  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');

    return this.http.put<Lancamento>(`${this.lancamentosURL}/${lancamento.codigo}`, lancamento, {headers})
    .toPromise()
    .then((response: any) => {
      this.converterStringsParaDatas([response]);
      return response;
    });


  }

  excluir(codigo: number): Promise<any> {


    return this.http.delete(`${this.lancamentosURL}/${codigo}`)
    .toPromise()
    .then(() => null);
  }



  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.get<Lancamento>(`${this.lancamentosURL}/${codigo}`, {headers}))
    .then((response: any) => {
      this.converterStringsParaDatas([response]);
      return response;
    });

  }

  private converterStringsParaDatas(lacamentos: Lancamento[]) {
    for (const lancamento of lacamentos) {
      let offset = new Date().getTimezoneOffset() * 60000;

      lancamento.dataFinalizacao = new Date(new Date(lancamento.dataFinalizacao!).getTime() + offset);

      if (lancamento.dataProducao) {
        lancamento.dataProducao = new Date(new Date(lancamento.dataProducao).getTime() + offset);
      }
    }
  }

}
