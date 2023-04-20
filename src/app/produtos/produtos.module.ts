import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosFormComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class ProdutosModule { }
