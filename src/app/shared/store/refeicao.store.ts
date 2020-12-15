import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap, shareReplay, switchMap } from 'rxjs/operators';

import { IRefeicao } from '../models/refeicao.model';
import { IAlimento } from '../models/alimentos.model';
import { IMacronutrientes, IDistEnergRef } from '../models/plano-alim.model';

@Injectable({
    providedIn: 'root'
})
export class RefeicaoStore {
    private refsSource = new BehaviorSubject<IRefeicao[]>(null);
    private refs: IRefeicao[] = [];
    refs$ = this.refsSource.asObservable().pipe(shareReplay(1));

    private macroSource = new BehaviorSubject<IMacronutrientes>(null);
    macro$ = this.macroSource.asObservable();

    private distEnergRefSource = new BehaviorSubject<IDistEnergRef>(null);
    distEnergRef$ = this.distEnergRefSource.asObservable();

    private vitMineralsSource = new BehaviorSubject<IAlimento>(null);
    vitMinerals$ = this.vitMineralsSource.asObservable();


    public set(refs: IRefeicao[]): void {
        this.refs = refs;
        this.refsSource.next(this.refs);
        this.calcMacro();
        this.calcDistEnergRef();
        this.calcNutrientes();
    };

    public add(ref: IRefeicao): void {
        this.refs.push(ref);
        this.refsSource.next(this.refs);
        this.calcMacro();
        this.calcDistEnergRef();
        this.calcNutrientes();
    }

    public remove(refId: string): void {
        this.refs = this.refs.filter((a) => a.id !== refId);
        this.refsSource.next(this.refs);
        this.calcMacro();
        this.calcDistEnergRef();
        this.calcNutrientes();
    }

    public removeAll(): void {
        this.refs.splice(0);
        this.refsSource.next(this.refs);
    }

    public update(ref: IRefeicao): void {
        const target = this.getId(ref.id);
        Object.assign(target, ref);
        this.refsSource.next(this.refs);
        this.calcMacro();
    }

    public getId(refId: number | string): IRefeicao {
        return this.refs.find((element) => element.id === refId);
    }

    public findAlimInRefStore(idAlim: string): IAlimento {
        let alim: IAlimento;
        this.refs$.pipe(
            map(refs => refs
                .map(ref => ref.alimentos
                    .filter(alimento => alimento.idAlimento === idAlim))),
            tap((alimsFiltered => {
                alimsFiltered.map((alimFiltered => {
                    if (alimFiltered.length > 0) {
                        alim = alimFiltered[0];
                    }
                }));
            })),
        );
        return alim;
    }

    public calcMacro(): void {
        const macro: IMacronutrientes = {
            gObtidoCho: 0,
            gObtidoLip: 0,
            gObtidoPtn: 0,
        };
        this.refs$.pipe(
            map(refs => refs
                .map(ref => ref.alimentos
                    .map(alim => {
                        macro.gObtidoCho += alim.carboidratos;
                        macro.gObtidoLip += alim.gordurasTotais;
                        macro.gObtidoPtn += alim.proteinas;
                    })))
        ).subscribe(() => this.macroSource.next(macro));
    }


    public calcDistEnergRef(): void {
        const refeicao: IDistEnergRef = {
            cafe: 0,
            lancheManha: 0,
            almoco: 0,
            lancheTarde: 0,
            jantar: 0,
            lancheNoite: 0,
            lancheExtra1: 0,
            lancheExtra2: 0,
        };

        this.refs$.pipe(
            map(refs => refs.filter(ref => ref.descricao === 'Café da Manhã')),
            map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.cafe += alim.calorias))),
            switchMap(() => {
                return this.refs$.pipe(
                    map(refs => refs.filter(ref => ref.descricao === 'Lanche da Manhã')),
                    map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.lancheManha += alim.calorias))),
                    switchMap(() => {
                        return this.refs$.pipe(
                            map(refs => refs.filter(ref => ref.descricao === 'Almoço')),
                            map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.almoco += alim.calorias))),
                            switchMap(() => {
                                return this.refs$.pipe(
                                    map(refs => refs.filter(ref => ref.descricao === 'Lanche da Tarde')),
                                    map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.lancheTarde += alim.calorias))),
                                    switchMap(() => {
                                        return this.refs$.pipe(
                                            map(refs => refs.filter(ref => ref.descricao === 'Jantar')),
                                            map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.jantar += alim.calorias))),
                                            switchMap(() => {
                                                return this.refs$.pipe(
                                                    map(refs => refs.filter(ref => ref.descricao === 'Lanche da Noite')),
                                                    map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.lancheNoite += alim.calorias))),
                                                    switchMap(() => {
                                                        return this.refs$.pipe(
                                                            map(refs => refs.filter(ref => ref.descricao === 'Lanche Extra 1')),
                                                            map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.lancheExtra1 += alim.calorias))),
                                                            switchMap(() => {
                                                                return this.refs$.pipe(
                                                                    map(refs => refs.filter(ref => ref.descricao === 'Lanche Extra 2')),
                                                                    map(refs => refs.map(ref => ref.alimentos.map(alim => refeicao.lancheExtra2 += alim.calorias))),
                                                                );
                                                            }),
                                                        );
                                                    }),
                                                );
                                            }),
                                        );
                                    }),
                                );
                            }),
                        );
                    }),
                );
            })
        ).subscribe(() => this.distEnergRefSource.next(refeicao));
    }

    public calcNutrientes(): void {
        const vitMinerals: IAlimento = {
            carboidratos: 0,
            acucar: 0,
            proteinas: 0,
            fibras: 0,
            colesterol: 0,
            vitaminaA_Retinol: 0,
            vitaminaC: 0,
            vitaminaD: 0,
            vitaminaE: 0,
            vitaminaB1: 0,
            vitaminaB2: 0,
            vitaminaB3: 0,
            vitaminaB6: 0,
            vitaminaB9: 0,
            vitaminaB12: 0,
            gordurasTotais: 0,
            gordurasSaturadas: 0,
            gordurasMonoinsaturadas: 0,
            gordurasPoliInsaturadas: 0,
            gordurasTrans: 0,
            calcio: 0,
            cobre: 0,
            ferro: 0,
            fosforo: 0,
            magnesio: 0,
            potassio: 0,
            selenio: 0,
            sodio: 0,
            zinco: 0,
        };


        this.refs$.pipe(
            map(refs => refs.map(ref => ref.alimentos.map(alim => {
                vitMinerals.carboidratos += alim.carboidratos = alim.carboidratos === -1 ? 0 : alim.carboidratos;
                vitMinerals.acucar += alim.acucar = alim.acucar === -1 ? 0 : alim.acucar;
                vitMinerals.proteinas += alim.proteinas = alim.proteinas === -1 ? 0 : alim.proteinas;
                vitMinerals.fibras += alim.fibras = alim.fibras === -1 ? 0 : alim.fibras;
                vitMinerals.colesterol += alim.colesterol = alim.colesterol === -1 ? 0 : alim.colesterol;
                vitMinerals.vitaminaA_Retinol += alim.vitaminaA_Retinol = alim.vitaminaA_Retinol === -1 ? 0 : alim.vitaminaA_Retinol;
                vitMinerals.vitaminaC += alim.vitaminaC = alim.vitaminaC === -1 ? 0 : alim.vitaminaC;
                vitMinerals.vitaminaD += alim.vitaminaD = alim.vitaminaD === -1 ? 0 : alim.vitaminaD;
                vitMinerals.vitaminaE += alim.vitaminaE = alim.vitaminaE === -1 ? 0 : alim.vitaminaE;
                vitMinerals.vitaminaB1 += alim.vitaminaB1 = alim.vitaminaB1 === -1 ? 0 : alim.vitaminaB1;
                vitMinerals.vitaminaB2 += alim.vitaminaB2 = alim.vitaminaB2 === -1 ? 0 : alim.vitaminaB2;
                vitMinerals.vitaminaB3 += alim.vitaminaB3 = alim.vitaminaB3 === -1 ? 0 : alim.vitaminaB3;
                vitMinerals.vitaminaB6 += alim.vitaminaB6 = alim.vitaminaB6 === -1 ? 0 : alim.vitaminaB6;
                vitMinerals.vitaminaB9 += alim.vitaminaB9 = alim.vitaminaB9 === -1 ? 0 : alim.vitaminaB9;
                vitMinerals.vitaminaB12 += alim.vitaminaB12 = alim.vitaminaB12 === -1 ? 0 : alim.vitaminaB12;
                vitMinerals.gordurasTotais += alim.gordurasTotais = alim.gordurasTotais === -1 ? 0 : alim.gordurasTotais;
                vitMinerals.gordurasSaturadas += alim.gordurasSaturadas = alim.gordurasSaturadas === -1 ? 0 : alim.gordurasSaturadas;
                vitMinerals.gordurasMonoinsaturadas += alim.gordurasMonoinsaturadas = alim.gordurasMonoinsaturadas === -1 ? 0 : alim.gordurasMonoinsaturadas;
                vitMinerals.gordurasPoliInsaturadas += alim.gordurasPoliInsaturadas = alim.gordurasPoliInsaturadas === -1 ? 0 : alim.gordurasPoliInsaturadas;
                vitMinerals.gordurasTrans += alim.gordurasTrans = alim.gordurasTrans === -1 ? 0 : alim.gordurasTrans;
                vitMinerals.calcio += alim.calcio = alim.calcio === -1 ? 0 : alim.calcio;
                vitMinerals.cobre += alim.cobre = alim.cobre === -1 ? 0 : alim.cobre;
                vitMinerals.ferro += alim.ferro = alim.ferro === -1 ? 0 : alim.ferro;
                vitMinerals.fosforo += alim.fosforo = alim.fosforo === -1 ? 0 : alim.fosforo;
                vitMinerals.magnesio += alim.magnesio = alim.magnesio === -1 ? 0 : alim.magnesio;
                vitMinerals.potassio += alim.potassio = alim.potassio === -1 ? 0 : alim.potassio;
                vitMinerals.selenio += alim.selenio = alim.selenio === -1 ? 0 : alim.selenio;
                vitMinerals.sodio += alim.sodio = alim.sodio === -1 ? 0 : alim.sodio;
                vitMinerals.zinco += alim.zinco = alim.zinco === -1 ? 0 : alim.zinco;
            })))
        ).subscribe(() => this.vitMineralsSource.next(vitMinerals));
    } 

}
