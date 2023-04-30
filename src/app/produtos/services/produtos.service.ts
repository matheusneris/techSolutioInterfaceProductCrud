import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private readonly API = '/api/produtos';


  //'/assets/produtos.json'

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Produto[]> {

    let bearerToken = localStorage.getItem('token');
    if (bearerToken == null){
      bearerToken = "meutoken";
    }

    const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', `Bearer ${bearerToken}`);

     return this.httpClient.get<Produto[]>(this.API,
      {'headers': headers})
     .pipe(
      first(),
      delay(1000),
      tap(produtos => console.log(produtos))
     );
  }

}
