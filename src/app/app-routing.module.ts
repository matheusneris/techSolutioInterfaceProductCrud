import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      { path:'', pathMatch:'full', redirectTo:'produtos' },
      { path:'produtos',
      loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component:AuthenticationComponent,
    children:[
      {path: '', redirectTo: 'login', pathMatch:'full'},
      {path:'login', component: LoginComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
