import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, tap, take, switchMap } from 'rxjs/operators';

import { constDiagnosticos } from './const';
import { PatientStore } from '../shared/store/patiente.store';
import { AvaAntropStore } from '../shared/store/ava-antrop.store';
import { CalcCriancaService } from './service/calc-crianca.service';
import { CalcAdolService } from './service/calc-adol.service';
import { CalcAdultoService } from './service/calc-adulto.service';
import { IObj } from '../shared/models/obj.model';

@Component({
  selector: 'app-ava-antrop',
  templateUrl: './ava-antrop.component.html',
  styleUrls: ['./ava-antrop.component.scss']
})
export class AvaAntropComponent implements OnInit, OnDestroy {

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
  public densidadeCorporal: number | string;
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
    private avaAntropStore: AvaAntropStore,
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
    this.avaAntropStore.avaAntrop$
      .pipe(
        take(1),
        tap( r => r === null ? null : this.form.patchValue(r)),
        switchMap(() => {
          return this.patienteStore.patiente$
            .pipe(
              filter((resp) => resp !== null),
              tap((resp) => {
                this.form.patchValue({
                  idade: resp.idade,
                  altura: resp.altura,
                  peso: resp.peso,
                  sexo: resp.sexo,
                });
              })
            );
        }),
      ).subscribe();
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
        } else if (this.form.controls.protocolo.value == 1) {
          this.protocoloJacksonMulher();
        } else if (this.form.controls.protocolo.value == 2) {
          this.protocoloGuedesHomem();
        } else if (this.form.controls.protocolo.value == 3) {
          this.protocoloGuedesMulher();
        } else if (this.form.controls.protocolo.value == 4) {
          this.protocoloDurnin();
        } else if (this.form.controls.protocolo.value == 5) {
          this.protocoloFaulkner();
        } else if (this.form.controls.protocolo.value == 6) {
          this.protocoloJacksonWard();
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

  public protocoloJacksonMulher(): void {
    this.densidadeCorporal = (1.0994921 - 0.0009929 * (this.form.controls.triceps.value + this.form.controls.coxa.value + this.form.controls.suprailiaca.value) + 0.0000023 * ((this.form.controls.triceps.value + this.form.controls.coxa.value + this.form.controls.suprailiaca.value) * (this.form.controls.triceps.value + this.form.controls.coxa.value + this.form.controls.suprailiaca.value)) - 0.0001392 * Number(this.form.controls.idade.value));
    this.calc(this.densidadeCorporal);
  }

  public protocoloGuedesHomem(): void {
    this.densidadeCorporal = (1.1714 - 0.0671 * Math.log10(this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.abdominal.value));
    this.calc(this.densidadeCorporal);
  }

  public protocoloGuedesMulher(): void {
    this.densidadeCorporal = (1.1665 - 0.0706 * Math.log10(this.form.controls.coxa.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
    this.calc(this.densidadeCorporal);
  }

  public protocoloDurnin(): void {
    let idade = Number(this.form.controls.idade.value);
    if (this.form.controls.sexo.value == 'M') {
      if (idade < 17) {
        this.densidadeCorporal = 0;
      } else if (idade < 19) {
        this.densidadeCorporal = (1.162 - 0.063 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 29) {
        this.densidadeCorporal = (1.1631 - 0.0632 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 39) {
        this.densidadeCorporal = (1.1422 - 0.0544 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 49) {
        this.densidadeCorporal = (1.162 - 0.07 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 72) {
        this.densidadeCorporal = (1.1715 - 0.0779 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      }
    } else {
      if (idade < 17) {
        this.densidadeCorporal = 0;
      } else if (idade < 19) {
        this.densidadeCorporal = (1.1715 - 0.0779 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 29) {
        this.densidadeCorporal = (1.1599 - 0.0717 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 39) {
        this.densidadeCorporal = (1.1423 - 0.0612 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 49) {
        this.densidadeCorporal = (1.1333 - 0.0645 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      } else if (idade < 72) {
        this.densidadeCorporal = (1.1339 - 0.0645 * Math.log10(this.form.controls.biceps.value + this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value));
      }
    }
    this.densidadeCorporal === 0 ? '-' : this.calc(this.densidadeCorporal);
  }

  public protocoloFaulkner(): void {
    this.densidadeCorporal = '-';
    let G = (this.form.controls.triceps.value + this.form.controls.suprailiaca.value + this.form.controls.abdominal.value + this.form.controls.subescapular.value) * 0.153 + 5.783;
    this.calcG(G);
  }

  public protocoloJacksonWard(): void {
    let dobras = this.form.controls.triceps.value + this.form.controls.axilarMedia.value + this.form.controls.torax.value + this.form.controls.abdominal.value + this.form.controls.suprailiaca.value + this.form.controls.subescapular.value + this.form.controls.coxa.value;
    if (this.form.controls.sexo.value == 'M') {
      this.densidadeCorporal = 1.112 - 0.0004399 * dobras + 0.00000055 * (dobras * dobras) - 0.00028826 * Number(this.form.controls.idade.value);
    } else {
      this.densidadeCorporal = 1.097 - 0.00046971 * dobras + 0.00000056 * (dobras * dobras) - 0.00012828 * Number(this.form.controls.idade.value);
    }
    this.calc(this.densidadeCorporal);
  }

  public calc(densidadeCorporal: number | string): void {
    if (densidadeCorporal !== 0 && densidadeCorporal !== '-') {
      let G = ((4.95 / Number(densidadeCorporal)) - 4.5) * 100;
      this.calcG(G);
    };
  }

  public calcG(G: number): void {
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

    this.percentGord = this.calcAdultoService.percentGord(this.form.controls.sexo.value, Number(this.form.controls.idade.value), this.percentMassaGorda);
  }


  public ngOnDestroy(): void {
    const patiente = {
      idade: this.form.get('idade').value,
      altura: this.form.get('altura').value,
      peso: this.form.get('peso').value,
      sexo: this.form.get('sexo').value,
    };
    this.patienteStore.set(patiente);
    this.avaAntropStore.set(this.form.value);
  }

}
