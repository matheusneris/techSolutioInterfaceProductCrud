import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  title = 'interface';

  usuario = {username:'', password:''};

  constructor(private accoutService: AccountService, private router: Router){  }

  async login(){
    try{
      const result = await this.accoutService.login(this.usuario);
      console.log(`Login efetuado`);

      this.router.navigate(['']);

    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit(): void {

  }
}
