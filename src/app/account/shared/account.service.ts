import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
httpClient: any;

constructor(private http: HttpClient) { }

  async login(usuario: { username: string; password?: string; }){
      const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

      return new Promise ((resolve) => this.http.post(AppConstants.baseLogin, JSON.stringify(usuario), {'headers': headers}).subscribe((data: any) => {
        console.info(data);
        /*Corpo retorno http*/
        var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

        localStorage.setItem('token', token);

        resolve(true);
      }));
    }
}

