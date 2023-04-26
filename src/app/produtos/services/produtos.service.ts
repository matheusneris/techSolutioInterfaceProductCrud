import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private readonly API = '/api/produtos';

  constructor(private httpClient: HttpClient) { }

  list(){

    let bearerToken = localStorage.getItem('token');
    if (bearerToken == null){
      bearerToken = "meutoken";
    }

    const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', `Bearer ${bearerToken}`);

     return this.httpClient.get<Produto[]>(this.API, {'headers': headers})
     .pipe(
      first(),
      delay(1000),
      tap(produtos => console.log(produtos))
     );
  }

}
