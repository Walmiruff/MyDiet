import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IPlanoAlim } from '../models/plano-alim.model';


@Injectable({
    providedIn: 'root'
})
export class PlanAlimStore {

    private planAlimSource = new BehaviorSubject<IPlanoAlim>(null);

    patienteAlim$ = this.planAlimSource.asObservable().pipe(shareReplay(1));

    set(planoAlim: IPlanoAlim) {
        this.planAlimSource.next(planoAlim);
    }
}
