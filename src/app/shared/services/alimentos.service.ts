import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { IAlimento } from '../models/alimentos.model';
import { PortionStore } from '../store/porcoes.store';
import { IRefeicao } from '../models/refeicao.model';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  private url: Observable<IAlimento[]>[];
  public modelos$ = new BehaviorSubject<Array<IRefeicao[]>>(null);
  constructor(
    private portionStore: PortionStore,
  ) { }

  public load(IBGE: IAlimento[], TACO: IAlimento[], Tucunduva: IAlimento[], Marcas: IAlimento[], Suplementos: IAlimento[]): Observable<IAlimento[]>[] {
    return this.url = [
      of(IBGE).pipe(map((resp) => resp['alimentos']), shareReplay(1)),
      of(TACO).pipe(map((resp) => resp['alimentos']), shareReplay(1)),
      of(Tucunduva).pipe(map((resp) => resp['alimentos']), shareReplay(1)),
      of(Marcas).pipe(map((resp) => resp['alimentos']), shareReplay(1)),
      of(Suplementos).pipe(map((resp) => resp['alimentos']), shareReplay(1))
    ];
  }

  public loadModelos(Modelos: Array<IRefeicao[]>) {
    this.modelos$.next(Modelos);
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
    return (this.url[n]);
  }

  public getAllAlimentos(): Observable<Array<IAlimento>> {
    return forkJoin(this.url)
      .pipe(map(([a1, a2, a3, a4, a5]) => [...a1, ...a2, ...a3, ...a4, ...a5]));
  }
}
