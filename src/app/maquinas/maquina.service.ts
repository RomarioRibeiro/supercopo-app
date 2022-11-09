import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  maquinasURL = 'https://supercopo-app.herokuapp.com/maquinas';

  constructor(private http: HttpClient) { }

  listaMaquinas(): Promise<any> {

    return this.http.get(`${this.maquinasURL}`)
    .toPromise();

  }
}
