import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, tap, take, switchMap } from 'rxjs/operators';

import { constDiagnosticos } from './const';
import { PatientStore } from '../shared/store/patiente.store';
import { CalcCriancaService } from './service/calc-crianca.service';
import { CalcAdolService } from './service/calc-adol.service';
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
  public imcCrianc: IObj;
  public gordCrianc: IObj;

  // adolescente
  public estaturaIdadeAdol: IObj;
  public imcAdol: IObj;

  constructor(
    private formBuilder: FormBuilder,
    private patienteStore: PatientStore,
    private calcCriancaService: CalcCriancaService,
    private calcAdolService: CalcAdolService,
  ) {
    this.mask = [/\d+/, ',', /\d+/, /\d+/];
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
      // criança menor 5 anos
      tricepsCrianca: [null],
      subescapularCrianca: [null],
      // adulto
      ombro: [null],
      coxaDireita: [null],
      peitoral: [null],
      coxaEsquerda: [null],
      cintura: [null],
      coxaProxDireita: [null],
      abdomen: [null],
      coxaProxEsquerda: [null],
      quadril: [null],
      bracoRelaxDireito: [null],
      panturrDireita: [null],
      bracoRelaxEsquerdo: [null],
      panturrEsquerda: [null],
      bracoContrDireito: [null],
      pescoco: [null],
      bracoContrEsquerdo: [null],
      punho: [null],
      femur: [null],
      protocolo: [null],
      biceps: [null],
      abdominal: [null],
      triceps: [null],
      suprailiaca: [null],
      subescapular: [null],
      torax: [null],
      coxa: [null]
    });
  }

  public triggersControls(): void {
    this.form.controls.tipo.valueChanges.subscribe(valor => {
      this.diagnosticos = constDiagnosticos[valor];
      this.form.controls.diagnostico.patchValue(null);
    });

    this.form.valueChanges.subscribe(() => {
      const altura = this.form.get('altura').value !== null ? this.form.get('altura').value.toString().replace(',', '.') : null;
      if (this.form.controls.tipo.value == 0) {
        if (this.form.controls.sexo.value == 'M') {
          this.estaturaIdadeCrianc = this.calcCriancaService.estaturaIdadeMenino(Number(this.form.controls.idade.value), Number(altura));
          this.pesoIdadeCrianc = this.calcCriancaService.pesoIdadeMenino(Number(this.form.controls.idade.value), this.form.controls.peso.value);
          this.pesoEstaturaCrianc = this.calcCriancaService.pesoEstaturaMenino(this.form.controls.peso.value, Number(altura));
          this.imcCrianc = this.calcCriancaService.imcMenino(Number(altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        } else {
          this.estaturaIdadeCrianc = this.calcCriancaService.estaturaIdadeMenina(Number(this.form.controls.idade.value), Number(altura));
          this.pesoIdadeCrianc = this.calcCriancaService.pesoIdadeMenina(Number(this.form.controls.idade.value), this.form.controls.peso.value);
          this.pesoEstaturaCrianc = this.calcCriancaService.pesoEstaturaMenina(this.form.controls.peso.value, Number(altura));
          this.imcCrianc = this.calcCriancaService.imcMenina(Number(altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        }
        this.calgordCrianc();
      } else if (this.form.controls.tipo.value == 1) {
        if (this.form.controls.sexo.value == 'M') {
          this.estaturaIdadeAdol = this.calcAdolService.estaturaIdadeMenino(Number(this.form.controls.idade.value), Number(altura));
          this.imcAdol = this.calcAdolService.imcMenino(Number(altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        } else {
          this.estaturaIdadeAdol = this.calcAdolService.estaturaIdadeMenina(Number(this.form.controls.idade.value), Number(altura));
          this.imcAdol = this.calcAdolService.imcMenina(Number(altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        }
      } else if (this.form.controls.tipo.value == 2) {

      }
    })
  }

  public calgordCrianc(): void {
    if (this.form.controls.tricepsCrianca.value !== null && this.form.controls.subescapularCrianca.value !== null) {
      let BF;
      let sum = this.form.controls.tricepsCrianca.value + this.form.controls.subescapularCrianca.value;
      if (sum < 35) {
        BF = 1.33 * (sum) - 0.013 * (sum * sum) - 2.5
      } else {
        BF = 0.546 * (sum) + 9.7
      }

      if (this.form.controls.tricepsCrianca.value === 'M') {
        if (BF < 10) {
          this.gordCrianc = { ref: BF, text: 'Baixo', brush: 'red' };
        } else if (BF < 20) {
          this.gordCrianc = { ref: BF, text: 'Normal', brush: 'green' };
        } else if (BF < 25) {
          this.gordCrianc = { ref: BF, text: 'Moderadamente Alto', brush: 'yellow' };
        } else {
          this.gordCrianc = { ref: BF, text: 'Alto', brush: 'red' };
        }
      } else {
        if (BF < 15) {
          this.gordCrianc = { ref: BF, text: 'Baixo', brush: 'red' };
        } else if (BF < 25) {
          this.gordCrianc = { ref: BF, text: 'Normal', brush: 'green' };
        } else if (BF < 30) {
          this.gordCrianc = { ref: BF, text: 'Moderadamente Alto', brush: 'yellow' };
        } else {
          this.gordCrianc = { ref: BF, text: 'Alto', brush: 'red' };
        }
      }
    }
  }



}
