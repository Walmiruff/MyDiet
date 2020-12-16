import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, tap, take, switchMap } from 'rxjs/operators';

import { constDiagnosticos } from './const';
import { PatientStore } from '../shared/store/patiente.store';
import { CalcCriancaService } from './service/calc-crianca.service';
import { IObj } from '../shared/models/obj.model';

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

  // criança menor 5 anos
  public estaturaIdadeCrianc: IObj;
  public pesoIdadeCrianc: IObj;
  public pesoEstaturaCrianc: IObj;

  constructor(
    private formBuilder: FormBuilder,
    private patienteStore: PatientStore,
    private calcCriancaService: CalcCriancaService
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
      idade: [0, Validators.required],
      sexo: [null],
      altura: [0.00, Validators.required],
      peso: [0, Validators.required],
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
    });

    this.form.valueChanges.subscribe(() => {
      if (this.form.controls.tipo.value == 0) {
        if (this.form.controls.sexo.value == 'M') {
          this.estaturaIdadeCrianc = this.calcCriancaService.estaturaIdadeMenino(Number(this.form.controls.idade.value), Number(this.form.controls.altura.value.toString().replace(',', '.')));
          this.pesoIdadeCrianc = this.calcCriancaService.pesoIdadeMenino(Number(this.form.controls.idade.value), Number(this.form.controls.peso.value.toString().replace(',', '.')));
          this.pesoEstaturaCrianc = this.calcCriancaService.pesoEstaturaMenino(Number(this.form.controls.peso.value.toString().replace(',', '.')), Number(this.form.controls.altura.value.toString().replace(',', '.')));
        } else {
          this.estaturaIdadeCrianc = this.calcCriancaService.estaturaIdadeMenina(Number(this.form.controls.idade.value), Number(this.form.controls.altura.value.toString().replace(',', '.')));
          this.pesoIdadeCrianc = this.calcCriancaService.pesoIdadeMenina(Number(this.form.controls.idade.value), Number(this.form.controls.peso.value.toString().replace(',', '.')));
          this.pesoEstaturaCrianc = this.calcCriancaService.pesoEstaturaMenina(Number(this.form.controls.peso.value.toString().replace(',', '.')), Number(this.form.controls.altura.value.toString().replace(',', '.')));

        }
      }
    })
  }



}
