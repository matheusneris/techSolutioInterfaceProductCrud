import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutosService } from '../services/produtos.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  produtos: Produto[] = [];

  //produtos$: Observable<Produto[]>;
  /*produtos: Produto[] = [
    {id: 1, name: 'Feijao', fabricante: 'Tio joao', preco: 10.99},{id: 2, name: 'Arroz', fabricante: 'Urbano', preco: 22.80}
  ]*/
  displayedColumns = ['name', 'fabricante', 'preco', 'actions'];

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.getProdutos();

   /*this.produtosService.list().subscribe((produtos) => this.produtos = produtos);
   .pipe(
      catchError(error => {
        this.onError('Erro ao carregar produtos.');
        return of([])
      })
    );*/
   }

   getProdutos(): void{
    this.produtosService.list();
   }

   onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
   }

  ngOnInit(): void{

   }

   onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
   }
}


