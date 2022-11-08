import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  pessoasUrl = 'http://localhost:8080/pessoas';

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

  }

}
