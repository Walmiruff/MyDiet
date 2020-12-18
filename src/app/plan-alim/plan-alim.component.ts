import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map, filter, tap, take, delay, shareReplay } from 'rxjs/operators';

import { IAlimento } from '../shared/models/alimentos.model';
import { IRefeicao } from '../shared/models/refeicao.model';
import { IMacronutrientes } from '../shared/models/plano-alim.model';
import { IDistEnergRef } from '../shared/models/plano-alim.model';
import { PortionStore } from '../shared/store/porcoes.store';
import { AlimStore } from '../shared/store/alim.store';
import { RefeicaoStore } from '../shared/store/refeicao.store';
import { GastosEnergStore } from '../shared/store/gastos-energ.store';
import { PlanAlimStore } from '../shared/store/plano-alim.store';
import { DropdownService } from './service/dropdown.service';
import { AlimentosService } from '../shared/services/alimentos.service';

@Component({
  selector: 'app-plan-alim',
  templateUrl: './plan-alim.component.html',
  styleUrls: ['./plan-alim.component.scss']
})
export class PlanAlimComponent implements OnInit, OnDestroy {

  public alimentos$: Observable<Array<IAlimento>>;
  public porcoes: any[] = [];
  public hiddenModalRef = false;
  public formModalAlim: FormGroup;
  public formPorcao: FormGroup;
  public formModalRef: FormGroup;
  public formPlanoAlim: FormGroup;
  public tabelas: any[] = [];
  public alimSelected: IAlimento;
  public alimStore$: Observable<Array<IAlimento>>;
  public alimStorePrimary$: Observable<Array<IAlimento>>;
  public alimStoreSecond$: Observable<Array<IAlimento>>;
  public refeicoes$: Observable<Array<IRefeicao>>;
  public macro$: Observable<IMacronutrientes>;
  public alimentoCalculado$ = new BehaviorSubject<IAlimento>(null);
  public distEnergRef$: Observable<IDistEnergRef>;
  public vitMinerals$: Observable<IAlimento>;
  public id: string;
  public isSegundaOpcao = false;
  public isDistMacroMicro = true;
  public macroPlan = {
    kcalCho: -1,
    kcalPtn: -1,
    kcalLip: -1,
    gCho: -1,
    gPtn: -1,
    gLip: -1,
  }
  public mask: Array<string | RegExp>;
  public maskNumber: Array<string | RegExp>;
  constructor(
    private formBuilder: FormBuilder,
    private alimentosService: AlimentosService,
    private dropdownService: DropdownService,
    private portionStore: PortionStore,
    private alimStore: AlimStore,
    private refeicaoStore: RefeicaoStore,
    private gastosEnergStore: GastosEnergStore,
    private planAlimStore: PlanAlimStore,
  ) {
    this.mask = [/\d+/, ',', /\d+/, /\d+/];
    this.maskNumber = [/\d+/, /\d+/, /\d+/, ',', /\d+/, /\d+/];
    this.buildForms();
  }

  ngOnInit() {
    this.triggersControls();
    this.alimentos$ = this.alimentosService.getAllAlimentos();
    this.tabelas = this.dropdownService.getTabelas();

    this.refeicoes$ = this.refeicaoStore.refs$;
    this.alimStore$ = this.alimStore.alims$.pipe(shareReplay(1));
    this.macro$ = this.refeicaoStore.macro$.pipe(shareReplay(1));
    this.distEnergRef$ = this.refeicaoStore.distEnergRef$.pipe(shareReplay(1));
    this.vitMinerals$ = this.refeicaoStore.vitMinerals$.pipe(shareReplay(1));  

    this.separetePrimOrSecOption();

    this.planAlimStore.patienteAlim$.pipe(
      filter(resp => resp !== null),
      tap(resp => this.formPlanoAlim.patchValue(resp))
    ).subscribe();

    this.gastosEnergStore.gastosEnerg$
      .pipe(
        filter(resp => resp !== null),
        tap(resp => this.formPlanoAlim.controls.energia.patchValue(resp.gastoEnergFinal))
      )
      .subscribe();
  }

  public modalHiddenRef(): void {
    this.hiddenModalRef = !this.hiddenModalRef;
  }

  public buildForms(): void {
    this.formModalAlim = this.formBuilder.group({
      tabelas: ['TACO'],
      alimento: [null],
      porcoes: [null],
      quantidade: [1],
      idAlimento: [null]
    });

    this.formPorcao = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      gramas: [null, [Validators.required]],
      editavel: true,
      id: [null],
      statusOnline: 1,
    });

    this.formModalRef = this.formBuilder.group({
      horarioRefeicao: [null, [Validators.required]],
      tipoRefeicao: [null, [Validators.required]],
      observacaoRefeicao: [null],
      id: [null]
    });

    this.formPlanoAlim = this.formBuilder.group({
      dataAtend: [null],
      calculado: [null],
      dom: [false],
      seg: [false],
      ter: [false],
      qua: [false],
      qui: [false],
      sex: [false],
      sab: [false],
      data: [null],
      descricao: [null],
      idPlanoAlim: [null],
      peso: [null],
      energia: [null],
      ptnGKgPeso: [null],
      distChoPlan: [null],
      distPtnPlan: [null],
      distLipPlan: [null],
      cafe: [25],
      lancheManha: [5],
      almoco: [35],
      lancheTarde: [10],
      jantar: [20],
      lancheNoite: [5],
      lancheExtra1: [null],
      lancheExtra2: [null],
    });
  }

  public triggersControls(): void {
    this.formModalAlim.controls.tabelas.valueChanges.subscribe(value => {
      this.alimentos$ = null;
      this.porcoes.splice(0);
      this.formModalAlim.controls.porcoes.patchValue(null);
      this.formModalAlim.controls.alimento.reset();
      this.formModalAlim.controls.quantidade.patchValue(1);
      value === 0 ? this.alimentos$ = this.alimentosService.getAllAlimentos() :
        this.alimentos$ = this.alimentosService.getAlimentos(value.toString());
    });
    this.formModalAlim.controls.alimento.valueChanges
      .pipe(
        tap(() => {
          this.formModalAlim.controls.porcoes.patchValue(null);
          this.porcoes.splice(0);
        }),
        filter(value => value !== 'null' && value !== null),
        switchMap(value => {
          return this.alimentos$
            .pipe(
              filter((alimentos) => alimentos !== undefined && alimentos.length > 0),
              map((alimentos) => alimentos.filter((alimento) => alimento.id == (value))),
              map((alimentos) => {
                this.alimSelected = alimentos[0];
                alimentos[0].porcoes.map(element => {
                  this.porcoes.push(element);
                });
              }),
              tap(() => this.getPortionCustom(this.formModalAlim.controls.alimento.value)),
            );
        }),
      )
      .subscribe();
    this.formPlanoAlim.valueChanges.subscribe(() => this.calMacroPlan());
  }

  public onConfirm(): void {
    this.formPorcao.controls.id.patchValue(this.formModalAlim.controls.alimento.value);
    this.portionStore.add(this.formPorcao.value);
    this.getPortionCustom(this.formModalAlim.controls.alimento.value);
  }

  public getPortionCustom(idAlim: number | string): void {
    this.portionStore.portions$.pipe(
      take(1),
      filter(porcoes => porcoes !== null),
      map((porcoes) => porcoes.filter((porcao) => porcao.id === idAlim)),
    ).subscribe((porcoes) => {
      porcoes.map(element => {
        this.porcoes.push(element);
      });
    });
  }

  // public novaPorcao(): void {
  //    this.modalService.showModalAlim();
  // }

  public buildAndShowAlimInfo(): void {
    const alimCopy = JSON.parse(JSON.stringify(this.buildAlim()));
    const alimCopyCalc = this.alimStore.alimCalc(alimCopy);
    this.alimentoCalculado$.next(alimCopyCalc);
  }

  public showAlimInfo(alim: IAlimento): void {
    this.alimentoCalculado$.next(alim);
  }

  public saveAlim(): void {
    this.formModalAlim.controls.idAlimento.value === null ? this.alimStore.add(this.buildAlim()) : this.alimStore.update(this.buildAlim());
  }

  public buildAlim(): IAlimento {
    const alim: IAlimento = {
      idAlimento: this.formModalAlim.controls.idAlimento.value === null ? uuid() : this.formModalAlim.controls.idAlimento.value,
      porcao: this.formModalAlim.controls.porcoes.value.split('-')[1],
      ordemListagem: this.isSegundaOpcao === false ? 1 : 2,
      porcaoGramas: Number(this.formModalAlim.controls.porcoes.value.split('-')[0]),
      quantidade: Number(this.formModalAlim.controls.quantidade.value),
      descricao: this.alimSelected.descricao,
      idGrupo: this.alimSelected.idGrupo,
      grupoAlimentar: this.alimSelected.grupoAlimentar,
      origem: this.alimSelected.origem,
      auditado: this.alimSelected.auditado,
      calorias: this.alimSelected.calorias,
      proteinas: this.alimSelected.proteinas,
      gordurasTotais: this.alimSelected.gordurasTotais,
      gordurasSaturadas: this.alimSelected.gordurasSaturadas,
      gordurasMonoinsaturadas: this.alimSelected.gordurasMonoinsaturadas,
      gordurasPoliInsaturadas: this.alimSelected.gordurasPoliInsaturadas,
      gordurasTrans: this.alimSelected.gordurasTrans,
      carboidratos: this.alimSelected.carboidratos,
      fibras: this.alimSelected.fibras,
      calcio: this.alimSelected.calcio,
      magnesio: this.alimSelected.magnesio,
      manganes: this.alimSelected.manganes,
      fosforo: this.alimSelected.fosforo,
      ferro: this.alimSelected.ferro,
      sodio: this.alimSelected.sodio,
      potassio: this.alimSelected.potassio,
      cobre: this.alimSelected.cobre,
      zinco: this.alimSelected.zinco,
      selenio: this.alimSelected.selenio,
      vitaminaA_Retinol: this.alimSelected.vitaminaA_Retinol,
      vitaminaB1: this.alimSelected.vitaminaB1,
      vitaminaB2: this.alimSelected.vitaminaB2,
      vitaminaB3: this.alimSelected.vitaminaB3,
      vitaminaB5: this.alimSelected.vitaminaB5,
      vitaminaB6: this.alimSelected.vitaminaB6,
      vitaminaB7: this.alimSelected.vitaminaB7,
      vitaminaB9: this.alimSelected.vitaminaB9,
      vitaminaB12: this.alimSelected.vitaminaB12,
      vitaminaD: this.alimSelected.vitaminaD,
      vitaminaE: this.alimSelected.vitaminaE,
      vitaminaC: this.alimSelected.vitaminaC,
      colesterol: this.alimSelected.colesterol,
      acucar: this.alimSelected.acucar,
      editavel: this.alimSelected.editavel,
      id: this.alimSelected.id,
      statusOnline: this.alimSelected.statusOnline
    };
    return alim;
  }

  public saveOrUpdateRef(): void {
    this.alimStore.alims$
      .pipe(
        take(1),
        tap(alims => {
          const ref: IRefeicao = {
            id: this.formModalRef.controls.id.value === null ? uuid() : this.formModalRef.controls.id.value,
            itens: '1', // primeira de opçao como refeiçao
            descricao: this.formModalRef.controls.tipoRefeicao.value,
            observacao: this.formModalRef.controls.observacaoRefeicao.value,
            horario: this.formModalRef.controls.horarioRefeicao.value,
            alimentos: [...alims],
          };
          this.formModalRef.controls.id.value === null ? this.refeicaoStore.add(ref) : this.refeicaoStore.update(ref);
        }),
        delay(500),
      )
      .subscribe(() => this.alimStore.removeAll());
  }

  public removeAlim(idAlimento: string): void {
    this.alimStore.remove(idAlimento);
  }

  public updateAlim(alimId: string): void {
    // carreagar modal de alimentos
    this.alimStore.alims$.pipe(
      take(1),
      map((alims) => alims.filter((alim) => alim.id === alimId)),
      delay(2000)
    )
      .subscribe(alimSelected => {
        this.formModalAlim.patchValue({
          tabelas: alimSelected[0].origem,
          alimento: alimSelected[0].id,
          porcoes: `${alimSelected[0].porcaoGramas}-${alimSelected[0].porcao}`,
          quantidade: alimSelected[0].quantidade,
          idAlimento: alimSelected[0].idAlimento,
        });
      });
  }


  public updateRef(refId: string, isCopy: boolean): void {
    // carregar o  modal de refeiçoes
    let copyRefeicaoSelectyAlim: any[] = [];
    this.refeicaoStore.refs$.pipe(
      take(1),
      map((refs) => refs.filter((ref) => ref.id === refId)),
    )
      .subscribe(refeicaoSelect => {
        this.formModalRef.patchValue({
          horarioRefeicao: refeicaoSelect[0].horario,
          tipoRefeicao: refeicaoSelect[0].descricao,
          observacaoRefeicao: refeicaoSelect[0].observacao,
          id: isCopy === true ? null : refeicaoSelect[0].id,
        });
        if (isCopy === true) { // mudar idAlimentos
          copyRefeicaoSelectyAlim = JSON.parse(JSON.stringify(refeicaoSelect[0].alimentos));
          copyRefeicaoSelectyAlim.map(alim => alim.idAlimento = uuid());
        }
        this.alimStore.set(isCopy === true ? copyRefeicaoSelectyAlim : refeicaoSelect[0].alimentos);
      });
  }

  public deleteRef(refId: string): void {
    this.refeicaoStore.remove(refId);
  }

  public clearModalAlim(): void {
    this.formModalAlim.patchValue({
      tabelas: 'TACO',
      alimento: null,
      porcoes: null,
      quantidade: 1,
      idAlimento: null
    });
  }

  public clearModalRef(): void {
    this.formModalRef.reset();
    this.alimStore.set([]);
  }

  public addOptionFalse(): void {
    this.isSegundaOpcao = false;
  }

  public addOption(): void {
    this.isSegundaOpcao = true;
  }

  public separetePrimOrSecOption(): void {
    this.alimStorePrimary$ = this.alimStore$.pipe(
      filter(alim => alim !== null),
      map(alims => alims.filter(alim => alim.ordemListagem === 1)),
    );

    this.alimStoreSecond$ = this.alimStore$.pipe(
      filter(alim => alim !== null),
      map(alims => alims.filter(alim => alim.ordemListagem === 2)),
    );
  }

  public resetModalAlim(): void {
    this.formModalAlim.controls.porcoes.patchValue(null);
    this.formModalAlim.controls.alimento.patchValue(null);
    this.formModalAlim.controls.quantidade.patchValue(1);
  }

  public hasSecondOption(alims: IAlimento[]): boolean {
    return alims.some((e) => {
      return e.ordemListagem === 2;
    });
  }

  public showDistMacroMicro(): void {
    this.isDistMacroMicro = !this.isDistMacroMicro;
    var element = document.getElementById('macro');
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }, 300);
  }

  public calMacroPlan(): void {
    const energia = this.formPlanoAlim.controls.energia.value === null ? -1 : this.formPlanoAlim.controls.energia.value;
    const distChoPlan = this.formPlanoAlim.controls.distChoPlan.value === null ? 0 : this.formPlanoAlim.controls.distChoPlan.value;
    const distPtnPlan = this.formPlanoAlim.controls.distPtnPlan.value === null ? 0 : this.formPlanoAlim.controls.distPtnPlan.value
    const distLipPlan = this.formPlanoAlim.controls.distLipPlan.value === null ? 0 : this.formPlanoAlim.controls.distLipPlan.value;

    this.macroPlan.kcalCho = (energia * distChoPlan) / 100;
    this.macroPlan.gCho = this.macroPlan.kcalCho / 4;

    this.macroPlan.kcalPtn = (energia * distPtnPlan) / 100;
    this.macroPlan.gPtn = this.macroPlan.kcalPtn / 4;

    this.macroPlan.kcalLip = (energia * distLipPlan) / 100;
    this.macroPlan.gLip = this.macroPlan.kcalLip / 9;
  }

  ngOnDestroy(): void {
    this.planAlimStore.set(this.formPlanoAlim.value);
  }
}
