import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(
    private http: HttpClient,

  ) { }




  listarPessoa(): Promise<any> {


    return this.http.get(`${this.pessoasUrl}`)
      .toPromise()

  }

}
