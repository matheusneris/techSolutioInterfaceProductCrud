import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { config, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ProdutosService {



  private readonly API = '/api/produtos'

  constructor(private httpClient: HttpClient) { }

  list() {

    /*const getAuth = async ({ authState }) => {
      if (typeof window === 'undefined') return null
      if (!authState) {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        if (token && refreshToken) {
          return { token, refreshToken };
        }
        return null;
      }

      return null;
    };*/

    let bearerToken = localStorage.getItem('token');
    if (bearerToken == null){
      bearerToken = "meutoken";
    }

    const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', bearerToken );

     return this.httpClient.get<Produto[]>(this.API, {'headers': headers})
     .pipe(
      first(),
      tap(produtos => console.log)
     );
  }

}
