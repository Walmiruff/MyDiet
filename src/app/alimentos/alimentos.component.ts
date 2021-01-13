import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { IAlimento } from '../shared/models/alimentos.model';
import { AlimentosService } from '../shared/services/alimentos.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {

  public alimentos$ = new BehaviorSubject<Array<IAlimento>>(null);
  public alimDetail$ = new BehaviorSubject<IAlimento>(null);
  public formModalAlim: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alimentosService: AlimentosService,
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
      tabelas: [null],
      search: [null],
      porcoes: [null],
    });
  }

  public triggersControls(): void {
    this.formModalAlim.controls.tabelas.valueChanges.subscribe(value => {
      value === 'Todas' ? this.alimentosService.getAllAlimentos().subscribe(alim => { this.alimentos$.next(alim.filter(alim => alim.id !== null)); }) :
        this.alimentosService.getAlimentos(value.toString()).subscribe(alim => { this.alimentos$.next(alim.filter(alim => alim.id !== null)); });
    });
    
    // this.formModalAlim.controls.search.valueChanges.pipe(
    //   debounceTime(600),
    //   distinctUntilChanged(),
    //   switchMap(value => {
    //     return this.alimentos$.pipe(
    //       map(alims => alims.filter(alim => alim.descricao.includes(value)))
    //     )
    //   }),
    // ).subscribe(alims => this.alimentos$.next(alims))


  }

  public alimDetail(id: number): void {
    this.alimentos$.pipe(
      map(alims => alims.filter(alim => alim.id === id)),
      tap(alim => this.alimDetail$.next(alim[0])),
      take(1),
    ).subscribe();
  }
}
