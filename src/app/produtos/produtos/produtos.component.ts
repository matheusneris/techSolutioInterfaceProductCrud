import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutosService } from '../services/produtos.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, pipe } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  produtos$: Observable<Produto[]>;

  displayedColumns = ['name', 'fabricante', 'preco', 'actions'];

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    ) {

    this.produtos$ = this.produtosService.list()
    .pipe(
      catchError(error => {
        console.log(error)
        this.onError('Erro ao carregar produtos.');
        return of([])
      })
    );
    console.log(this.produtos$);
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


