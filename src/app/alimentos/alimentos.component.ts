import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { IAlimento } from '../shared/models/alimentos.model';
import { AlimentosService } from '../shared/services/alimentos.service';
import { AlimStore } from '../shared/store/alim.store';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {

  public alimentos$ = new BehaviorSubject<Array<IAlimento>>(null);
  public alimDetail$ = new BehaviorSubject<IAlimento>(null);
  public alimentos: any[] = [];
  public formModalAlim: FormGroup;
  public idAlimDetail: number;

  constructor(
    private formBuilder: FormBuilder,
    private alimentosService: AlimentosService,
    private alimStore: AlimStore
  ) {
    this.buildForms();
  }

  ngOnInit(): void {
    this.triggersControls();
    this.formModalAlim.controls.tabelas.patchValue('TACO');
    this.alimDetail(2028);
  }


  public buildForms(): void {
    this.formModalAlim = this.formBuilder.group({
      tabelas: ['TACO'],
      search: [null],
      porcoes: ['100-100 gramas'],
    });
  }

  public triggersControls(): void {
    this.formModalAlim.controls.tabelas.valueChanges.subscribe(value => {
      this.alimentos.splice(0);
      value === 'Todas' ? this.alimentosService.getAllAlimentos().subscribe(alim => { this.alimentos$.next(alim.filter(alim => alim.id !== null)); }) :
        this.alimentosService.getAlimentos(value.toString()).subscribe(alim => { this.alimentos$.next(alim.filter(alim => alim.id !== null)); });
      this.alimentos$.pipe(take(1)).subscribe(alims => alims.map(alim => this.alimentos.push(alim)));
    });

    this.formModalAlim.controls.search.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(value => {
        this.alimentos.splice(0);
        return this.alimentos$.pipe(
          map(alims => alims.filter(alim => alim.descricao.includes(value)))
        )
      }),
    ).subscribe(alims => alims.map(alim => this.alimentos.push(alim)));
      

    this.formModalAlim.controls.porcoes.valueChanges
    .pipe(
      switchMap(porcao => {
       return this.alimentos$.pipe(
          map(alims => alims.filter(alim => alim.id === this.idAlimDetail)),
          tap(alims => {
              const alimCopy = JSON.parse(JSON.stringify(alims[0]))
              alimCopy.porcaoGramas = Number(porcao.split('-')[0]);
              alimCopy.quantidade = 1;
              const alimCopyCalc = this.alimStore.alimCalc(alimCopy);
              this.alimDetail$.next(alimCopyCalc);    
          })
        )
      })
    ) 
    .subscribe();
  }

  public alimDetail(id: number): void {
    this.alimentos$.pipe(
      tap(() => this.idAlimDetail = id),
      map(alims => alims.filter(alim => alim.id === id)),
      tap(alims => this.alimDetail$.next(alims[0])),
      take(1),
    ).subscribe(() => this.formModalAlim.controls.porcoes.patchValue('100-100 gramas'));
  }
}
