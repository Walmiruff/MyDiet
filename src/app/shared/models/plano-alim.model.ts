import { IRefeicao } from './refeicao.model';

export interface IPlanoAlim {
    codTipoDieta?: number;
    ativo?: number;
    calculado?: boolean;
    diasSemana?: Array<number>;
    data?: string;
    nome?: string;
    descricao?: string;
    id?: string;
    statusOnline?: number;
    refeicoes?: Array<IRefeicao>;
    dom: boolean;
    seg: boolean;
    ter: boolean;
    qua: boolean;
    qui: boolean;
    sex: boolean;
    sab: boolean;
    idPlanoAlim: number;
    peso: string | number;
    energia: string | number;
    ptnGKgPeso: string | number;
    distChoPlan: string | number;
    distPtnPlan: string | number;
    distLipPlan: string | number;
    cafe: number;
    lancheManha: number;
    almoco: number;
    lancheTarde: number;
    jantar: number;
    lancheNoite: number;
    lancheExtra1: number;
    lancheExtra2: number;
}

export interface IMacronutrientes {
    gObtidoCho: number;
    gObtidoPtn: number;
    gObtidoLip: number;
}

export interface IDistEnergRef {
    cafe: number;
    lancheManha: number;
    almoco: number;
    lancheTarde: number;
    jantar: number;
    lancheNoite: number;
    lancheExtra1: number;
    lancheExtra2: number;
}