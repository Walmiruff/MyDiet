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
  private alimTucunduva$: Observable<IAlimento[]>;
  private alimMarcas$: Observable<IAlimento[]>;
  private alimSuplementos$: Observable<IAlimento[]>;

  constructor(
    private portionStore: PortionStore,
  ) { }

  public load(IBGE: IAlimento[], TACO: IAlimento[], Tucunduva: IAlimento[], Marcas: IAlimento[], Suplementos: IAlimento[]): Observable<IAlimento[]>[] {
    return this.url = [this.alimIBGE$ = of(IBGE), this.alimTACO$ = of(TACO), this.alimTucunduva$ = of(Tucunduva), this.alimMarcas$ = of(Marcas), this.alimSuplementos$ = of(Suplementos)];
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
      case 'Tucunduva':
        n = 2;
        break;
      case 'Marcas':
        n = 3;
        break;
      case 'Suplementos':
        n = 4;
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
    return forkJoin(this.getAlimentos('IBGE'), this.getAlimentos('TACO'), this.getAlimentos('Tucunduva'), this.getAlimentos('Marcas'), this.getAlimentos('Suplementos'))
      .pipe(map(([a1, a2, a3, a4, a5]) => [...a1, ...a2, ...a3, ...a4, ...a5]));
  }
}
