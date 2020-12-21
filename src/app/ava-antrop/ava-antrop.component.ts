import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, tap, take, switchMap } from 'rxjs/operators';

import { constDiagnosticos } from './const';
import { PatientStore } from '../shared/store/patiente.store';
import { CalcCriancaService } from './service/calc-crianca.service';
import { CalcAdolService } from './service/calc-adol.service';
import { CalcAdultoService } from './service/calc-adulto.service';
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

  // adulto
  public altura: number;
  public densidadeCorporal: number;
  public percentMassaGorda: number;
  public massaGorda: number;
  public massaMagra: number;
  public percentMassaMagra: number;
  public pesoResidual: number;
  public pesoIdeal
  public pesoOsseo: number;
  public pesoMuscular: number;
  public imcAdulto: IObj;
  public percentGord: IObj;
  public RCQ: IObj;
  public cinturaResult: IObj;

  constructor(
    private formBuilder: FormBuilder,
    private patienteStore: PatientStore,
    private calcCriancaService: CalcCriancaService,
    private calcAdolService: CalcAdolService,
    private calcAdultoService: CalcAdultoService,
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
      antebraco: [null],
      axilarMedia: [null],
      punho: [null],
      femur: [null],
      protocolo: ['0'],
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
      this.altura = this.form.get('altura').value !== null ? this.form.get('altura').value.toString().replace(',', '.') : null;
      if (this.form.controls.tipo.value == 0) {
        if (this.form.controls.sexo.value == 'M') {
          this.estaturaIdadeCrianc = this.calcCriancaService.estaturaIdadeMenino(Number(this.form.controls.idade.value), Number(this.altura));
          this.pesoIdadeCrianc = this.calcCriancaService.pesoIdadeMenino(Number(this.form.controls.idade.value), this.form.controls.peso.value);
          this.pesoEstaturaCrianc = this.calcCriancaService.pesoEstaturaMenino(this.form.controls.peso.value, Number(this.altura));
          this.imcCrianc = this.calcCriancaService.imcMenino(Number(this.altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        } else {
          this.estaturaIdadeCrianc = this.calcCriancaService.estaturaIdadeMenina(Number(this.form.controls.idade.value), Number(this.altura));
          this.pesoIdadeCrianc = this.calcCriancaService.pesoIdadeMenina(Number(this.form.controls.idade.value), this.form.controls.peso.value);
          this.pesoEstaturaCrianc = this.calcCriancaService.pesoEstaturaMenina(this.form.controls.peso.value, Number(this.altura));
          this.imcCrianc = this.calcCriancaService.imcMenina(Number(this.altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        }
        this.calcgordCrianc();
      } else if (this.form.controls.tipo.value == 1) {
        if (this.form.controls.sexo.value == 'M') {
          this.estaturaIdadeAdol = this.calcAdolService.estaturaIdadeMenino(Number(this.form.controls.idade.value), Number(this.altura));
          this.imcAdol = this.calcAdolService.imcMenino(Number(this.altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        } else {
          this.estaturaIdadeAdol = this.calcAdolService.estaturaIdadeMenina(Number(this.form.controls.idade.value), Number(this.altura));
          this.imcAdol = this.calcAdolService.imcMenina(Number(this.altura), this.form.controls.peso.value, Number(this.form.controls.idade.value));
        }
      } else if (this.form.controls.tipo.value == 2) {
        this.imcAdulto = this.calcAdultoService.imc(Number(this.altura), this.form.controls.peso.value);
        this.cinturaResult = this.calcAdultoService.cintura(this.form.controls.cintura.value, this.form.controls.sexo.value);
        this.RCQ = this.calcAdultoService.relCintQuadril(this.form.controls.cintura.value, this.form.controls.quadril.value, this.form.controls.sexo.value, Number(this.form.controls.idade.value));
        if (this.form.controls.protocolo.value == 0) {
          this.protocoloJacksonHomem();
        }
      }
    })
  }

  public calcgordCrianc(): void {
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

  public protocoloJacksonHomem(): void {
    this.densidadeCorporal = (1.10938 - 0.0008267 * (this.form.controls.torax.value + this.form.controls.coxa.value + this.form.controls.abdominal.value) + 0.0000016 * ((this.form.controls.torax.value + this.form.controls.coxa.value + this.form.controls.abdominal.value) * (this.form.controls.torax.value + this.form.controls.coxa.value + this.form.controls.abdominal.value)) - 0.0002574 * Number(this.form.controls.idade.value))
    this.calc(this.densidadeCorporal);
  }

  public calc(densidadeCorporal: number): void {
    if (densidadeCorporal !== 0) {
      let G = ((4.95 / densidadeCorporal) - 4.5) * 100;

      this.percentMassaGorda = (G * this.form.controls.peso.value) / this.form.controls.peso.value;
      this.massaGorda = G * this.form.controls.peso.value / 100;

      this.percentMassaMagra = ((this.form.controls.peso.value - this.massaGorda) * 100) / this.form.controls.peso.value;
      this.massaMagra = this.form.controls.peso.value - this.massaGorda;

      if (this.altura !== 0) {
        if (this.form.controls.sexo.value == 'M') {
          this.pesoResidual = (this.form.controls.peso.value * 24.1 / 100);
          this.pesoIdeal = (72.7 * this.altura) - 58;
        } else {
          this.pesoResidual = (this.form.controls.peso.value * 20.9 / 100);
          this.pesoIdeal = (62.7 * this.altura) - 44.7;
        }
      }

      this.pesoOsseo = 3.02 * Math.pow((this.altura * this.altura) * (this.form.controls.punho.value / 100) * (this.form.controls.femur.value / 100) * 400, 0.712);

      this.pesoMuscular = this.form.controls.peso.value - (this.massaGorda + this.pesoOsseo + this.pesoResidual);
    };

    this.percentGord = this.calcAdultoService.percentGord(this.form.controls.sexo.value, Number(this.form.controls.idade.value), this.percentMassaGorda);
  }



}
