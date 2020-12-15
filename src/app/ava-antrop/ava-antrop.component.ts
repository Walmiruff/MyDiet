import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, tap, take, switchMap } from 'rxjs/operators';

import { constDiagnosticos } from './const';
import { PatientStore } from '../shared/store/patiente.store';

@Component({
  selector: 'app-ava-antrop',
  templateUrl: './ava-antrop.component.html',
  styleUrls: ['./ava-antrop.component.scss']
})
export class AvaAntropComponent implements OnInit {

  public form: FormGroup;
  public mask: Array<string | RegExp>;
  public maskNumber: Array<string | RegExp>;
  public maskNumber2: Array<string | RegExp>;
  public maskNumber3: Array<string | RegExp>;
  public diagnosticos = constDiagnosticos[0];

  constructor(
    private formBuilder: FormBuilder,
    private patienteStore: PatientStore,
  ) {
    this.mask = [/\d+/, ',', /\d+/, /\d+/];
    this.maskNumber = [/\d+/, /\d+/, /\d+/];
    this.maskNumber2 = [/\d+/, /\d+/];
    this.maskNumber3 = [/\d+/, /\d+/, /\d+/, /\d+/, /\d+/];
    this.buildForm();
  }

  ngOnInit(): void {
     this.triggersControls();
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      desc: [null],
      dataAtend: [null],
      idade: [null, Validators.required],
      sexo: [null],
      altura: [null, Validators.required],
      peso: [null, Validators.required],
      tipo: [null],
      diagnostico: [null],
      tricepsCrianca: [null],
      subescapularCrianca: [null]
    });
  }

  public triggersControls(): void {
    this.form.controls.tipo.valueChanges.subscribe(valor => { 
      this.diagnosticos = constDiagnosticos[valor];
      this.form.controls.diagnostico.patchValue(null);
    })
  }

}
