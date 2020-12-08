import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { IAlimento } from '../models/alimentos.model';
import { PortionStore } from '../store/porcoes.store';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  private url: Observable<IAlimento[]>[];
  private alimIBGE$: Observable<IAlimento[]>;
  private alimTACO$: Observable<IAlimento[]>;

  constructor(
    private portionStore: PortionStore,
  ) { }

  public load(IBGE: IAlimento[], TACO: IAlimento[]): Observable<IAlimento[]>[] {
    return this.url = [this.alimIBGE$ = of(IBGE), this.alimTACO$ = of(TACO)];
  }

  public getAlimentos(tabela: string | number): Observable<Array<IAlimento>> {
    let n: number;
    switch (tabela) {
      case 'IBGE':
        n = 0;
        break;
      case 'TACO':
        n = 1;
        break;
      default:
        n = 1;
        break;
    }
    return (this.url[n]).pipe(
      map((resp) => resp['alimentos']),
      shareReplay(1),
    );

  }

  public getAllAlimentos(): Observable<Array<IAlimento>> {
    return forkJoin(this.getAlimentos('IBGE'), this.getAlimentos('TACO'))
      .pipe(map(([a1, a2]) => [...a1, ...a2]));
  }
}


// IBGE 4
// TACO 1
// Tucunduva 3
// Marcas 6
// Suplementos 13
