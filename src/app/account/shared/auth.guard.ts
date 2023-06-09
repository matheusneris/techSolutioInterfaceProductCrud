import { AccountService } from 'src/app/account/shared/account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private accountService: AccountService){}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.accountService.isUserLoggedIn()){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
