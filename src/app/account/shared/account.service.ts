import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import jwt_decode from 'jwt-decode';

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

    getTokenExpirationDate(token: string): Date | null{
      const decoded: any = jwt_decode(token);

      if (decoded.exp === undefined) {
        return null;
      }

      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    }

    isTokenExpired(token?: string): boolean{
      if(!token){
        return true;
      }

      const date = this.getTokenExpirationDate(token);
      if(date === null){
        return false;
      }

      return (date.valueOf() < new Date().valueOf());
    }

    isUserLoggedIn() {
      const token = localStorage.getItem('token');
      if(!token){
        return false;
      } else if (this.isTokenExpired(token)) {
        return false;
      }

      return true;
    }
}

