import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pessoa } from '../core/lancamento.model';

export class PessoaFiltro {
  nome?: string;
  pagina = 0;
  intensPorPagina = 5;
}


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  confirm(arg0: { message: string; accept: () => void; }) {
    throw new Error('Method not implemented.');
  }

  pessoasUrl = 'https://supercopo-app.herokuapp.com/pessoas';

  constructor(
    private http: HttpClient,

  ) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.intensPorPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}?resumo`, {  params })
      .toPromise()
      .then((response: any) => {
        const pessoas = response['content'];
        console.log(pessoas)
        const resultado = {
          pessoas,
          total: response['totalElements']
        };
        return resultado;
      });
}

listarPessoa(): Promise<any> {


  return this.http.get(`${this.pessoasUrl}`)
    .toPromise()
    .then((response: any) => response['content']);
}

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()

      .append('Content-Type', 'application/json');

    return this.http.put<void>(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise();

  }


  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

        return firstValueFrom(this.http.get<Pessoa>(`${this.pessoasUrl}/${codigo}`, { headers }))

  }

  adicionarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders()

      .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.post<Pessoa>(this.pessoasUrl, pessoa, { headers }));
  }


  atualizarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders()

      .append('Content-Type', 'application/json');

    return this.http.put<Pessoa>(`${this.pessoasUrl}/${pessoa.codigo}`, pessoa, { headers })
      .toPromise()
      .then((response: any) => {


        return response;
      });
  }



  excluir(codigo: number): Promise<any> {


    return this.http.delete(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }


}
