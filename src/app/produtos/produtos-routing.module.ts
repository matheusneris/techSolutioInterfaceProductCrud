import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

const routes: Routes = [
  {path: '', component: ProdutosComponent},
  {path: 'new', component: ProdutosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
